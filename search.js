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
{title:'FormMailbox',type:'Plugin',text:'WordPress form plugin with a submission inbox and email fallback.',url:'plugins.html'}];
const field=document.querySelector('#site-search'),results=document.querySelector('#search-results');function render(query=''){const q=query.trim().toLowerCase(),found=items.filter(i=>`${i.title} ${i.type} ${i.text}`.toLowerCase().includes(q));results.innerHTML=found.length?found.map(i=>`<a class="search-result" href="${i.url}"${i.url.startsWith('http')?' target="_blank" rel="noopener"':''}><small>${i.type}</small><b>${i.title}</b><p>${i.text}</p></a>`).join(''):'<p>No result yet. Try SEO, plugins, WordPress, or a project name.</p>'}if(field){render();field.addEventListener('input',e=>render(e.target.value));}
