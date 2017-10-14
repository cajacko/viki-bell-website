export default function () {
  window.initialRender = true;
  const now = Math.floor(Date.now());
  const loadingEl = document.getElementById('loading');

  if (window.noLoading) {
    loadingEl.remove();
  } else {
    const loadingTime = now - window.startTime;

    // Otherwise looks like flash of content
    const minimumLoadTime = 1000;
    let additionalLoadTime = minimumLoadTime - loadingTime;

    if (additionalLoadTime < 0) {
      additionalLoadTime = 0;
    }

    setTimeout(() => {
      loadingEl.classList.remove('loading');

      loadingEl.addEventListener('transitionend', () => {
        loadingEl.remove();
      }, true);
    }, additionalLoadTime);
  }
}
