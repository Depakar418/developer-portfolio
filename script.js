const root = document.documentElement;
const body = document.body;

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
document.querySelectorAll('img[src="assets/depakar-profile.png"],img[src="depakar-profile.png"]').forEach((img) => { img.alt = 'Portrait of Depakar B, WordPress Developer'; });
if (!document.querySelector('link[href="overrides.css"]')) {
  const sheet = document.createElement('link');
  sheet.rel = 'stylesheet'; sheet.href = 'overrides.css'; document.head.append(sheet);
}
if (!document.querySelector('link[href="enhancements.css"]')) {
  const enhancements = document.createElement('link');
  enhancements.rel = 'stylesheet'; enhancements.href = 'enhancements.css'; document.head.append(enhancements);
}
if (!document.querySelector('script[src="site-config.js"]')) {
  const config = document.createElement('script'); config.src = 'site-config.js';
  config.onload = () => { const analytics = document.createElement('script'); analytics.src = 'analytics.js'; document.head.append(analytics); };
  document.head.append(config);
}

function replaceBrokenImage(image) {
  if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied === 'true') return;
  image.dataset.fallbackApplied = 'true';
  const visual = document.createElement('div');
  const visualNumber = [...document.images].indexOf(image) % 6;
  visual.className = `generated-visual generated-visual-${visualNumber}`;
  visual.setAttribute('role', 'img');
  visual.setAttribute('aria-label', image.alt || 'Portfolio visual');
  visual.innerHTML = '<span>DEPAKAR B</span><strong>Web experience<br>in focus.</strong><i></i>';
  image.replaceWith(visual);
}
document.addEventListener('error', (event) => replaceBrokenImage(event.target), true);
document.querySelectorAll('img').forEach((image) => {
  if (image.complete && image.naturalWidth === 0) replaceBrokenImage(image);
});

const chevron = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';
const arrowUp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6.5 10.5 12 5l5.5 5.5"/></svg>';
const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11 11 0 0 0 3.1 16.7L2 22l5.45-1.08A11 11 0 1 0 20.5 3.5Zm-8.48 16a8.85 8.85 0 0 1-4.51-1.24l-.32-.19-3.23.64.67-3.15-.21-.33a8.86 8.86 0 1 1 7.6 4.27Zm4.86-6.64c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07a7.27 7.27 0 0 1-2.14-1.32 8.06 8.06 0 0 1-1.49-1.85c-.16-.27-.02-.42.12-.56.12-.12.27-.32.4-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.48.07-.73.34s-.95.93-.95 2.27.98 2.64 1.12 2.82c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.57.65.21 1.24.18 1.7.11.52-.08 1.6-.66 1.83-1.29.23-.64.23-1.18.16-1.29-.07-.12-.25-.18-.52-.32Z"/></svg>';
const flags = {
  en: '<svg viewBox="0 0 32 20" aria-hidden="true"><rect width="32" height="20" fill="#012169"/><path d="m0 0 32 20M32 0 0 20" stroke="#fff" stroke-width="4"/><path d="m0 0 32 20M32 0 0 20" stroke="#C8102E" stroke-width="2"/><path d="M16 0v20M0 10h32" stroke="#fff" stroke-width="6"/><path d="M16 0v20M0 10h32" stroke="#C8102E" stroke-width="3"/></svg>',
  fr: '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="10" height="20" fill="#002395"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#ED2939"/></svg>',
  it: '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="10" height="20" fill="#009246"/><rect x="10" width="10" height="20" fill="#fff"/><rect x="20" width="10" height="20" fill="#CE2B37"/></svg>',
  es: '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/></svg>',
  de: '<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="6.67" fill="#111"/><rect y="6.67" width="30" height="6.67" fill="#DD0000"/><rect y="13.34" width="30" height="6.66" fill="#FFCE00"/></svg>'
};
const languages = { en: 'English', fr: 'Français', it: 'Italiano', es: 'Español', de: 'Deutsch' };

const header = document.querySelector('.site-header');
if (header) {
  const utility = document.createElement('div');
  utility.className = 'utility';
  utility.innerHTML = `<a class="header-whatsapp" href="https://wa.me/919344465429" target="_blank" rel="noopener">WhatsApp</a><a class="mobile-contact-link" href="contact.html">Contact me <span>↗</span></a><button class="theme-toggle" type="button">Light</button><div class="language-picker"><button class="language-menu-button" type="button" aria-label="Choose website language" aria-expanded="false"><span class="language-flag">${flags.en}</span><span class="language-name">EN</span>${chevron}</button><div class="language-menu" role="menu" hidden>${Object.entries(languages).map(([code, label]) => `<button type="button" role="menuitem" data-language="${code}"><span class="language-flag">${flags[code]}</span>${label}</button>`).join('')}</div></div>`;
  header.append(utility);
  const themeButton = utility.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  // The portfolio opens in the clean light presentation by default; a visitor's
  // deliberate dark-mode choice is the only case that keeps the dark theme.
  if (savedTheme !== 'dark') body.classList.add('light');
  themeButton.textContent = body.classList.contains('light') ? 'Dark' : 'Light';
  themeButton.addEventListener('click', () => {
    body.classList.toggle('light');
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
    themeButton.textContent = body.classList.contains('light') ? 'Dark' : 'Light';
  });
}

const menuToggle = document.querySelector('.menu-toggle');
const navElement = document.querySelector('#site-nav');
if (menuToggle && navElement) menuToggle.addEventListener('click', () => {
  const open = navElement.classList.toggle('open');
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
if (menuToggle && navElement) {
  menuToggle.innerHTML = '<span class="menu-icon" aria-hidden="true"></span><span class="menu-label">Menu</span>';
  navElement.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    navElement.classList.remove('open'); menuToggle.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const utility = document.querySelector('.utility');
function placeMobileUtility() {
  if (!utility || !header || !navElement) return;
  if (window.matchMedia('(max-width: 780px)').matches) navElement.append(utility);
  else header.append(utility);
}
placeMobileUtility();
window.addEventListener('resize', placeMobileUtility, { passive: true });

const englishContent = {};
document.querySelectorAll('[data-i18n]').forEach((el) => { englishContent[el.dataset.i18n] = el.textContent.trim(); });
const copy = {
  fr: { available: 'Disponible pour certains projets', heroTitle: 'Je crée des sites web clairs, rapides et faciles à trouver.', heroIntro: 'Développement WordPress, plugins, SEO technique, AEO, GEO et performance.', whatsapp: 'Discuter sur WhatsApp', viewWork: 'Voir mes projets', introBand: 'Je transforme les idées et besoins métier en expériences digitales prêtes pour la production.', selected: 'Projets sélectionnés', projectTitle: 'Un travail qui a du sens.', allProjects: 'Voir tous les projets', capabilities: 'Compétences', capabilityTitle: 'Au-delà de l’interface.', ctaQuestion: 'Un site ou un produit à améliorer ?', ctaButton: 'Commencer sur WhatsApp' },
  it: { available: 'Disponibile per progetti selezionati', heroTitle: 'Creo siti web chiari, veloci e facili da trovare.', heroIntro: 'Sviluppo WordPress, plugin, SEO tecnico, AEO, GEO e performance.', whatsapp: 'Scrivi su WhatsApp', viewWork: 'Vedi i miei progetti', introBand: 'Trasformo idee e requisiti aziendali in esperienze digitali pronte.', selected: 'Progetti selezionati', projectTitle: 'Lavoro con uno scopo.', allProjects: 'Vedi tutti i progetti', capabilities: 'Competenze', capabilityTitle: 'Oltre l’interfaccia.', ctaQuestion: 'Hai un sito o un prodotto da migliorare?', ctaButton: 'Inizia su WhatsApp' },
  es: { available: 'Disponible para proyectos seleccionados', heroTitle: 'Creo sitios web claros, rápidos y fáciles de encontrar.', heroIntro: 'Desarrollo WordPress, plugins, SEO técnico, AEO, GEO y rendimiento.', whatsapp: 'Hablar por WhatsApp', viewWork: 'Ver mis proyectos', introBand: 'Convierto ideas y necesidades de negocio en experiencias digitales listas.', selected: 'Proyectos seleccionados', projectTitle: 'Trabajo con propósito.', allProjects: 'Ver todos los proyectos', capabilities: 'Capacidades', capabilityTitle: 'Más allá de la interfaz.', ctaQuestion: '¿Tienes un sitio web o producto que necesita mejorar?', ctaButton: 'Empezar por WhatsApp' },
  de: { available: 'Verfügbar für ausgewählte Projekte', heroTitle: 'Ich entwickle klare, schnelle und auffindbare Websites.', heroIntro: 'WordPress-Entwicklung, Plugins, technisches SEO, AEO, GEO und Performance.', whatsapp: 'Über WhatsApp schreiben', viewWork: 'Meine Arbeit ansehen', introBand: 'Ich mache aus Ideen und Geschäftsanforderungen fertige digitale Erlebnisse.', selected: 'Ausgewählte Projekte', projectTitle: 'Arbeit mit Sinn.', allProjects: 'Alle Projekte ansehen', capabilities: 'Leistungen', capabilityTitle: 'Mehr als eine Oberfläche.', ctaQuestion: 'Soll Ihre Website oder Ihr Produkt besser funktionieren?', ctaButton: 'Auf WhatsApp starten' }
};
const navigation = {
  en: ['Home', 'Work', 'About', 'Plugins', 'Blogs', 'Search', 'Contact'],
  fr: ['Accueil', 'Projets', 'À propos', 'Plugins', 'Blog', 'Recherche', 'Contact'],
  it: ['Home', 'Lavori', 'Chi sono', 'Plugin', 'Blog', 'Cerca', 'Contatti'],
  es: ['Inicio', 'Proyectos', 'Acerca de', 'Plugins', 'Blog', 'Buscar', 'Contacto'],
  de: ['Start', 'Projekte', 'Über mich', 'Plugins', 'Blog', 'Suche', 'Kontakt']
};
function setLanguage(language) {
  root.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = language === 'en' ? englishContent[el.dataset.i18n] : (copy[language]?.[el.dataset.i18n] || englishContent[el.dataset.i18n]); });
  const navLabelIndex = { 'index.html': 0, 'work.html': 1, 'about.html': 2, 'plugins.html': 3, 'blog.html': 4, 'search.html': 5, 'contact.html': 6 };
  document.querySelectorAll('#site-nav a').forEach((link) => {
    const href = link.getAttribute('href'); const index = navLabelIndex[href];
    if (Number.isInteger(index)) link.textContent = navigation[language][index] || link.textContent;
  });
  const pickerButton = document.querySelector('.language-menu-button');
  if (pickerButton) pickerButton.innerHTML = `<span class="language-flag">${flags[language]}</span><span class="language-name">${language.toUpperCase()}</span>${chevron}`;
  localStorage.setItem('portfolio-language', language);
}
const languagePicker = document.querySelector('.language-picker');
if (languagePicker) {
  const pickerButton = languagePicker.querySelector('.language-menu-button');
  const pickerMenu = languagePicker.querySelector('.language-menu');
  setLanguage(localStorage.getItem('portfolio-language') || 'en');
  pickerButton.addEventListener('click', () => {
    const willOpen = pickerMenu.hidden;
    pickerMenu.hidden = !willOpen;
    pickerButton.setAttribute('aria-expanded', String(willOpen));
  });
  pickerMenu.addEventListener('click', (event) => {
    const choice = event.target.closest('[data-language]');
    if (!choice) return;
    setLanguage(choice.dataset.language);
    pickerMenu.hidden = true;
    pickerButton.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('click', (event) => {
    if (!languagePicker.contains(event.target)) {
      pickerMenu.hidden = true;
      pickerButton.setAttribute('aria-expanded', 'false');
    }
  });
}

const projects = document.querySelector('.projects');
if (document.querySelector('.intro-band') && projects) {
  projects.id = 'projects';
  projects.querySelector('.section-head .text-link')?.remove();
  const intro = document.querySelector('.intro-band p');
  if (intro && !document.querySelector('.intro-scroll-cta')) intro.insertAdjacentHTML('afterend', '<a class="button button-primary intro-scroll-cta" href="#projects">View selected projects</a>');
  const projectGrid = projects.querySelector('.project-grid');
  if (projectGrid && !projects.querySelector('.projects-page-cta')) projectGrid.insertAdjacentHTML('afterend', '<div class="projects-page-cta"><a class="button button-primary" href="work.html">See all projects</a></div>');
  const specialisationGrid = document.querySelector('.specialisation-grid');
  if (specialisationGrid && !specialisationGrid.querySelector('[data-expanded-specialisation]')) {
    [
      ['Build systems', 'Custom plugin development', 'Purpose-built WordPress plugins for forms, workflows, admin tools, tracking, and reusable features.'],
      ['WordPress engineering', 'Themes & custom builds', 'Custom themes, templates, responsive components, and maintainable front-end systems built around the real requirement.'],
      ['Faster delivery', 'AMP development & integration', 'Lean AMP pages and integrations that preserve core content, usability, and responsive consistency.'],
      ['Conversion paths', 'Landing pages & campaigns', 'SEO-ready campaign and landing pages for launches, lead capture, webinars, and marketing journeys.'],
      ['Secure foundations', 'WordPress security', 'Practical hardening through security plugins, protected login flows, 2FA, updates, backups, and maintenance checks.'],
      ['Connected systems', 'Forms, LMS & payment integrations', 'Thoughtful implementation for lead forms, LMS workflows, payment gateways, ERP hand-offs, and campaign data capture.']
    ].forEach(([label, title, description]) => specialisationGrid.insertAdjacentHTML('beforeend', `<article data-expanded-specialisation><span>${label}</span><h3>${title}</h3><p>${description}</p></article>`));
  }

  document.querySelector('.cta-panel')?.remove();
  const faqList = document.querySelector('.faq-list');
  if (faqList && !faqList.dataset.expanded) {
    faqList.dataset.expanded = 'true';
    faqList.insertAdjacentHTML('beforeend', `
      <details><summary>Can you improve an existing WordPress website?</summary><p>Yes. I can review page structure, performance, responsive behaviour, forms, tracking, technical SEO, and maintainability, then prioritise practical improvements instead of rebuilding without a reason.</p></details>
      <details><summary>Can you build custom landing pages and campaigns?</summary><p>Yes. I build focused, responsive landing pages for product launches, webinars, lead capture, paid campaigns, and evergreen search content—using clear hierarchy, fast-loading patterns, and measurable conversion paths.</p></details>
      <details><summary>Can you help with plugins, LMS, forms, and integrations?</summary><p>Yes. Work can include custom plugin or theme development, LMS and payment-gateway integration, secure contact forms, CRM or ERP hand-offs, newsletter connections, and structured registration workflows.</p></details>
      <details><summary>How do you approach website speed and Core Web Vitals?</summary><p>I start with the page experience: unnecessary assets, image delivery, layout shifts, render-blocking code, responsive behaviour, and real conversion paths. Improvements are then tested before release and reviewed after launch where measurement is available.</p></details>
      <details><summary>Can you support SEO after launch?</summary><p>Yes. Technical SEO support can include crawlability checks, metadata and heading structure, internal links, schema where appropriate, Search Console review, analytics setup, and content patterns designed to be easier to understand and maintain.</p></details>`);
  }
}

const scrollTop = document.createElement('button');
scrollTop.className = 'scroll-top'; scrollTop.type = 'button'; scrollTop.setAttribute('aria-label', 'Scroll to top'); scrollTop.innerHTML = arrowUp;
document.body.append(scrollTop);
window.addEventListener('scroll', () => scrollTop.classList.toggle('is-visible', window.scrollY > 500), { passive: true });
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

if (!location.pathname.endsWith('/contact.html')) {
  const floatingWhatsapp = document.createElement('a');
  floatingWhatsapp.className = 'floating-whatsapp'; floatingWhatsapp.href = 'https://wa.me/919344465429'; floatingWhatsapp.target = '_blank'; floatingWhatsapp.rel = 'noopener'; floatingWhatsapp.setAttribute('aria-label', 'Chat with Depakar on WhatsApp'); floatingWhatsapp.innerHTML = whatsappIcon;
  document.body.append(floatingWhatsapp);
}

const projectGalleries = {
  'project-succeedlearn.html': { site: 'https://succeedlearn.com/', name: 'SucceedLEARN', intro: 'Desktop and AMP captures matched to the learning, mobile, and enquiry experiences discussed in this case study.', images: [['project-assets/succeedlearn-desktop-home.jpg', 'SucceedLEARN public desktop homepage', 'Desktop platform experience', true], ['project-assets/succeedlearn-amp-home.jpg', 'SucceedLEARN AMP homepage', 'AMP content experience', true], ['project-assets/succeedlearn-amp-form.jpg', 'SucceedLEARN AMP enquiry form with submit action', 'AMP enquiry and form flow']] },
  'project-elearnposh.html': { site: 'https://elearnposh.com/', name: 'eLearnPOSH', intro: 'A detailed visual record of the public compliance-learning experience, including desktop pages, webinar journeys, newsletter surfaces, registration flows, and a mobile view.', images: [['project-assets/elearnposh-posh-overview.webp', 'eLearnPOSH POSH compliance overview page', 'Compliance learning overview', true], ['project-assets/elearnposh-compliance-landing.webp', 'eLearnPOSH compliance training landing page', 'Compliance learning landing page'], ['project-assets/elearnposh-course-page.webp', 'eLearnPOSH course and learning content page', 'Course content experience'], ['project-assets/elearnposh-hero.webp', 'eLearnPOSH public homepage hero', 'Public homepage experience'], ['project-assets/elearnposh-webinar-detail.webp', 'eLearnPOSH webinar detail page', 'Webinar detail journey'], ['project-assets/elearnposh-webinar-library.webp', 'eLearnPOSH webinar library cards', 'Webinar library'], ['project-assets/elearnposh-webinar-list.webp', 'eLearnPOSH webinar listing', 'Webinar listing'], ['project-assets/elearnposh-webinar-registration.webp', 'eLearnPOSH webinar registration page', 'Webinar registration flow'], ['project-assets/elearnposh-webinar-page.webp', 'eLearnPOSH webinar information page', 'Webinar information page'], ['project-assets/elearnposh-blogs.webp', 'eLearnPOSH blog listing page', 'Blog and article discovery'], ['project-assets/elearnposh-newsletters.webp', 'eLearnPOSH newsletter listing page', 'Newsletter discovery'], ['project-assets/elearnposh-newsletter-grid.webp', 'eLearnPOSH newsletter card grid', 'Newsletter card layout'], ['project-assets/elearnposh-newsletter-page.webp', 'eLearnPOSH newsletter detail page', 'Newsletter detail experience'], ['project-assets/elearnposh-mobile-landing.webp', 'eLearnPOSH mobile compliance landing page', 'Mobile experience']] },
  'project-scrombridge.html': { site: '', name: 'SCROMBridge', intro: 'Public views of the SCROMBridge learning-delivery experience, covering the desktop landing page, feature presentation, contact route, and mobile patterns.', images: [['project-assets/scrombridge-desktop-home.webp', 'SCROMBridge desktop home and key features', 'Desktop landing page and key features', true], ['project-assets/scrombridge-features.webp', 'SCROMBridge feature overview section', 'Feature presentation'], ['project-assets/scrombridge-contact.webp', 'SCROMBridge contact section', 'Contact and enquiry route'], ['project-assets/scrombridge-mobile-menu.webp', 'SCROMBridge mobile navigation', 'Mobile navigation'], ['project-assets/scrombridge-mobile-how-it-works.webp', 'SCROMBridge mobile how it works page', 'Mobile how it works flow']] },
  'project-succeed-technologies.html': { site: 'https://succeedtech.com/', name: 'Succeed Technologies', intro: 'Public captures show the corporate product-offerings page and the contact workflow.', images: [['project-assets/succeedtech-offerings.jpg', 'Succeed Technologies public offerings page', 'Corporate offerings page'], ['project-assets/succeedtech-contact-form.jpg', 'Succeed Technologies contact form', 'Contact and enquiry flow']] },
  'project-brand-ventures.html': { site: 'https://brandventures.in/', name: 'Brand Ventures', intro: 'Public desktop captures of the agency homepage and its lead-generation flow.', images: [['project-assets/brandventures-desktop-home.jpg', 'Brand Ventures public desktop homepage', 'Desktop homepage'], ['project-assets/brandventures-contact-form.jpg', 'Brand Ventures contact page with enquiry form', 'Contact and enquiry form']] },
  'project-forcefriction.html': { site: 'https://forcefriction.com/', name: 'ForceFriction AI', intro: 'Public desktop captures of the enterprise AI platform and assessment request flow.', images: [['project-assets/forcefriction-desktop-home.jpg', 'ForceFriction AI public desktop homepage', 'Enterprise platform homepage'], ['project-assets/forcefriction-assessment-form.jpg', 'ForceFriction AI assessment request form', 'Assessment form and lead flow']] },
  'project-tech-ai-magazine.html': { site: 'https://www.techaimag.com/', name: 'Tech AI Magazine', intro: 'Public captures show both the magazine front page and long-form reading experience.', images: [['project-assets/techai-desktop-home.jpg', 'Tech AI Magazine public desktop homepage', 'Magazine homepage'], ['project-assets/techai-article.jpg', 'Tech AI Magazine desktop article page', 'Long-form article experience']] }
};
const galleryPath = location.pathname.replace(/\/+$/, '');
const galleryAliases = {
  '/projects/succeedlearn': 'project-succeedlearn.html',
  '/projects/elearnposh': 'project-elearnposh.html',
  '/projects/succeed-technologies': 'project-succeed-technologies.html',
  '/projects/scrombridge': 'project-scrombridge.html',
  '/projects/external-member-directory': 'project-external-member-directory.html',
  '/projects/brand-ventures': 'project-brand-ventures.html',
  '/projects/new-metador': 'project-new-metador.html',
  '/projects/force-friction': 'project-forcefriction.html',
  '/projects/tech-ai-mag': 'project-tech-ai-magazine.html'
};
const galleryKey = galleryAliases[galleryPath] || galleryPath.split('/').pop() || 'index.html';
const gallery = projectGalleries[galleryKey];
if (gallery && !document.querySelector('.project-gallery')) {
  document.querySelector('.project-showcase')?.remove();
  const story = document.querySelector('.project-story');
  if (story) {
    const cards = gallery.images.map(([src, alt, caption, wide]) => `<figure class="project-gallery-item${wide ? ' project-gallery-wide' : ''}"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join('');
    const galleryAction = gallery.site ? `<a href="${gallery.site}" target="_blank" rel="noopener">Open ${gallery.name} ↗</a>` : '';
    story.insertAdjacentHTML('afterend', `<section class="project-gallery"><div class="project-gallery-heading"><div><h2>Live product views.</h2><p>${gallery.intro}</p></div>${galleryAction}</div><div class="project-gallery-grid">${cards}</div></section>`);
  }
}

// Do not leave visitors with broken thumbnails while approved public captures are being prepared.
document.querySelectorAll('.project-gallery-item img').forEach((image) => {
  image.addEventListener('error', () => {
    if (!image.dataset.fallbackApplied) {
      image.dataset.fallbackApplied = 'true';
      image.src = 'project-assets/project-visual-fallback.svg';
    }
  }, { once: true });
});

const footer = document.querySelector('.site-footer');
if (footer) {
  footer.innerHTML = `<div class="footer-brand"><a class="wordmark" href="index.html">DEPAKAR<span> B</span></a><p>WordPress development, plugin engineering, and search-ready digital experiences built for practical growth.</p><p class="footer-signoff">Built with curiosity, code, and too many browser tabs.</p></div><div class="footer-column"><b>Explore</b><a href="work.html">Projects</a><a href="about.html">About me</a><a href="plugins.html">Plugins</a><a href="blog.html">Insights</a></div><div class="footer-column"><b>Capabilities</b><span>WordPress development</span><span>Technical SEO · AEO · GEO</span><span>Performance &amp; analytics</span><span>Custom plugins &amp; integrations</span></div><div class="footer-contact"><b>Let’s build something useful.</b><p>Have a site, product, or workflow that needs to work better?</p><a class="footer-email" href="mailto:depakar418@gmail.com">depakar418@gmail.com</a><div class="footer-actions"><a class="footer-whatsapp-link" href="https://wa.me/919344465429" target="_blank" rel="noopener">Chat on WhatsApp</a><a href="https://www.linkedin.com/in/depakar418" target="_blank" rel="noopener">LinkedIn</a></div><form class="footer-contact-form" action="https://formspree.io/f/mppqjgww" method="POST"><label class="sr-only" for="footer-email">Email address</label><input id="footer-email" type="email" name="email" placeholder="Your email address" required><input type="hidden" name="_subject" value="New portfolio contact from footer"><button type="submit">Contact me</button></form></div><div class="footer-base"><small>© ${new Date().getFullYear()} Depakar B</small><small>WordPress Developer · SEO · AEO · GEO</small></div>`;
}

// Keep the new Now page discoverable without having to maintain every header by hand.
document.querySelectorAll('#site-nav').forEach((nav) => {
  if (![...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === 'now.html')) {
    const aboutLink = [...nav.querySelectorAll('a')].find((link) => link.getAttribute('href') === 'about.html');
    const nowLink = document.createElement('a'); nowLink.href = 'now.html'; nowLink.textContent = 'Now';
    if (location.pathname.endsWith('/now.html')) nowLink.classList.add('is-active');
    aboutLink ? aboutLink.insertAdjacentElement('afterend', nowLink) : nav.append(nowLink);
  }
});

// A dedicated service page gives visitors and search engines one clear route
// to the WordPress development work represented across projects and articles.
document.querySelectorAll('#site-nav').forEach((nav) => {
  if (![...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === 'wordpress-developer.html')) {
    const workLink = [...nav.querySelectorAll('a')].find((link) => link.getAttribute('href') === 'work.html');
    const serviceLink = document.createElement('a');
    serviceLink.href = 'wordpress-developer.html'; serviceLink.textContent = 'WordPress';
    if (location.pathname.endsWith('/wordpress-developer.html')) serviceLink.classList.add('is-active');
    workLink ? workLink.insertAdjacentElement('afterend', serviceLink) : nav.append(serviceLink);
  }
});

const form = document.querySelector('[data-contact-form]');
if (form) form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button');
  if (form.action.includes('YOUR_FORM_ID')) {
    status.textContent = 'Form delivery is being connected. Please email depakar418@gmail.com for now.';
    status.className = 'form-status error';
    return;
  }
  button.disabled = true; button.textContent = 'Sending…';
  try {
    const response = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw Error();
    window.location.assign('thank-you.html');
  } catch {
    status.textContent = 'That did not send. Please email depakar418@gmail.com instead.'; status.className = 'form-status error';
  } finally {
    button.disabled = false; button.textContent = 'Send enquiry';
  }
});

if (!document.querySelector('script[src="portfolio-upgrades.js"]')) {
  const upgrades = document.createElement('script');
  upgrades.src = 'portfolio-upgrades.js';
  upgrades.defer = true;
  document.body.append(upgrades);
}

document.querySelectorAll('form[action*="YOUR_FORM_ID"]').forEach((contactForm) => {
  contactForm.action = 'https://formspree.io/f/mppqjgww';
});
