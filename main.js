/* Main: loader, particles, petals */
document.addEventListener("DOMContentLoaded", () => {
  // hide loader after short delay
  setTimeout(() => {
    document.body.classList.add("loaded");
    const loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 1200);

  // Petals
  const petalsContainer = document.getElementById("petals-container");
  function spawnPetal() {
    if (!petalsContainer) return;
    const p = document.createElement("span");
    p.className = "petal";
    const size = 18 + Math.random() * 26;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    const duration = 10 + Math.random() * 10;
    p.style.animationDuration = duration + "s";
    p.style.opacity = 0.35 + Math.random() * 0.55;
    petalsContainer.appendChild(p);
    setTimeout(() => p.remove(), duration * 1000);
  }
  // stream of petals
  setInterval(spawnPetal, 1600);
  for (let i = 0; i < 5; i++) setTimeout(spawnPetal, i * 500);

  // Golden sparkles
  const particles = document.getElementById("particles");
  function spawnSpark() {
    if (!particles) return;
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    const dur = 2 + Math.random() * 3;
    s.style.animationDuration = dur + "s";
    s.style.transform = `scale(${0.5 + Math.random() * 1.4})`;
    particles.appendChild(s);
    setTimeout(() => s.remove(), dur * 1000);
  }
  setInterval(spawnSpark, 300);
});
