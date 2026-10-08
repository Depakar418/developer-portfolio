const select = (selector, scope = document) => scope.querySelector(selector);
const selectAll = (selector, scope = document) => [...scope.querySelectorAll(selector)];

select('#year').textContent = new Date().getFullYear();

const menu = select('#site-nav');
const menuToggle = select('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
selectAll('#site-nav a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

const filters = selectAll('.filter');
const cards = selectAll('.work-grid .project-card');
filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const wanted = button.dataset.filter;
  cards.forEach((card) => card.classList.toggle('hidden', wanted !== 'all' && !card.dataset.category.includes(wanted)));
}));

const tabs = selectAll('.lab-tab');
const panels = selectAll('.lab-panel');
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => { item.classList.remove('active'); item.setAttribute('aria-selected', 'false'); });
  panels.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
  select(`#${tab.dataset.panel}`).classList.add('active');
}));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('in'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
selectAll('.reveal').forEach((element) => observer.observe(element));

const meter = select('.scroll-meter span');
window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  meter.style.width = `${height ? (window.scrollY / height) * 100 : 0}%`;
}, { passive: true });

if (window.matchMedia('(pointer:fine)').matches) {
  const glow = select('.cursor-glow');
  window.addEventListener('pointermove', (event) => { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }, { passive: true });
}
