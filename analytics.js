(() => {
  const config = window.PORTFOLIO_CONFIG || {};
  const gaId = config.ga4MeasurementId;
  if (!gaId || !/^G-[A-Z0-9]+$/i.test(gaId)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  document.head.append(script);
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  gtag('js', new Date()); gtag('config', gaId, { anonymize_ip: true });

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a'); if (!link) return;
    const href = link.getAttribute('href') || '';
    const eventName = href.includes('wa.me') ? 'whatsapp_click' : href.includes('mailto:') ? 'email_click' : href.includes('project-') || href.includes('/projects/') ? 'project_open' : '';
    if (eventName) gtag('event', eventName, { link_url: link.href, link_text: link.textContent.trim().slice(0, 100) });
  });

  document.querySelector('[data-contact-form]')?.addEventListener('submit', () => gtag('event', 'contact_form_submit'));
})();
