(() => {
  const analytics = window.TBR_CONFIG?.analytics;
  if (!analytics || analytics.provider !== 'plausible' || !analytics.domain || !analytics.scriptSrc) return;

  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.tbrTrack = eventName => window.plausible(eventName);

  const script = document.createElement('script');
  script.defer = true;
  script.dataset.domain = analytics.domain;
  script.src = analytics.scriptSrc;
  document.head.append(script);
})();
