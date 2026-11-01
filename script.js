/**
 * ============================================================================
 * BHAGWATI DENTAL CARE — PRODUCTION ES6 RUNTIME LOGIC (script.js)
 * Features:
 *  1. Asia/Kolkata Timezone-Locked Split-OPD Status Indicator (Morning 10-2, Eve 5-9)
 *  2. Accessible Mobile Navigation Drawer Controller
 *  3. Dynamic 15-Second WhatsApp Appointment Message Builder
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. LIVE ASIA/KOLKATA SPLIT-OPD STATUS ENGINE
     -------------------------------------------------------------------------- */
  function updateOpdStatus() {
    const statusDot = document.getElementById('live-status-dot');
    const statusText = document.getElementById('live-status-text');
    const clockElem = document.getElementById('live-ist-clock');

    if (!statusDot || !statusText || !clockElem) return;

    // Get current time in Asia/Kolkata timezone
    const now = new Date();
    const optionsTime = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const optionsDay = { timeZone: 'Asia/Kolkata', weekday: 'short' };
    const optionsHourNum = { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false };
    const optionsMinNum = { timeZone: 'Asia/Kolkata', minute: 'numeric' };

    const timeString = new Intl.DateTimeFormat('en-GB', optionsTime).format(now);
    const dayString = new Intl.DateTimeFormat('en-GB', optionsDay).format(now); // Mon, Tue, etc.
    const currentHour = parseInt(new Intl.DateTimeFormat('en-GB', optionsHourNum).format(now), 10);
    const currentMinute = parseInt(new Intl.DateTimeFormat('en-GB', optionsMinNum).format(now), 10);
    const totalMinutes = currentHour * 60 + currentMinute;

    clockElem.textContent = `IST ${timeString}`;

    // Highlight today in the Split-OPD timetable table
    const tableRows = document.querySelectorAll('#opd-schedule-body tr');
    tableRows.forEach(row => {
      row.classList.remove('is-today');
      const dayText = row.cells[0].textContent;
      if (dayText.toLowerCase().includes(dayString.toLowerCase())) {
        row.classList.add('is-today');
      }
    });

    // OPD Schedule Rules:
    // Morning OPD: 10:00 AM (600 mins) to 2:00 PM (840 mins)
    // Sterilization Break: 2:00 PM (840 mins) to 5:00 PM (300 mins)
    // Evening OPD: 5:00 PM (300 mins) to 9:00 PM (1260 mins)
    // After Hours: 9:00 PM to 10:00 AM next day

    statusDot.className = 'status-dot'; // Reset classes

    if (totalMinutes >= 600 && totalMinutes < 840) {
      statusText.textContent = '🟢 Morning OPD Live (Open until 2:00 PM)';
      statusDot.classList.add('is-open');
    } else if (totalMinutes >= 840 && totalMinutes < 1100) {
      statusText.textContent = '🟡 Sterilization Break (Evening OPD opens at 5:00 PM)';
      statusDot.classList.add('is-break');
    } else if (totalMinutes >= 1100 && totalMinutes < 1260) {
      statusText.textContent = '🟢 Evening OPD Live (Open until 9:00 PM)';
      statusDot.classList.add('is-open');
    } else {
      statusText.textContent = '🌙 Clinic Closed (Morning OPD opens at 10:00 AM)';
      statusDot.classList.add('is-closed');
    }
  }

  // Run immediately and every 10 seconds
  updateOpdStatus();
  setInterval(updateOpdStatus, 10000);

  /* --------------------------------------------------------------------------
     2. ACCESSIBLE MOBILE NAVIGATION DRAWER CONTROLLER
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('mobile-nav-toggle');
  const navDrawer = document.getElementById('mobile-nav-drawer');

  if (navToggle && navDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = navDrawer.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navDrawer.hidden = !isOpen;
    });

    // Close drawer when clicking any link inside it
    const drawerLinks = navDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navDrawer.hidden = true;
      });
    });
  }

  /* Sticky Navbar Shadow on Scroll */
  const siteNavbar = document.getElementById('site-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteNavbar.classList.add('is-scrolled');
    } else {
      siteNavbar.classList.remove('is-scrolled');
    }
  });

  /* --------------------------------------------------------------------------
     3. DYNAMIC 15-SECOND WHATSAPP APPOINTMENT MESSAGE BUILDER
     -------------------------------------------------------------------------- */
  const schedulerForm = document.getElementById('whatsapp-scheduler-form');

  if (schedulerForm) {
    schedulerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const patientNameInput = document.getElementById('patient-name');
      const preferredDaySelect = document.getElementById('preferred-day');
      const treatmentSelect = document.getElementById('treatment-type');
      const selectedSlotRadio = document.querySelector('input[name="opd-slot"]:checked');
      const nervousCheckbox = document.getElementById('first-time-nervous');

      const patientName = patientNameInput.value.trim();
      if (!patientName) {
        alert('Please enter your full name to reserve your OPD slot.');
        patientNameInput.focus();
        return;
      }

      const preferredDay = preferredDaySelect.value;
      const treatment = treatmentSelect.value;
      const slotTime = selectedSlotRadio ? selectedSlotRadio.value : 'Morning OPD';
      const isNervous = nervousCheckbox && nervousCheckbox.checked;

      // Construct formatted WhatsApp message
      let message = `Hi Dr. Nidhi,\n\nI would like to reserve a dental consultation slot at Bhagwati Dental Care (Nalasopara East).\n\n`;
      message += `👤 *Patient Name:* ${patientName}\n`;
      message += `🦷 *Primary Concern:* ${treatment}\n`;
      message += `📅 *Preferred Day:* ${preferredDay}\n`;
      message += `⏰ *Selected Session:* ${slotTime}\n`;
      if (isNervous) {
        message += `💡 *Note:* First-time visit—please explain step-by-step on chairside screen.\n`;
      }
      message += `\nPlease confirm my slot availability. Thank you!`;

      // Target WhatsApp phone number: +91 92709 06073
      const whatsappNumber = '919270906073';
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    });
  }

});