// Visual enhancements: typography + Lucide icons
const enhancementStyles = document.createElement('link');
enhancementStyles.rel = 'stylesheet';
enhancementStyles.href = 'enhancements.css';
document.head.appendChild(enhancementStyles);

const makeIcon = (name, extraClass = '') => {
  const icon = document.createElement('i');
  icon.setAttribute('data-lucide', name);
  icon.setAttribute('aria-hidden', 'true');
  if (extraClass) icon.className = extraClass;
  return icon;
};

const stripArrowText = (element, symbols = ['↗', '↓']) => {
  Array.from(element.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let value = node.textContent;
      symbols.forEach((symbol) => { value = value.replaceAll(symbol, ''); });
      node.textContent = value;
    }
  });
  element.querySelectorAll('span').forEach((span) => {
    if (symbols.some((symbol) => span.textContent.includes(symbol))) span.remove();
  });
};

const enhanceInterface = () => {
  const eyebrow = document.querySelector('.eyebrow');
  if (eyebrow && !eyebrow.dataset.iconEnhanced) {
    const dot = eyebrow.querySelector('.dot');
    const icon = makeIcon('calendar-days', 'icon-inline');
    dot ? dot.after(icon) : eyebrow.prepend(icon);
    eyebrow.dataset.iconEnhanced = 'true';
  }

  const kickerIcons = [
    ['#about .section-kicker', 'sparkles'],
    ['#program .section-kicker', 'list-checks'],
    ['#location .section-kicker', 'map-pinned']
  ];

  kickerIcons.forEach(([selector, iconName]) => {
    const kicker = document.querySelector(selector);
    if (kicker && !kicker.dataset.iconEnhanced) {
      kicker.prepend(makeIcon(iconName, 'icon-inline'));
      kicker.dataset.iconEnhanced = 'true';
    }
  });

  const programIconNames = ['zap', 'mic-2', 'lightbulb', 'trophy', 'camera'];
  document.querySelectorAll('.program-icon').forEach((item, index) => {
    if (item.dataset.iconEnhanced) return;
    const emoji = item.textContent.trim();
    item.textContent = '';
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'emoji-glyph';
    emojiSpan.textContent = emoji;
    item.append(emojiSpan, makeIcon(programIconNames[index] || 'sparkles'));
    item.dataset.iconEnhanced = 'true';
  });

  const statData = [
    { emoji: '🎤', icon: 'messages-square' },
    { emoji: '🚀', icon: 'sparkles' },
    { emoji: '🤝', icon: 'users-round' }
  ];

  document.querySelectorAll('.stat-card').forEach((card, index) => {
    if (card.dataset.iconEnhanced) return;
    const data = statData[index] || { emoji: '⚡', icon: 'star' };
    const pair = document.createElement('div');
    pair.className = 'stat-icon-pair';

    const emoji = document.createElement('span');
    emoji.className = 'stat-emoji';
    emoji.textContent = data.emoji;

    pair.append(emoji, makeIcon(data.icon));
    card.prepend(pair);
    card.dataset.iconEnhanced = 'true';
  });

  const miniCta = document.querySelector('.mini-cta');
  if (miniCta && !miniCta.dataset.iconEnhanced) {
    stripArrowText(miniCta, ['↗']);
    miniCta.append(makeIcon('arrow-up-right'));
    miniCta.dataset.iconEnhanced = 'true';
  }

  const primaryBtn = document.querySelector('.hero-actions .btn-primary');
  if (primaryBtn && !primaryBtn.dataset.iconEnhanced) {
    stripArrowText(primaryBtn, ['↗']);
    primaryBtn.append(makeIcon('ticket-check'));
    primaryBtn.dataset.iconEnhanced = 'true';
  }

  const ghostBtn = document.querySelector('.hero-actions .btn-ghost');
  if (ghostBtn && !ghostBtn.dataset.iconEnhanced) {
    stripArrowText(ghostBtn, ['↓']);
    ghostBtn.append(makeIcon('chevron-down'));
    ghostBtn.dataset.iconEnhanced = 'true';
  }

  const textLink = document.querySelector('.text-link');
  if (textLink && !textLink.dataset.iconEnhanced) {
    stripArrowText(textLink, ['↗']);
    textLink.prepend(makeIcon('send'));
    textLink.dataset.iconEnhanced = 'true';
  }

  const locationTag = document.querySelector('.location-tag');
  if (locationTag && !locationTag.dataset.iconEnhanced) {
    locationTag.prepend(makeIcon('map-pin'));
    locationTag.dataset.iconEnhanced = 'true';
  }

  const metaIcons = ['calendar-days', 'map-pin', 'calendar-range'];
  document.querySelectorAll('.final-meta span').forEach((item, index) => {
    if (item.dataset.iconEnhanced) return;
    item.prepend(makeIcon(metaIcons[index] || 'circle'));
    item.dataset.iconEnhanced = 'true';
  });

  const finalBtn = document.querySelector('.final-card .btn-black');
  if (finalBtn && !finalBtn.dataset.iconEnhanced) {
    finalBtn.append(makeIcon('badge-check'));
    finalBtn.dataset.iconEnhanced = 'true';
  }
};

enhanceInterface();

const renderLucideIcons = () => {
  if (window.lucide) window.lucide.createIcons();
};

if (window.lucide) {
  renderLucideIcons();
} else {
  const lucideScript = document.createElement('script');
  lucideScript.src = 'https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js';
  lucideScript.defer = true;
  lucideScript.onload = renderLucideIcons;
  document.body.appendChild(lucideScript);
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      entry.target.style.setProperty('--delay', `${delay}ms`);
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.13 });

revealItems.forEach((item) => revealObserver.observe(item));

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

    fields.days.textContent = pad(days);
    fields.hours.textContent = pad(hours);
    fields.minutes.textContent = pad(minutes);
    fields.seconds.textContent = pad(seconds);
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

const glow = document.querySelector('.cursor-glow');
if (glow && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}

const magneticItems = document.querySelectorAll('.magnetic');
if (matchMedia('(pointer:fine)').matches) {
  magneticItems.forEach((item) => {
    item.addEventListener('pointermove', (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
    });

    item.addEventListener('pointerleave', () => {
      item.style.transform = '';
    });
  });
}
