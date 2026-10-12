const root = document.documentElement;
const body = document.body;

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
document.querySelectorAll('img[src="assets/depakar-profile.png"],img[src="depakar-profile.png"]').forEach((img) => { img.alt = 'Portrait of Depakar B, WordPress Developer'; });
if (!document.querySelector('link[href="overrides.css"]')) {
  const sheet = document.createElement('link');
  sheet.rel = 'stylesheet'; sheet.href = 'overrides.css'; document.head.append(sheet);
}

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
  utility.innerHTML = `<a class="header-whatsapp" href="https://wa.me/919344465429" target="_blank" rel="noopener">WhatsApp</a><button class="theme-toggle" type="button">Light</button><div class="language-picker"><button class="language-menu-button" type="button" aria-label="Choose website language" aria-expanded="false"><span class="language-flag">${flags.en}</span><span class="language-name">EN</span>${chevron}</button><div class="language-menu" role="menu" hidden>${Object.entries(languages).map(([code, label]) => `<button type="button" role="menuitem" data-language="${code}"><span class="language-flag">${flags[code]}</span>${label}</button>`).join('')}</div></div>`;
  header.append(utility);
  const themeButton = utility.querySelector('.theme-toggle');
  if (localStorage.getItem('theme') === 'light') body.classList.add('light');
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
  menuToggle.setAttribute('aria-expanded', String(open));
});

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
  document.querySelectorAll('#site-nav a').forEach((link, index) => { link.textContent = navigation[language][index] || link.textContent; });
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
      ['Secure foundations', 'WordPress security', 'Practical hardening through security plugins, protected login flows, 2FA, updates, backups, and maintenance checks.']
    ].forEach(([label, title, description]) => specialisationGrid.insertAdjacentHTML('beforeend', `<article data-expanded-specialisation><span>${label}</span><h3>${title}</h3><p>${description}</p></article>`));
  }
}

const scrollTop = document.createElement('button');
scrollTop.className = 'scroll-top'; scrollTop.type = 'button'; scrollTop.setAttribute('aria-label', 'Scroll to top'); scrollTop.innerHTML = arrowUp;
document.body.append(scrollTop);
window.addEventListener('scroll', () => scrollTop.classList.toggle('is-visible', window.scrollY > 500), { passive: true });
scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const floatingWhatsapp = document.createElement('a');
floatingWhatsapp.className = 'floating-whatsapp'; floatingWhatsapp.href = 'https://wa.me/919344465429'; floatingWhatsapp.target = '_blank'; floatingWhatsapp.rel = 'noopener'; floatingWhatsapp.setAttribute('aria-label', 'Chat with Depakar on WhatsApp'); floatingWhatsapp.innerHTML = whatsappIcon;
document.body.append(floatingWhatsapp);

const projectGalleries = {
  'project-succeedlearn.html': { site: 'https://succeedlearn.com/', name: 'SucceedLEARN', intro: 'Desktop and AMP captures matched to the learning, mobile, and enquiry experiences discussed in this case study.', images: [['project-assets/succeedlearn-desktop-home.jpg', 'SucceedLEARN public desktop homepage', 'Desktop platform experience', true], ['project-assets/succeedlearn-amp-home.jpg', 'SucceedLEARN AMP homepage', 'AMP content experience'], ['project-assets/succeedlearn-amp-form.jpg', 'SucceedLEARN AMP enquiry form with submit action', 'AMP enquiry and form flow']] },
  'project-elearnposh.html': { site: 'https://elearnposh.com/', name: 'eLearnPOSH', intro: 'Desktop and AMP captures show the public learning platform and demo journey.', images: [['project-assets/elearnposh-desktop-home.jpg', 'eLearnPOSH public desktop homepage', 'Desktop learning platform', true], ['project-assets/elearnposh-amp-home.jpg', 'eLearnPOSH AMP homepage', 'AMP content experience'], ['project-assets/elearnposh-amp-form.jpg', 'eLearnPOSH AMP demo submission form', 'AMP demo request form']] },
  'project-succeed-technologies.html': { site: 'https://succeedtech.com/', name: 'Succeed Technologies', intro: 'Public captures show the corporate product-offerings page and the contact workflow.', images: [['project-assets/succeedtech-offerings.jpg', 'Succeed Technologies public offerings page', 'Corporate offerings page'], ['project-assets/succeedtech-contact-form.jpg', 'Succeed Technologies contact form', 'Contact and enquiry flow']] },
  'project-brand-ventures.html': { site: 'https://brandventures.in/', name: 'Brand Ventures', intro: 'Public desktop captures of the agency homepage and its lead-generation flow.', images: [['project-assets/brandventures-desktop-home.jpg', 'Brand Ventures public desktop homepage', 'Desktop homepage'], ['project-assets/brandventures-contact-form.jpg', 'Brand Ventures contact page with enquiry form', 'Contact and enquiry form']] },
  'project-forcefriction.html': { site: 'https://forcefriction.com/', name: 'ForceFriction AI', intro: 'Public desktop captures of the enterprise AI platform and assessment request flow.', images: [['project-assets/forcefriction-desktop-home.jpg', 'ForceFriction AI public desktop homepage', 'Enterprise platform homepage'], ['project-assets/forcefriction-assessment-form.jpg', 'ForceFriction AI assessment request form', 'Assessment form and lead flow']] },
  'project-tech-ai-magazine.html': { site: 'https://www.techaimag.com/', name: 'Tech AI Magazine', intro: 'Public captures show both the magazine front page and long-form reading experience.', images: [['project-assets/techai-desktop-home.jpg', 'Tech AI Magazine public desktop homepage', 'Magazine homepage'], ['project-assets/techai-article.jpg', 'Tech AI Magazine desktop article page', 'Long-form article experience']] }
};
const galleryKey = location.pathname.split('/').pop() || 'index.html';
const gallery = projectGalleries[galleryKey];
if (gallery && !document.querySelector('.project-gallery')) {
  document.querySelector('.project-showcase')?.remove();
  const story = document.querySelector('.project-story');
  if (story) {
    const cards = gallery.images.map(([src, alt, caption, wide]) => `<figure class="project-gallery-item${wide ? ' project-gallery-wide' : ''}"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${caption}</figcaption></figure>`).join('');
    story.insertAdjacentHTML('afterend', `<section class="project-gallery"><div class="project-gallery-heading"><div><h2>Live product views.</h2><p>${gallery.intro}</p></div><a href="${gallery.site}" target="_blank" rel="noopener">Open ${gallery.name} ↗</a></div><div class="project-gallery-grid">${cards}</div></section>`);
  }
}

const footer = document.querySelector('.site-footer');
if (footer) {
  footer.innerHTML = `<div class="footer-brand"><a class="wordmark" href="index.html">DEPAKAR<span> B</span></a><p>WordPress development, plugin engineering, and search-ready digital experiences built for practical growth.</p><p class="footer-signoff">Built with curiosity, code, and too many browser tabs.</p></div><div class="footer-column"><b>Explore</b><a href="work.html">Projects</a><a href="about.html">About me</a><a href="plugins.html">Plugins</a><a href="blog.html">Insights</a></div><div class="footer-column"><b>Capabilities</b><span>WordPress development</span><span>Technical SEO · AEO · GEO</span><span>Performance &amp; analytics</span><span>Custom plugins &amp; integrations</span></div><div class="footer-contact"><b>Let’s build something useful.</b><p>Have a site, product, or workflow that needs to work better?</p><a class="footer-email" href="mailto:depakar418@gmail.com">depakar418@gmail.com</a><div class="footer-actions"><a class="footer-whatsapp-link" href="https://wa.me/919344465429" target="_blank" rel="noopener">Chat on WhatsApp</a><a href="https://www.linkedin.com/in/depakar418" target="_blank" rel="noopener">LinkedIn</a></div></div><div class="footer-base"><small>© ${new Date().getFullYear()} Depakar B</small><small>WordPress Developer · SEO · AEO · GEO</small></div>`;
}

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
    form.reset(); status.textContent = 'Thanks — your message is on its way.'; status.className = 'form-status success';
  } catch {
    status.textContent = 'That did not send. Please email depakar418@gmail.com instead.'; status.className = 'form-status error';
  } finally {
    button.disabled = false; button.textContent = 'Send enquiry';
  }
});
