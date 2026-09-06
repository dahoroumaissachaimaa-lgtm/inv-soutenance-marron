/* Envelope intro sequence:
   1) envelope appears
   2) flap opens (wax seal fades)
   3) card slides out & up
   4) "Ouvrir l'invitation" button appears
   5) on click -> everything fades, main page revealed
*/
(function () {
  const intro    = document.getElementById("intro");
  const envelope = document.getElementById("envelope");
  const flap     = document.getElementById("envFlap");
  const card     = document.getElementById("envCard");
  const openBtn  = document.getElementById("openBtn");

  if (!intro || !envelope || !openBtn) return;

  // Lock scroll while intro visible
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

  // Timeline
  // 0.0s : envelope fade + scale in (via CSS animation @0.4s)
  // 2.4s : flap opens, seal breaks
  // 3.8s : card slides up
  // 5.2s : "Open" button appears

  setTimeout(() => {
    envelope.classList.add("flap-open");
  }, 2400);

  setTimeout(() => {
    envelope.classList.add("card-out");
  }, 3800);

  setTimeout(() => {
    openBtn.classList.add("visible");
  }, 5200);

  // Button click -> reveal main page
  openBtn.addEventListener("click", () => {
    intro.classList.add("leaving");

    setTimeout(() => {
      intro.classList.add("hidden");
      // release scroll
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";

      // trigger AOS refresh so first-view animations play
      if (window.AOS && AOS.refreshHard) AOS.refreshHard();

      // Optional: auto-scroll to top of hero (already there)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  });
})();
