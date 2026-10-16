(() => {
  if (!document.querySelector('link[href="portfolio-upgrades.css"]')) {
    const css = document.createElement('link'); css.rel = 'stylesheet'; css.href = 'portfolio-upgrades.css'; document.head.append(css);
  }

  const contributionMap = {
    'project-succeedlearn.html': ['My contribution', [['Custom WordPress implementation', 'Theme, template, landing-page, and course-page development shaped around platform requirements.'], ['Search and measurement foundations', 'Technical SEO patterns, content hierarchy, FAQ/schema support where implemented, GA4, and Search Console foundations.'], ['Mobile and conversion journeys', 'AMP support, lead-form improvements, and production checks across supported user journeys.']]],
    'project-elearnposh.html': ['My contribution', [['Compliance-learning pages', 'WordPress page and component work for clear training, course, and webinar journeys.'], ['Forms and integrations', 'Custom form flow improvements, registration patterns, and integration planning where the required data mapping is available.'], ['Mobile delivery', 'AMP-related work, responsive QA, and clear content presentation across devices.']]],
    'project-succeed-technologies.html': ['My contribution', [['Corporate WordPress delivery', 'Page, section, template, and responsive front-end work within an established multi-product environment.'], ['Practical integrations', 'Lead forms, tracking, analytics, and technical requirements coordinated with wider platform needs.'], ['Production care', 'Testing, deployment support, maintenance, and troubleshooting for live website changes.']]],
    'project-scrombridge.html': ['My contribution', [['Learning-platform experience', 'Structured pages and responsive content patterns that support an organised training journey.'], ['Maintainable implementation', 'WordPress/PHP customisation and reusable patterns for future platform extension.'], ['Journey validation', 'Testing course navigation, layouts, and key user flows before release.']]],
    'project-external-member-directory.html': ['My contribution', [['Directory presentation', 'Structured listing templates and UI patterns for clear external member information.'], ['Discovery workflow', 'Search, filters, navigation, and empty states considered as one user journey.'], ['Quality checks', 'Responsive behaviour and important listing/filter states tested before release.']]],
    'project-brand-ventures.html': ['My contribution', [['Service-led website work', 'Responsive page and content patterns that help visitors understand services and reach an enquiry path.'], ['Search-ready foundations', 'Semantic content hierarchy and maintainable publishing patterns for future visibility work.'], ['Practical web delivery', 'Attention to responsive behaviour, performance awareness, and lead paths.']]],
    'project-new-metador.html': ['My contribution', [['Product-information structure', 'Clear category and page patterns designed around useful product discovery.'], ['Responsive experience', 'Usable content presentation across mobile, tablet, and desktop.'], ['Ongoing foundations', 'Technical SEO, maintenance, and measurement considerations for continued improvement.']]],
    'project-forcefriction.html': ['My contribution', [['Experience-focused development', 'Public-facing page patterns designed to explain a specialised technology offering clearly.'], ['Conversion support', 'Clear assessment and enquiry routes considered as part of the page experience.'], ['Technical foundations', 'Responsive behaviour, content hierarchy, performance awareness, and maintainable updates.']]],
    'project-tech-ai-magazine.html': ['My contribution', [['Editorial experience', 'Readable article and category patterns for AI content across devices.'], ['Publishing workflow', 'Maintainable content structure, newsletter paths, and discovery foundations.'], ['Measurement awareness', 'Analytics and search foundations considered for iterative editorial improvement.']]]
  };
  const projectKey = location.pathname.split('/').pop() || 'index.html';
  const contribution = contributionMap[projectKey];
  if (contribution && !document.querySelector('.portfolio-proof')) {
    const story = document.querySelector('.project-story');
    if (story) {
      const cards = contribution[1].map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('');
      story.insertAdjacentHTML('afterend', `<section class="portfolio-proof"><div><h2>${contribution[0]}</h2><p>Each case study separates the work I contributed from the wider product and team context. It describes implementation outcomes, rather than publishing unverified traffic, conversion, or revenue claims.</p></div><div class="proof-list">${cards}</div></section>`);
    }
  }

  // Evidence-led project facts drawn from the portfolio workbook. These state scope, not unmeasured business outcomes.
  const projectEvidence = {
    'project-succeedlearn.html': ['Project scope', 'B2B compliance and security eLearning platform', ['Existing WordPress theme and LearnPress course setup', 'Custom PHP, templates, page sections, and landing-page structure where implemented', 'AMP support, lead-form updates, technical SEO checks, GA4/Search Console, QA, and deployment support']],
    'project-elearnposh.html': ['Project scope', 'POSH and workplace-compliance education website', ['WordPress page development and maintenance in the existing Genesis Sample environment', 'POSH compliance and training-page layout work, plus relevant webinar, payment, and AMP page support', 'Contact/enquiry form UI changes, metadata improvements, troubleshooting, and release coordination']],
    'project-succeed-technologies.html': ['Project scope', 'Corporate WordPress work within a multi-product technology environment', ['Custom pages, reusable sections, theme/template changes, and responsive UI implementation', 'SEO-related implementation and tracking tasks where assigned', 'Staging-to-live validation, troubleshooting, and maintenance within established code conventions']],
    'project-scrombridge.html': ['Project scope', 'Learning-platform contribution focused on user journeys and maintainable delivery', ['Learning-platform pages and course presentation work where implemented', 'WordPress/PHP customisation and integration work where verified', 'Course-navigation, key-journey testing, troubleshooting, and maintenance']],
    'project-external-member-directory.html': ['Project scope', 'Directory-style experience for structured public member information', ['Listing presentation and template work where implemented', 'Filtering/search behaviour and responsive layout where part of the contribution', 'Testing important listing, filtering, and visitor-discovery states without exposing private member data']]
  };
  const evidence = projectEvidence[projectKey];
  if (evidence && !document.querySelector('.project-evidence')) {
    const scope = document.querySelector('.project-scope') || document.querySelector('.project-story');
    if (scope) scope.insertAdjacentHTML('afterend', `<section class="project-evidence"><div><p class="label">${evidence[0]}</p><h2>${evidence[1]}</h2><p>This case study describes work I contributed to in a wider product or team context. It does not claim unverified ranking, traffic, conversion, or revenue results.</p></div><ul>${evidence[2].map((item) => `<li>${item}</li>`).join('')}</ul></section>`);
  }

  if (projectKey === 'project-succeedlearn.html' && !document.querySelector('.amp-evidence')) {
    const evidenceSection = document.querySelector('.project-evidence');
    if (evidenceSection) evidenceSection.insertAdjacentHTML('afterend', `<section class="project-evidence amp-evidence"><div><p class="label">Public AMP example</p><h2>A live AMP course-discovery route.</h2><p>This publicly available SucceedLEARN course page is an AMP URL. It is included as an implementation example, not as a claim about rankings, page-speed scores, or validation status.</p><a class="button button-primary" href="https://succeedlearn.com/by-courses-best-elearning-courses-succeedlearn/?amp=1" target="_blank" rel="noopener">View public AMP page ↗</a></div><ul><li>Course categories and discovery links are available in an AMP-compatible route.</li><li>The case study keeps AMP claims scoped to publicly observable implementation.</li><li>Additional AMP URLs can be added after their public pages and validation are confirmed.</li></ul></section>`);
  }

  if (document.body.classList.contains('home') || document.querySelector('.capabilities')) {
    const anchor = document.querySelector('.faq-section') || document.querySelector('.cta-panel');
    if (anchor && !document.querySelector('.service-strip')) anchor.insertAdjacentHTML('afterend', `<section class="service-strip"><h2>How I can help.</h2><p>Focused development and improvement work for organisations that need a clearer, faster, more maintainable website or digital product.</p><div class="service-grid"><article><h3>WordPress development</h3><p>Custom themes, templates, components, page builds, and ongoing maintenance.</p></article><article><h3>Plugins & integrations</h3><p>Purpose-built features, forms, LMS, payment and business-system integrations.</p></article><article><h3>Search-ready delivery</h3><p>Technical SEO, AEO/GEO-aware structure, content clarity, and measurement foundations.</p></article><article><h3>Performance & QA</h3><p>Responsive testing, AMP support where applicable, production checks, and iterative improvement.</p></article><article><h3>Landing pages & campaigns</h3><p>Clear conversion journeys for launches, webinars, lead capture, and marketing activity.</p></article><article><h3>Website support</h3><p>Practical maintenance, content updates, troubleshooting, and technical clean-up.</p></article></div></section>`);
    document.querySelectorAll('.service-grid article').forEach((card, index) => {
      if (!card.querySelector('.service-icon')) card.insertAdjacentHTML('afterbegin', `<span class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 12h16M12 4v16M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg></span>`);
    });
  }

  if (projectKey === 'about.html') {
    const explore = document.querySelector('.explore');
    if (explore && !document.querySelector('.portfolio-timeline')) explore.insertAdjacentHTML('afterend', `<section class="portfolio-timeline"><h2>Experience in context.</h2><p>I am early in my career, but my work already spans live platforms, production changes, search foundations, plugins, and practical integrations.</p><div class="timeline-list"><article><time>May 2025 — present</time><div><h3>WordPress Developer · Succeed Technologies</h3><p>Development and maintenance across SucceedLEARN, eLearnPOSH, SCROMBridge, corporate web experiences, and related internal or customer-facing systems.</p></div></article><article><time>July 2024 — present</time><div><h3>Web development journey</h3><p>Growing through real projects in custom WordPress development, AMP, plugin work, technical SEO, performance, analytics, deployment, and maintenance.</p></div></article></div></section><section class="portfolio-tools"><h2>Tools I use in the work.</h2><p>Tools support the process; the goal is a useful, maintainable outcome.</p><div class="tool-list"><span data-mark="W">WordPress</span><span data-mark="PHP">PHP</span><span data-mark="G">Git</span><span data-mark="GA">Google Analytics 4</span><span data-mark="SC">Search Console</span><span data-mark="U">Ubersuggest</span><span data-mark="GT">GTmetrix</span><span data-mark="P">Postman</span><span data-mark="F">Figma</span><span data-mark="AI">ChatGPT</span><span data-mark="C">Claude</span><span data-mark="AZ">Azure</span></div><a class="button button-primary resume-cta" href="resume.html">View printable résumé</a></section>`);
  }

  if (projectKey === 'about.html') {
    const toolIcons = {
      'WordPress': 'wordpress', 'PHP': 'php', 'Git': 'git', 'Google Analytics 4': 'googleanalytics',
      'Search Console': 'googlesearchconsole', 'Ubersuggest': 'neilpatel', 'GTmetrix': 'gtmetrix',
      'Postman': 'postman', 'Figma': 'figma', 'ChatGPT': 'openai', 'Claude': 'anthropic', 'Azure': 'microsoftazure'
    };
    document.querySelectorAll('.tool-list > span').forEach((tool) => {
      const label = tool.textContent.trim();
      const icon = toolIcons[label];
      if (icon && !tool.querySelector('img')) tool.insertAdjacentHTML('afterbegin', `<img class="tool-logo" src="https://cdn.simpleicons.org/${icon}" width="24" height="24" loading="lazy" decoding="async" alt="">`);
    });
  }

  if (projectKey === 'wordpress-developer.html' && !document.querySelector('.wordpress-service-visual')) {
    const story = document.querySelector('.project-story');
    if (story) story.insertAdjacentHTML('afterend', `<figure class="wordpress-service-visual"><img src="depakar-portfolio-black-hero.webp" width="1536" height="1024" loading="lazy" decoding="async" alt="Depakar B reviewing a digital experience, representing WordPress development, technical SEO, and performance work"><figcaption>Clear user journeys, maintainable builds, and practical technical foundations belong in the same project.</figcaption></figure>`);
  }

  if (projectKey === 'plugins.html') {
    const wrap = document.querySelector('.plugins-wrap');
    if (wrap && !document.querySelector('.portfolio-proof')) wrap.insertAdjacentHTML('afterend', `<section class="portfolio-proof"><div><h2>Built with release quality in mind.</h2><p>Each plugin page explains a practical workflow problem rather than presenting a generic feature list. Public links, screenshots, version history, and source links should be added only when they are ready to share.</p></div><div class="proof-list"><article><h3>Real problem first</h3><p>Forms, content discovery, redirects, SEO history, and social chat are all repeated WordPress workflows.</p></article><article><h3>WordPress-safe habits</h3><p>Settings, output, compatibility, sanitisation, escaping, and release maintenance are considered in the development process.</p></article><article><h3>Evidence over promises</h3><p>Public directory pages, repositories, screenshots, and changelogs are the right proof when approved for publication.</p></article></div></section>`);
  }

  document.querySelectorAll('.portfolio-timeline time').forEach((date) => date.remove());

  if (projectKey === 'blog.html') {
    const grid = document.querySelector('.blog-grid');
    if (grid && !document.querySelector('.blog-roadmap')) grid.insertAdjacentHTML('afterend', `<section class="blog-roadmap"><h2>More practical notes in progress.</h2><p>These are the next technical topics I am preparing from real WordPress development and production work.</p><div class="blog-roadmap-grid"><article><span>Technical SEO</span><h3>WordPress technical SEO checklist</h3><p>What to review before treating a page as ready for search.</p></article><article><span>Production QA</span><h3>What I test before a WordPress release</h3><p>Responsive layouts, forms, tracking, content, and live checks.</p></article><article><span>AMP</span><h3>Maintaining AMP experiences</h3><p>Practical lessons from keeping mobile and desktop experiences aligned.</p></article><article><span>Plugins</span><h3>Building a safer WordPress plugin</h3><p>Settings, sanitisation, escaping, compatibility, and releases.</p></article><article><span>Directories</span><h3>Creating a searchable member directory</h3><p>Content structure, filters, listing states, and user journeys.</p></article><article><span>Case studies</span><h3>How I document web work honestly</h3><p>Showing decisions and proof without inventing business outcomes.</p></article></div></section>`);
  }

  // Give every long-form article a clear path back to the WordPress service page.
  if (document.querySelector('.article-body') && !document.querySelector('.article-service-cta')) {
    const articleBody = document.querySelector('.article-body');
    articleBody.insertAdjacentHTML('beforeend', '<aside class="article-service-cta"><h2>Need help applying this to a WordPress site?</h2><p>I build and improve WordPress themes, plugins, forms, performance, technical SEO, and integrations.</p><a class="button button-primary" href="wordpress-developer.html">Explore WordPress development</a></aside>');
  }

  if (projectKey === 'contact.html') {
    const form = document.querySelector('[data-contact-form]');
    const message = form?.querySelector('textarea[name="message"]');
    if (form && message && !form.querySelector('[name="project_type"]')) {
      message.closest('.field').insertAdjacentHTML('beforebegin', `<div class="form-row"><label class="field"><span>How can I help?</span><select name="project_type" required><option value="" selected disabled>Select an enquiry type</option><option>New website</option><option>WordPress support</option><option>SEO / performance improvement</option><option>Plugin or integration</option><option>Job opportunity</option><option>Other</option></select></label><label class="field"><span>Preferred timeline</span><select name="timeline"><option value="">Select one</option><option>As soon as possible</option><option>Within one month</option><option>One to three months</option><option>Flexible</option></select></label></div>`);
      form.querySelector('button[type="submit"]')?.insertAdjacentHTML('afterend', '<p class="contact-reply-note">Usually replies within 1–2 working days.</p>');
    }
  }

  document.querySelectorAll('.faq-list details').forEach((item) => { item.open = true; });

  if ((projectKey === 'index.html' || location.pathname === '/' || location.pathname.endsWith('/')) && !document.querySelector('.resume-download')) {
    document.querySelector('.hero-actions')?.insertAdjacentHTML('beforeend', '<a class="button button-quiet resume-download" href="Depakar-B-Resume.docx" download>Download résumé</a>');
  }

  // Project filtering keeps the full Work page useful once the portfolio grows.
  if ((projectKey === 'work.html' || projectKey === 'work-v2.html') && !document.querySelector('.work-filter-bar')) {
    const caseList = document.querySelector('.case-list');
    const projectGrid = document.querySelector('.project-grid-four');
    if (caseList) {
      const filters = ['All', 'WordPress', 'SEO', 'AMP', 'Integrations', 'Learning platforms'];
      caseList.insertAdjacentHTML('beforebegin', `<div class="work-filter-bar" aria-label="Filter projects"><span>Filter work</span>${filters.map((filter, index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-filter="${filter}">${filter}</button>`).join('')}</div>`);
      const allCards = [...caseList.querySelectorAll('.case-study'), ...(projectGrid ? projectGrid.querySelectorAll('.project-card') : [])];
      const tags = {
        'SucceedLEARN': ['WordPress', 'SEO', 'AMP', 'Integrations', 'Learning platforms'],
        'eLearnPOSH': ['WordPress', 'AMP', 'Integrations', 'Learning platforms'],
        'Succeed Technologies': ['WordPress', 'SEO', 'Integrations'],
        'SCROMBridge': ['WordPress', 'Integrations', 'Learning platforms'],
        'External Member Directory': ['WordPress', 'Integrations'],
        'Brand Ventures': ['WordPress', 'SEO'], 'New Metador': ['WordPress', 'SEO'],
        'ForceFriction AI': ['WordPress', 'SEO'], 'Tech AI Magazine': ['WordPress', 'SEO']
      };
      allCards.forEach((card) => {
        const key = Object.entries(tags).find(([name]) => card.textContent.includes(name))?.[0];
        card.dataset.workTags = (tags[key] || ['WordPress']).join('|');
      });
      document.querySelector('.work-filter-bar').addEventListener('click', (event) => {
        const button = event.target.closest('button[data-filter]'); if (!button) return;
        document.querySelectorAll('.work-filter-bar button').forEach((item) => item.classList.toggle('is-active', item === button));
        const filter = button.dataset.filter;
        allCards.forEach((card) => { card.hidden = filter !== 'All' && !card.dataset.workTags.split('|').includes(filter); });
      });
    }
  }

  // Long-form articles get a reading progress bar, table of contents, author note and related reading.
  if (document.querySelector('.article') && !document.querySelector('.article-reading-tools')) {
    const article = document.querySelector('.article');
    const bodyCopy = article.querySelector('.article-body');
    const articleCover = {
      'seo-aeo-geo-guide.html': ['blog-assets/covers/seo-aeo-geo.webp', 'Connected search, answer and generative discovery systems'],
      'wordpress-technical-seo-checklist.html': ['blog-assets/covers/technical-seo.webp', 'Website structure, crawl paths and technical SEO checks'],
      'wordpress-performance-guide.html': ['blog-assets/covers/performance.webp', 'Faster website delivery and page performance optimisation'],
      'amp-page-experience.html': ['blog-assets/covers/mobile-amp.webp', 'Responsive mobile website journey and conversion flow'],
      'wordpress-forms-integrations.html': ['blog-assets/covers/forms-integrations.webp', 'Secure form submission connected to business systems'],
      'wordpress-security-basics.html': ['blog-assets/covers/security.webp', 'Layered website security, access control and backup protection']
    }[projectKey];
    const cover = article.querySelector('.article-header + .article-cover');
    if (cover && articleCover) {
      cover.src = articleCover[0]; cover.alt = articleCover[1]; cover.width = 1600; cover.height = 900;
      cover.fetchPriority = 'high'; cover.removeAttribute('loading');
    }
    const headings = bodyCopy ? [...bodyCopy.querySelectorAll('h2, h3')] : [];
    headings.forEach((heading, index) => { heading.id ||= `section-${index + 1}`; });
    const toc = headings.length ? `<aside class="article-reading-tools"><p>In this article</p><nav>${headings.map((heading) => `<a class="toc-${heading.tagName.toLowerCase()}" href="#${heading.id}">${heading.textContent}</a>`).join('')}</nav></aside>` : '';
    const readLabel = article.querySelector('.blog-label');
    if (readLabel && !readLabel.textContent.includes('read')) readLabel.textContent += ' · 5 min read';
    article.insertAdjacentHTML('afterbegin', '<div class="reading-progress" aria-hidden="true"><i></i></div>');
    if (bodyCopy) {
      bodyCopy.insertAdjacentHTML('afterend', `<section class="article-afterword"><div class="article-author"><span>Written by</span><b>Depakar B</b><p>WordPress Developer at Succeed Technologies, working across custom PHP development, plugins, learning platforms, AMP-related implementation, technical SEO, analytics, and maintainable website improvements.</p><a href="about.html">About the author →</a></div><div class="related-reading"><h2>Keep reading</h2><a href="wordpress-technical-seo-checklist.html">WordPress technical SEO checklist →</a><a href="wordpress-performance-guide.html">Improve WordPress page performance →</a><a href="seo-aeo-geo-guide.html">SEO, AEO &amp; GEO practical guide →</a></div></section>`);
      bodyCopy.insertAdjacentHTML('beforebegin', toc);
    }
    const updateProgress = () => {
      const total = Math.max(article.offsetHeight - window.innerHeight, 1);
      const top = article.getBoundingClientRect().top;
      const progress = Math.max(0, Math.min(100, ((-top) / total) * 100));
      const bar = document.querySelector('.reading-progress i'); if (bar) bar.style.width = `${progress}%`;
    };
    updateProgress(); window.addEventListener('scroll', updateProgress, { passive: true });
  }

  if (projectKey === 'blog.html' && !document.querySelector('.blog-category-bar')) {
    const grid = document.querySelector('.blog-grid');
    if (grid) {
      const categories = [['all', 'All topics'], ['seo', 'SEO, AEO & GEO'], ['performance', 'Performance & speed'], ['structure', 'Site structure'], ['mobile', 'Mobile & AMP'], ['guidance', 'WordPress guidance']];
      grid.insertAdjacentHTML('beforebegin', `<nav class="blog-category-bar" aria-label="Filter blog topics">${categories.map(([key, label], index) => `<button type="button" class="${index === 0 ? 'is-active' : ''}" data-blog-filter="${key}">${label}</button>`).join('')}</nav>`);
      const cards = [...grid.querySelectorAll('.blog-card')];
      document.querySelector('.blog-category-bar').addEventListener('click', (event) => {
        const button = event.target.closest('[data-blog-filter]'); if (!button) return;
        document.querySelectorAll('.blog-category-bar button').forEach((item) => item.classList.toggle('is-active', item === button));
        cards.forEach((card) => { card.hidden = button.dataset.blogFilter !== 'all' && !card.dataset.blogCategory.split(' ').includes(button.dataset.blogFilter); });
      });
    }
  }

  // Site-wide structured data. Replace the verification placeholder only after Search Console provides a token.
  if (!document.querySelector('script[data-portfolio-site-schema]')) {
    const schema = { '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebSite', name: 'Depakar B', url: location.origin + '/', description: 'Portfolio of Depakar B, WordPress Developer.' },
      { '@type': 'Person', name: 'Depakar B', jobTitle: 'WordPress Developer', url: location.origin + '/', sameAs: ['https://www.linkedin.com/in/depakar418', 'https://github.com/Depakar418'] }
    ]};
    const node = document.createElement('script'); node.type = 'application/ld+json'; node.dataset.portfolioSiteSchema = 'true'; node.textContent = JSON.stringify(schema); document.head.append(node);
  }

  if (projectKey === 'index.html' || location.pathname === '/' || location.pathname.endsWith('/')) {
    const schema = { '@context': 'https://schema.org', '@type': 'Person', name: 'Depakar B', jobTitle: 'WordPress Developer', url: location.origin + '/', image: location.origin + '/depakar-profile.png', sameAs: ['https://www.linkedin.com/in/depakar418', 'https://github.com/Depakar418'], knowsAbout: ['WordPress development', 'PHP', 'Plugin engineering', 'Technical SEO', 'AEO', 'GEO', 'Web performance', 'Analytics'] };
    if (!document.querySelector('script[data-portfolio-person]')) { const node = document.createElement('script'); node.type = 'application/ld+json'; node.dataset.portfolioPerson = 'true'; node.textContent = JSON.stringify(schema); document.head.append(node); }
  }

  const exploreColumn = document.querySelector('.site-footer .footer-column');
  if (exploreColumn && !exploreColumn.querySelector('a[href="wordpress-developer.html"]')) {
    exploreColumn.insertAdjacentHTML('afterbegin', '<a href="wordpress-developer.html">WordPress development</a>');
  }
  if (exploreColumn && !exploreColumn.querySelector('a[href="technical-work.html"]')) {
    exploreColumn.insertAdjacentHTML('beforeend', '<a href="technical-work.html">Technical work</a><a href="resume.html">Résumé</a>');
  }
  if (exploreColumn && !exploreColumn.querySelector('a[href="build-notes.html"]')) {
    exploreColumn.insertAdjacentHTML('beforeend', '<a href="build-notes.html">Build notes</a><a href="contributions.html">Contributions</a>');
  }
  if ((projectKey === 'work.html' || projectKey === 'work-v2.html') && !document.querySelector('.technical-work-cta')) {
    const caseList = document.querySelector('.case-list');
    if (caseList) caseList.insertAdjacentHTML('afterend', '<section class="service-strip technical-work-cta"><h2>Work that spans more than one project.</h2><p>AMP, WordPress engineering, integrations, technical SEO, analytics, and production QA often support several platforms at once.</p><a class="button button-primary" href="technical-work.html">Explore technical work</a></section>');
  }
})();
