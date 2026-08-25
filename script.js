const mobileLayoutFixes = document.createElement('style');
mobileLayoutFixes.textContent = `
  /* Hard viewport safety: content must fit, not merely be clipped */
  html, body {
    width: 100%;
    max-width: 100%;
    overflow-x: hidden !important;
  }

  body > *,
  main,
  main > *,
  section,
  .section-pad,
  .hero,
  .hero-copy,
  .hero-visual,
  .about-grid,
  .program-grid,
  .feature-grid,
  .price-grid,
  .afterparty,
  .final-inner {
    min-width: 0 !important;
    max-width: 100% !important;
  }

  h1, h2, h3, p, strong, span, li, a {
    max-width: 100%;
  }

  img, svg, video, canvas {
    max-width: 100% !important;
  }

  @media (max-width: 760px) {
    .section-pad {
      width: 100% !important;
      max-width: 100% !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
    }

    .site-header {
      left: 12px !important;
      right: 12px !important;
      width: auto !important;
      max-width: calc(100% - 24px) !important;
      transform: none !important;
      grid-template-columns: minmax(0,1fr) auto !important;
      gap: 8px !important;
    }

    .team-logo {
      max-width: 100% !important;
      white-space: nowrap;
      font-size: 14px !important;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .header-cta {
      max-width: 145px !important;
      padding: 11px 13px !important;
      font-size: 10px !important;
      white-space: nowrap;
    }

    .hero {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      min-height: auto !important;
      padding-top: 118px !important;
      overflow: hidden !important;
    }

    .hero-copy {
      width: 100% !important;
      max-width: 100% !important;
    }

    .event-logo {
      width: fit-content !important;
      max-width: calc(100% - 8px) !important;
      margin-bottom: 30px !important;
      padding: 9px 13px 10px !important;
    }

    .event-logo span {
      font-size: 17px !important;
      line-height: .84 !important;
    }

    .hero-kicker {
      max-width: 100% !important;
      font-size: 11px !important;
      line-height: 1.35 !important;
      letter-spacing: .11em !important;
      white-space: normal !important;
    }

    .hero h1 {
      width: 100% !important;
      max-width: 100% !important;
      margin: 16px 0 24px !important;
      font-size: clamp(52px, 15.2vw, 68px) !important;
      line-height: .82 !important;
      letter-spacing: -.055em !important;
      overflow-wrap: normal !important;
      word-break: normal !important;
    }

    .hero h1 em {
      display: inline !important;
    }

    .hero-lead {
      width: 100% !important;
      max-width: 100% !important;
      margin-right: 0 !important;
      padding-right: 0 !important;
      font-size: 16px !important;
      line-height: 1.55 !important;
      overflow-wrap: anywhere !important;
    }

    .hero-lead strong {
      overflow-wrap: anywhere !important;
      word-break: break-word !important;
    }

    .hero-actions {
      width: 100% !important;
      max-width: 100% !important;
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 10px !important;
      margin-top: 28px !important;
    }

    .hero-actions .btn,
    .btn.full {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      padding-left: 14px !important;
      padding-right: 14px !important;
      white-space: normal !important;
      text-align: center !important;
    }

    .countdown {
      width: 100% !important;
      max-width: 100% !important;
      grid-template-columns: repeat(2, minmax(0,1fr)) !important;
      gap: 8px !important;
      margin-top: 30px !important;
    }

    .countdown div {
      width: 100% !important;
      min-width: 0 !important;
    }

    .hero-visual {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 440px !important;
      margin-top: 38px !important;
      overflow: hidden !important;
    }

    .hero-photo {
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      max-width: 100% !important;
    }

    .vologda-stamp {
      right: 8px !important;
    }

    .carved-frame {
      right: 0 !important;
      max-width: 64px !important;
    }

    .lace-a {
      left: -55px !important;
    }

    .about-grid,
    .program-grid,
    .feature-grid,
    .price-grid,
    .afterparty {
      width: 100% !important;
      max-width: 100% !important;
      grid-template-columns: minmax(0,1fr) !important;
    }

    .about-title h2,
    .program h2,
    .tickets h2,
    .afterparty h2,
    .final h2 {
      max-width: 100% !important;
      font-size: clamp(46px, 13.5vw, 66px) !important;
      line-height: .88 !important;
      overflow-wrap: anywhere !important;
    }

    .big-copy {
      max-width: 100% !important;
      font-size: 24px !important;
    }

    .program,
    .afterparty {
      width: 100% !important;
      max-width: 100% !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
      overflow: hidden !important;
    }

    .program-list div {
      grid-template-columns: 36px minmax(0,1fr) !important;
      gap: 12px !important;
    }

    .program-list p,
    .feature-card p,
    .price-card p,
    .price-card li,
    .afterparty-copy p {
      overflow-wrap: anywhere !important;
    }

    .price-card {
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      padding: 22px !important;
    }

    .price {
      font-size: clamp(50px, 15vw, 68px) !important;
      white-space: normal !important;
    }

    .after-meta {
      grid-template-columns: 1fr !important;
      width: 100% !important;
    }

    .afterparty-art {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 360px !important;
    }

    .estate-card {
      width: 100% !important;
      max-width: 100% !important;
    }

    .final-inner {
      width: 100% !important;
      max-width: 100% !important;
      padding: 48px 20px !important;
    }

    .footer {
      width: 100% !important;
      max-width: 100% !important;
      overflow: hidden !important;
    }
  }

  @media (max-width: 390px) {
    .section-pad {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    .site-header {
      left: 8px !important;
      right: 8px !important;
      max-width: calc(100% - 16px) !important;
    }

    .team-logo {
      font-size: 12px !important;
    }

    .header-cta {
      max-width: 128px !important;
      font-size: 9px !important;
      padding: 10px 11px !important;
    }

    .hero h1 {
      font-size: clamp(46px, 14.8vw, 58px) !important;
      letter-spacing: -.06em !important;
    }

    .hero-lead {
      font-size: 15px !important;
    }

    .program,
    .afterparty {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    .about-title h2,
    .program h2,
    .tickets h2,
    .afterparty h2,
    .final h2 {
      font-size: clamp(42px, 13vw, 54px) !important;
    }
  }
`;
document.head.appendChild(mobileLayoutFixes);

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.setProperty('--delay', `${delay}ms`);
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const countdown = document.querySelector('[data-countdown]');
if (countdown) {
  const target = new Date(countdown.dataset.countdown).getTime();
  const fields = {
    days: countdown.querySelector('[data-days]'),
    hours: countdown.querySelector('[data-hours]'),
    minutes: countdown.querySelector('[data-minutes]'),
    seconds: countdown.querySelector('[data-seconds]')
  };

  const pad = (value) => String(value).padStart(2, '0');

  const updateCountdown = () => {
    const diff = Math.max(0, target - Date.now());
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    if (fields.days) fields.days.textContent = pad(days);
    if (fields.hours) fields.hours.textContent = pad(hours);
    if (fields.minutes) fields.minutes.textContent = pad(minutes);
    if (fields.seconds) fields.seconds.textContent = pad(seconds);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
