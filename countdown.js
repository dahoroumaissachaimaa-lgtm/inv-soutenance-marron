/* Countdown to 06 June 2027 10:00 (Algeria local time UTC+1) */
(function () {
  const target = new Date("2027-06-06T10:00:00+01:00").getTime();
  const daysEl  = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl  = document.getElementById("cd-mins");
  const secsEl  = document.getElementById("cd-secs");

  let lastSec = -1;

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    if (daysEl)  daysEl.textContent  = pad(d);
    if (hoursEl) hoursEl.textContent = pad(h);
    if (minsEl)  minsEl.textContent  = pad(m);
    if (secsEl) {
      secsEl.textContent = pad(s);
      if (s !== lastSec) {
        secsEl.classList.remove("tick");
        // force reflow
        void secsEl.offsetWidth;
        secsEl.classList.add("tick");
        lastSec = s;
      }
    }
  }

  tick();
  setInterval(tick, 1000);
})();
