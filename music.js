/* Music toggle with soft fade-in */
(function () {
  const btn = document.getElementById("music-toggle");
  const audio = document.getElementById("bg-music");
  if (!btn || !audio) return;

  audio.volume = 0;

  function fadeTo(target, duration = 1500) {
    const start = audio.volume;
    const diff = target - start;
    const t0 = performance.now();
    function step(t) {
      const p = Math.min(1, (t - t0) / duration);
      audio.volume = Math.max(0, Math.min(1, start + diff * p));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play().then(() => {
        btn.classList.add("playing");
        btn.querySelector("i").className = "fa-solid fa-pause";
        btn.querySelector(".music-label").textContent = "Musique en cours";
        fadeTo(0.55, 1800);
      }).catch(() => {
        // autoplay blocked
      });
    } else {
      fadeTo(0, 700);
      setTimeout(() => {
        audio.pause();
        btn.classList.remove("playing");
        btn.querySelector("i").className = "fa-solid fa-play";
        btn.querySelector(".music-label").textContent = "Activer la musique";
      }, 720);
    }
  });
})();
