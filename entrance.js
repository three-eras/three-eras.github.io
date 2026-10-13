(() => {
  const banner = document.querySelector('.entrance-banner');
  const button = banner?.querySelector('.banner-toggle');
  if (!banner || !button) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => {
    const paused = banner.classList.contains('is-paused') || reduced.matches;
    button.setAttribute('aria-label', paused ? 'Play image banner' : 'Pause image banner');
    button.setAttribute('aria-pressed', String(paused));
    button.hidden = reduced.matches;
  };
  button.addEventListener('click', () => {
    banner.classList.toggle('is-paused');
    sync();
  });
  reduced.addEventListener('change', sync);
  sync();
})();
