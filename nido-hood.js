(function(){
const SVGI={
 'nido-swim':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><circle cx="17.5" cy="7.5" r="2.6" fill="#000" stroke="none"/><path d="M3.5 11.5 9 7.5l4.5 4.5" stroke-width="2.8"/><path d="M2 16.5c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0 3.3 1.4 5 0M2 21c1.7-1.4 3.3-1.4 5 0s3.3 1.4 5 0 3.3-1.4 5 0 3.3 1.4 5 0" stroke-width="2.2"/></svg>',
 'nido-hike':'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><circle cx="12.5" cy="3.4" r="2.3" fill="#000" stroke="none"/><rect x="6.2" y="6.6" width="4" height="6" rx="1.2" fill="#000" stroke="none" transform="rotate(12 8.2 9.6)"/><path d="M11.8 7.2 10.6 13l3 3.6v5M10.6 13l-2 4.2-2.2 4.3M11.6 9l3.6 2.2" stroke-width="2.6"/><path d="M16.4 8.5 18.6 22" stroke-width="1.7"/></svg>'};
(()=>{const st=document.createElement('style');st.textContent=Object.entries(SVGI).map(([k,v])=>'.'+k+'::before{content:"";display:inline-block;width:1em;height:1em;vertical-align:-.125em;background:currentColor;-webkit-mask:url("data:image/svg+xml,'+encodeURIComponent(v)+'") center/contain no-repeat;mask:url("data:image/svg+xml,'+encodeURIComponent(v)+'") center/contain no-repeat}').join('');document.head.appendChild(st);})();
const HOUSE=[18.9758,-99.0791];
const CATS=[
 {id:'cafe',icon:'ph-coffee',color:'#9A5236',es:'Cafés y comida',en:'Cafés & food',
  introEs:'Para el café de la mañana, un desayuno largo o una comida casera. Todo a unos pasos de la casa.',
  introEn:'For your morning coffee, a slow breakfast or a home-cooked meal. All a few steps from the house.'},
 {id:'shop',icon:'ph-shopping-bag',color:'#5F6B3C',es:'Tiendas',en:'Shops',
  introEs:'Lo de todos los días sin salir del barrio: queso, vino, fruta y farmacia. Los domingos hay mercado en Huilotepec.',
  introEn:'Everyday things without leaving the neighborhood: cheese, wine, fruit and a pharmacy. On Sundays there is a street market in Huilotepec.'},
 {id:'outdoor',icon:'ph-tree',color:'#2F6B5A',es:'Aire libre',en:'Outdoors',
  introEs:'Para moverse: una alberca para nadar y un sendero al cerro, los dos cerca de la casa.',
  introEn:'For staying active: a pool for laps and a trail up the hill, both close to the house.'},
 {id:'bus',icon:'ph-bus',color:'#3F5B6E',es:'Transporte',en:'Transport',
  introEs:'El transporte al centro pasa cada 5 minutos, y hay sitio de taxis muy cerca de la casa.',
  introEn:'Buses to downtown pass every 5 minutes, and there is a taxi stand very close to the house.'}
];
const PLACES=[
 {id:'jesse',dq:'Cafetería y Panadería Jesse, Ixcatepec, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=177120079507311439',photo:'assets/hood/jesse.jpg',cat:'cafe',name:'Jesse',lat:18.974978,lng:-99.078602,
  hours:{es:'Cerrado los miércoles',en:'Closed on Wednesdays'},
  d:{es:'Café de especialidad y panadería. El mejor del pueblo.',en:'Specialty coffee and bakery. The best in town.'},
  tip:{es:'Nuestro favorito para el café y el pan de la mañana.',en:'Our favorite for morning coffee and bread.'}},
 {id:'rustique',dq:'Rustique Pan y Café, Ixcatepec, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=17935508604780592279',photo:'assets/hood/rustique.jpg',cat:'cafe',name:'Rustique',lat:18.97861,lng:-99.080511,
  hours:{es:'Mié–Dom · 8:00–13:00',en:'Wed–Sun · 8am–1pm'},
  d:{es:'Café y desayunos.',en:'Coffee and breakfast.'},
  tip:{es:'Buen lugar para un desayuno sin prisa.',en:'A good spot for an unhurried breakfast.'}},
 {id:'juquilita',dq:'Mi Juquilita, Ixcatepec, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=10148654891002315674',icon:'ph-fork-knife',photo:'assets/hood/juquilita.jpg',cat:'cafe',name:'Mi Juquilita',lat:18.9751,lng:-99.078811,
  d:{es:'Restaurante de comida casera.',en:'Home-style cooking.'},
  tip:{es:'Para cuando no tienes ganas de cocinar.',en:'For days you don\u2019t feel like cooking.'}},
 {id:'cecina',dq:'Cecina Don Armando, Ixcatepec, Tepoztlán, Morelos',icon:'ph-fork-knife',gm:'https://maps.google.com/?cid=6140905709014085877',photo:'assets/hood/cecina.jpg',cat:'cafe',name:'Cecina Don Armando',lat:18.975475,lng:-99.078977,
  hours:{es:'Solo sábado y domingo',en:'Saturday & Sunday only'},
  d:{es:'Cecina, solo los fines de semana.',en:'Cecina, weekends only.'},
  tip:{es:'Un clásico de fin de semana en el barrio.',en:'A neighborhood weekend classic.'}},
 {id:'tepozcafe',dq:'Tepoz Café, Ixcatepec, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=14103321865181327121',photo:'assets/hood/tepozcafe.jpg',cat:'cafe',name:'Tepoz Café',lat:18.974534,lng:-99.077671,
  d:{es:'Cafetería y panadería orgánica.',en:'Organic café and bakery.'}},
 {id:'foodcourt',icon:'ph-fork-knife',cat:'cafe',name:{es:'Food court',en:'Food court'},lat:18.978514,lng:-99.080291,
  d:{es:'Varios puestos de comida en un solo lugar.',en:'Several food stalls in one place.'}},
 {id:'casaazul',dq:'La Casa Azul, Ixcatepec, Tepoztlán, Morelos',icon:'ph-cheese',gm:'https://maps.google.com/?cid=6007623657552606054',photo:'assets/hood/casaazul.jpg',cat:'shop',name:'Casa Azul',lat:18.975348,lng:-99.079235,
  hours:{es:'Todos los días · 11:00–20:00',en:'Every day · 11am–8pm'},
  d:{es:'Quesos y salchichonería.',en:'Cheese and deli shop.'}},
 {id:'catalana',dq:'La Catalana vinos y destilados, Ixcatepec, Tepoztlán, Morelos',icon:'ph-wine',gm:'https://maps.google.com/?cid=11145089216052943355',photo:'assets/hood/catalana.jpg',cat:'shop',name:'Catalana',lat:18.975013,lng:-99.07821,
  hours:{es:'Todos los días · 11:00–20:00',en:'Every day · 11am–8pm'},
  d:{es:'Tienda de vinos.',en:'Wine shop.'}},
 {id:'frutas',icon:'ph-carrot',gm:'https://maps.google.com/?cid=3990295852471620605',cat:'shop',name:'Frutas y verduras',lat:18.975242,lng:-99.079052,
  d:{es:'Fruta y verdura fresca.',en:'Fresh fruit and vegetables.'}},
 {id:'farmacia',icon:'ph-first-aid',gm:'https://maps.google.com/?cid=6042971864246921295',photo:'assets/hood/farmacia.jpg',cat:'shop',name:'Farmacias Similares',lat:18.974623,lng:-99.078081,
  d:{es:'Farmacia.',en:'Pharmacy.'}},
 {id:'tianguis',icon:'ph-basket',cat:'shop',name:{es:'Mercado',en:'Market'},lat:18.973776,lng:-99.076853,
  hours:{es:'Domingos · 8:00–14:00',en:'Sundays · 8am–2pm'},
  d:{es:'Mercado de los domingos.',en:'Sunday market.'}},
 {id:'camohmila',dq:'Camohmila, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=5356617904941747824',icon:'nido-swim',photo:'assets/hood/camohmila.jpg',cat:'outdoor',name:{es:'Alberca Camohmila (YMCA)',en:'Camohmila pool (YMCA)'},lat:18.9793887,lng:-99.0825386,
  hours:{es:'Todos los días · 9:00–13:00',en:'Every day · 9am–1pm'},
  d:{es:'Alberca en el campamento YMCA Camohmila. Nado libre: 1 h por 80 MXN.',en:'Pool at the YMCA Camohmila camp. Open swim: 1 hour for 80 MXN.'}},
 {id:'youalinchan',dq:'Zona Arqueologica Youalinchan, Tepoztlán, Morelos',gm:'https://maps.google.com/?cid=1299174823573483254',icon:'nido-hike',photo:'assets/hood/youalinchan.webp',cat:'outdoor',name:{es:'Sendero al cerro Youalinchan',en:'Cerro Youalinchan trailhead'},lat:18.9742743,lng:-99.080511,
  hours:{es:'Moderado · 40 min',en:'Moderate · 40 min'},
  d:{es:'Inicio del sendero al cerro Youalinchan.',en:'Start of the trail up Cerro Youalinchan.'}},
 {id:'taxi',icon:'ph-taxi',cat:'bus',name:{es:'Sitio de taxis',en:'Taxi stand'},lat:18.974468,lng:-99.07769,
  d:{es:'Taxis al centro y alrededores.',en:'Taxis to downtown and around.'}},
 {id:'bus',photo:'assets/hood/bus.png',cat:'bus',name:{es:'Parada al centro',en:'Bus to downtown'},lat:18.975632,lng:-99.079318,
  hours:{es:'Cada 5 min · 13 MXN',en:'Every 5 min · 13 MXN'},
  d:{es:'Ruta al centro de Tepoztlán. Sirve cualquier combi o autobús.',en:'Route to downtown Tepoztlán. Any combi or bus will do.'}}
];
const KEY='nido-hood-pins-v1';
const over=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
const pos=p=>over()[p.id]||[p.lat,p.lng];
const cat=id=>CATS.find(c=>c.id===id);
function pin(p,on){const c=cat(p.cat),s=on?44:32;
 return L.divIcon({className:'',iconSize:[s,s],iconAnchor:[s/2,s/2],
  html:'<div style="width:'+s+'px;height:'+s+'px;border-radius:50%;background:'+c.color+';border:2.5px solid #F6F0E6;box-shadow:0 2px 8px rgba(46,37,32,.35);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font-size:'+(on?22:16)+'px;transition:all .15s"><i class="ph-bold '+(p.icon||c.icon)+'"></i></div>'});}
const HOUSE_PINS={
 disc:()=>({s:[40,40],a:[20,20],h:'<div style="width:40px;height:40px;border-radius:50%;background:#7E3A4C;border:3px solid #F6F0E6;box-shadow:0 3px 12px rgba(46,37,32,.4);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font:500 9px/1 Figtree,sans-serif;letter-spacing:.14em">NiDO</div>'}),
 star:()=>({s:[62,62],a:[31,32],h:'<svg width="62" height="62" viewBox="0 0 62 62" style="filter:drop-shadow(0 3px 5px rgba(46,37,32,.45));overflow:visible"><polygon points="31,3 40.4,19.1 58.6,23 46.2,36.9 48,55.5 31,48 14,55.5 15.8,36.9 3.4,23 21.6,19.1" fill="#F2B632" stroke="#2E2520" stroke-width="2.2" stroke-linejoin="round"/><text x="31" y="36.2" text-anchor="middle" textLength="23" lengthAdjust="spacingAndGlyphs" font-family="Figtree,sans-serif" font-weight="700" font-size="9.5" fill="#2E2520">NiDO</text></svg>'}),
 sign:()=>({s:[56,56],a:[28,28],h:'<svg width="56" height="56" viewBox="0 0 56 56" style="filter:drop-shadow(0 3px 5px rgba(46,37,32,.45));overflow:visible"><circle cx="28" cy="28" r="19.5" fill="none" stroke="#33241C" stroke-width="10"/><g fill="none" stroke-linecap="round"><path d="M41.2 20.8A15 15 0 0 1 36.3 39.1" stroke="#1E140F" stroke-width="1.5"/><path d="M18.5 45.4A19.8 19.8 0 0 1 21.3 8.3" stroke="#4A3326" stroke-width="1.3"/><path d="M14.1 12A21.2 21.2 0 0 1 47.9 31.1" stroke="#6B4C38" stroke-width="1.1"/><path d="M21.1 7.8A21.4 21.4 0 0 1 41.4 10.4" stroke="#2E2019" stroke-width="1.2"/><path d="M36.2 6.2A23.3 23.3 0 0 1 51.2 25.6" stroke="#8A6A50" stroke-width="1.7"/><path d="M14.9 11.4A21.2 21.2 0 0 1 50.1 22.2" stroke="#1E140F" stroke-width="1.7"/><path d="M18.6 43.8A18.4 18.4 0 0 1 25.8 10.5" stroke="#4A3326" stroke-width="0.9"/><path d="M12.1 35.7A17.7 17.7 0 0 1 17.3 11.8" stroke="#6B4C38" stroke-width="1.3"/><path d="M43.5 13A21.6 21.6 0 0 1 48.2 32.5" stroke="#2E2019" stroke-width="1.3"/><path d="M10.8 37.3A19.6 19.6 0 0 1 12.5 13.5" stroke="#8A6A50" stroke-width="0.8"/><path d="M17.8 43.2A18.3 18.3 0 0 1 20.2 9.6" stroke="#1E140F" stroke-width="1.3"/><path d="M14.3 37.2A16.5 16.5 0 0 1 17.2 16.3" stroke="#4A3326" stroke-width="1.2"/><path d="M10.4 24.4A18 18 0 0 1 38.6 14.8" stroke="#6B4C38" stroke-width="1.7"/><path d="M40.5 13.5A19.1 19.1 0 0 1 34.5 46.5" stroke="#2E2019" stroke-width="1.3"/><path d="M20.7 9.9A19.5 19.5 0 0 1 42.4 40.6" stroke="#8A6A50" stroke-width="1.5"/><path d="M13.2 19A17.3 17.3 0 0 1 36.2 13.6" stroke="#1E140F" stroke-width="1.1"/><path d="M43.9 12.6A22.2 22.2 0 0 1 50.3 35.3" stroke="#4A3326" stroke-width="0.8"/><path d="M38.6 43.3A18.7 18.7 0 0 1 19.7 46.9" stroke="#6B4C38" stroke-width="0.9"/><path d="M40.8 44.3A20.7 20.7 0 0 1 9.4 37.8" stroke="#2E2019" stroke-width="0.9"/><path d="M45.4 12.5A23.3 23.3 0 0 1 21 51.8" stroke="#8A6A50" stroke-width="1.7"/><path d="M24.5 49.6A21.9 21.9 0 0 1 9.9 38.3" stroke="#1E140F" stroke-width="0.8"/><path d="M16.9 17.9A15 15 0 0 1 35.4 13.8" stroke="#4A3326" stroke-width="1.2"/><path d="M29.6 49.1A21.2 21.2 0 0 1 15.8 12" stroke="#6B4C38" stroke-width="1.1"/><path d="M45 43.6A23 23 0 0 1 10.5 39.6" stroke="#2E2019" stroke-width="1.7"/><path d="M46.3 18.3A20.7 20.7 0 0 1 48.4 37.2" stroke="#8A6A50" stroke-width="0.9"/><path d="M6.2 18.5A23.7 23.7 0 0 1 47.4 16" stroke="#1E140F" stroke-width="0.9"/><path d="M12.5 21.4A16.9 16.9 0 0 1 24.6 10.4" stroke="#4A3326" stroke-width="1.5"/><path d="M6.6 28.2A21.4 21.4 0 0 1 16 12.1" stroke="#6B4C38" stroke-width="1.7"/><path d="M21.8 13A16.2 16.2 0 0 1 39.6 36.4" stroke="#2E2019" stroke-width="1.7"/><path d="M50.7 27A22.8 22.8 0 0 1 6.9 39" stroke="#8A6A50" stroke-width="1.2"/><path d="M25.6 10.9A17.2 17.2 0 0 1 39 40.7" stroke="#1E140F" stroke-width="1"/><path d="M42.1 15.8A18.6 18.6 0 0 1 33.9 45" stroke="#4A3326" stroke-width="1.4"/><path d="M17 46.6A21.6 21.6 0 0 1 20.8 7.9" stroke="#6B4C38" stroke-width="0.9"/><path d="M45.7 26.4A17.8 17.8 0 0 1 11.5 36" stroke="#2E2019" stroke-width="1.7"/></g><circle cx="28" cy="28" r="14" fill="#E2B06C" stroke="#1E140F" stroke-width="1"/><path d="M18.5 24c3.7 2.9 8.2 3.1 13.2 1.5 2.8-.9 5.1-2.2 6.9-3.5" fill="none" stroke="#1F2A48" stroke-width="1.3" stroke-linecap="round"/><circle cx="23.2" cy="22.3" r="1.55" fill="#1F2A48"/><circle cx="25.8" cy="22.1" r="1.55" fill="#1F2A48"/><text x="28" y="34.6" text-anchor="middle" textLength="19" lengthAdjust="spacingAndGlyphs" font-family="Newsreader,Georgia,serif" font-weight="700" font-size="8" fill="#1F2A48">NiDO</text></svg>'}),
 drop:()=>({s:[40,52],a:[20,50],h:'<svg width="40" height="52" viewBox="0 0 40 52" style="filter:drop-shadow(0 3px 5px rgba(46,37,32,.45));overflow:visible"><path d="M20 50C20 50 3 30.5 3 19a17 17 0 0 1 34 0c0 11.5-17 31-17 31z" fill="#7E3A4C" stroke="#F6F0E6" stroke-width="2.5"/><text x="20" y="22.5" text-anchor="middle" font-family="Figtree,sans-serif" font-weight="600" font-size="8.5" letter-spacing="1.1" fill="#F6F0E6">NiDO</text></svg>'})};
function houseIcon(k){const d=(HOUSE_PINS[k]||HOUSE_PINS.disc)();return L.divIcon({className:'',iconSize:d.s,iconAnchor:d.a,html:d.h});}
function mount(el){
 if(el._hood)return el._hood;const LF=window.L;if(!LF||!el.offsetWidth)return null;
 const ids=(el.getAttribute('data-ids')||'').split(',').filter(Boolean);
 const m=LF.map(el,{scrollWheelZoom:el.hasAttribute('data-wheel'),zoomControl:!el.hasAttribute('data-nozoom'),attributionControl:true});
 const ES='https://server.arcgisonline.com/ArcGIS/rest/services/',ea='Tiles © Esri, Maxar, HERE, Garmin, © OpenStreetMap';
 const TL={street:()=>[LF.tileLayer(ES+'World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:ea})],
  osm:()=>[LF.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'})],
  sat:()=>[LF.tileLayer(ES+'World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:ea}),LF.tileLayer(ES+'Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}',{maxZoom:19}),LF.tileLayer(ES+'Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',{maxZoom:19})]};
 const tq=new URLSearchParams(location.search).get('tiles');const base={'Mapa':LF.layerGroup(TL[tq==='osm'?'osm':'street']()),'Satélite':LF.layerGroup(TL.sat())};
 (tq==='sat'?base['Satélite']:base['Mapa']).addTo(m);LF.control.layers(base,null,{position:'bottomright',collapsed:false}).addTo(m);
 const hm=LF.marker(HOUSE,{icon:houseIcon(),zIndexOffset:-500,keyboard:false,interactive:false}).addTo(m);
 const mk={};PLACES.filter(p=>!ids.length||ids.includes(p.id)).forEach(p=>{
  const k=LF.marker(pos(p),{icon:pin(p,false),title:typeof p.name==='string'?p.name:p.name.es}).addTo(m);
  k.on('click',()=>!h.edit&&h.cb.pick&&h.cb.pick(p.id));
  k.on('mouseover',()=>!h.edit&&h.cb.hover&&h.cb.hover(p.id));k.on('mouseout',()=>!h.edit&&h.cb.hover&&h.cb.hover(null));
  k.on('dragend',()=>{const ll=k.getLatLng(),o=over();o[p.id]=[+ll.lat.toFixed(6),+ll.lng.toFixed(6)];localStorage.setItem(KEY,JSON.stringify(o));h.cb.moved&&h.cb.moved(p.id);});
  mk[p.id]={k,p};});
 const h={m,mk,hm,house:'disc',cb:{},hl:null,filter:null,edit:false,fitKey:null};
 h.fit=(fids)=>{h.lastFit=fids;const pts=[HOUSE];Object.values(mk).forEach(({k,p})=>{if(!fids||fids.includes(p.id))pts.push(k.getLatLng());});
  m.fitBounds(LF.latLngBounds(pts),{padding:[+(el.getAttribute('data-pad')||48),+(el.getAttribute('data-pad')||48)],maxZoom:18,animate:h.fitKey!==null});};
 el._hood=h;setTimeout(()=>{m.invalidateSize();if(h.fitKey!==null)h.fit(h.lastFit);},120);return h;
}
function sync(root,o){if(!root||!window.L)return;
 root.querySelectorAll('[data-hood-map]').forEach(el=>{const h=mount(el);if(!h)return;
  h.cb=o;
  const hk=o.house||'disc';if(h.house!==hk){h.hm.setIcon(houseIcon(hk));h.house=hk;}
  if(!o.edit&&h.hl!==o.hl){Object.values(h.mk).forEach(({k,p})=>{const on=p.id===o.hl;k.setIcon(pin(p,on));k.setZIndexOffset(on?900:0);});h.hl=o.hl;}
  const f=o.filter||null;
  if(h.filter!==f){Object.values(h.mk).forEach(({k,p})=>{const vis=!f||p.cat===f;if(vis&&!h.m.hasLayer(k))k.addTo(h.m);if(!vis&&h.m.hasLayer(k))h.m.removeLayer(k);});h.filter=f;}
  if(h.edit!==!!o.edit){Object.values(h.mk).forEach(({k,p})=>{k.options.draggable=!!o.edit;if(o.edit){k.setIcon(pin(p,false));h.hl=null;k.bindTooltip(typeof p.name==='string'?p.name:p.name.es,{permanent:true,direction:'top',offset:[0,-14]}).openTooltip();}else k.unbindTooltip();k.dragging&&(o.edit?k.dragging.enable():k.dragging.disable());});h.edit=!!o.edit;}
  const fk=f||(el.getAttribute('data-fit')||'all');
  if(h.fitKey!==fk){const near=PLACES.filter(p=>{const q=pos(p);return Math.hypot((q[0]-HOUSE[0])*111000,(q[1]-HOUSE[1])*105000)<120;}).map(p=>p.id);
   h.fit(f?PLACES.filter(p=>p.cat===f).map(p=>p.id):(fk==='near'?near:null));h.fitKey=fk;}
  if(o.focus&&o.focus!==h.focused){const x=h.mk[o.focus];if(x)h.m.panTo(x.k.getLatLng(),{animate:true});h.focused=o.focus;}
 });}
function exportPins(){const o=over();return PLACES.map(p=>{const q=o[p.id]||[p.lat,p.lng];return p.id+': '+q[0]+', '+q[1]+(o[p.id]?'  (moved)':'');}).join('\n');}
window.NIDO_HOOD={HOUSE,HOUSE_PINS,CATS,PLACES,cat,pos,over,sync,exportPins,KEY,
 resetPins:()=>localStorage.removeItem(KEY),
 gmaps:p=>{const q=pos(p);if(p.dq)return 'https://www.google.com/maps/dir/?api=1&origin='+HOUSE.join(',')+'&destination='+encodeURIComponent(p.dq)+'&travelmode=walking';return 'https://www.google.com/maps/dir/?api=1&origin='+HOUSE.join(',')+'&destination='+q.join(',')+'&travelmode=walking';}};
})();
