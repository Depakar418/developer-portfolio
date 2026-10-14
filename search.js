const items=[
{title:'SucceedLEARN',type:'Project',text:'WordPress learning, compliance and marketing ecosystem.',url:'work.html#succeedlearn'},
{title:'eLearnPOSH',type:'Project',text:'Workplace compliance learning experience.',url:'work.html#elearnposh'},
{title:'Succeed Technologies',type:'Project',text:'Corporate website and multi-product platform work.',url:'work.html#succeedtech'},
{title:'SCROMBridge',type:'Project',text:'Structured training delivery platform.',url:'work.html#scrombridge'},
{title:'Brand Ventures',type:'Public project',text:'Digital marketing and branding agency.',url:'https://brandventures.in/'},
{title:'New Metador',type:'Public project',text:'Heavy-duty truck and trailer parts supplier.',url:'https://newmetador.ca/'},
{title:'ForceFriction AI',type:'Public project',text:'Enterprise AI services and solutions.',url:'https://forcefriction.com/'},
{title:'Tech AI Magazine',type:'Public project',text:'Editorial platform about artificial intelligence.',url:'https://www.techaimag.com/'},
{title:'SEO, AEO & GEO: A Practical Guide',type:'Blog',text:'How modern search, answer engines and generative AI discovery work.',url:'seo-aeo-geo-guide.html'},
{title:'WordPress technical SEO checklist',type:'Blog',text:'A practical checklist for technical SEO and clear page foundations.',url:'wordpress-technical-seo-checklist.html'},
{title:'Improve WordPress page performance',type:'Blog',text:'Loading, Core Web Vitals, responsive delivery and practical performance checks.',url:'wordpress-performance-guide.html'},
{title:'AMP and mobile page experience',type:'Blog',text:'How to keep lightweight mobile pages useful for people and conversion journeys.',url:'amp-page-experience.html'},
{title:'WordPress forms and integrations',type:'Blog',text:'Reliable data capture, email notification, CRM, ERP, LMS and payment workflows.',url:'wordpress-forms-integrations.html'},
{title:'WordPress security foundations',type:'Blog',text:'Login security, updates, backups, 2FA, form protection and site maintenance.',url:'wordpress-security-basics.html'},
{title:'Now',type:'Page',text:'What Depakar is currently building, learning and improving.',url:'now.html'},
{title:'FormMailbox',type:'Plugin',text:'WordPress form plugin with a submission inbox and email fallback.',url:'formmailbox.html'},
{title:'Depakar Article Grid',type:'Plugin',text:'Searchable, sortable and filterable article grids for WordPress.',url:'depakar-article-grid.html'}];
const field=document.querySelector('#site-search'),results=document.querySelector('#search-results');function render(query=''){const q=query.trim().toLowerCase(),found=items.filter(i=>`${i.title} ${i.type} ${i.text}`.toLowerCase().includes(q));results.innerHTML=found.length?found.map(i=>`<a class="search-result" href="${i.url}"${i.url.startsWith('http')?' target="_blank" rel="noopener"':''}><small>${i.type}</small><b>${i.title}</b><p>${i.text}</p></a>`).join(''):'<p>No result yet. Try SEO, plugins, WordPress, or a project name.</p>'}if(field){render();field.addEventListener('input',e=>render(e.target.value));}
