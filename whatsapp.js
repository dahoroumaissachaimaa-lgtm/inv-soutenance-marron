/* Calendar (.ics) generator */
(function () {
  const btn = document.getElementById("btn-cal");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Event: 2027-06-06 10:00 -> 12:00 (Africa/Algiers = UTC+1)
    // Convert to UTC: 09:00 -> 11:00
    const dtStart = "20270606T090000Z";
    const dtEnd   = "20270606T110000Z";
    const now     = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Soutenance Master//FR",
      "BEGIN:VEVENT",
      "UID:soutenance-daho-20270606@usto",
      "DTSTAMP:" + now,
      "DTSTART:" + dtStart,
      "DTEND:" + dtEnd,
      "SUMMARY:Soutenance de Master — Roumaissa Chaimaa DAHO",
      "DESCRIPTION:Soutenance de mémoire de Master 2 — Systèmes d'Information Distribués.",
      "LOCATION:USTO-MB Oran — Département Informatique",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "soutenance-daho-06-06-2027.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
})();
