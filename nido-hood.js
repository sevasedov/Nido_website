(function(){
const HOUSE=[18.9758,-99.0791];
const CATS=[
 {id:'cafe',icon:'ph-coffee',color:'#9A5236',es:'Cafés y comida',en:'Cafés & food',
  introEs:'Para el café de la mañana, un desayuno largo o una comida casera. Todo a unos pasos de la casa.',
  introEn:'For your morning coffee, a slow breakfast or a home-cooked meal. All a few steps from the house.'},
 {id:'shop',icon:'ph-shopping-bag',color:'#5F6B3C',es:'Tiendas',en:'Shops',
  introEs:'Lo de todos los días sin salir del barrio: queso, vino, fruta y farmacia.',
  introEn:'Everyday things without leaving the neighborhood: cheese, wine, fruit and a pharmacy.'},
 {id:'market',icon:'ph-basket',color:'#B07A2A',es:'Mercado',en:'Market',
  introEs:'Los domingos hay tianguis en Huilotepec: fruta, verdura, comida y de todo un poco.',
  introEn:'On Sundays there is a street market in Huilotepec: fruit, vegetables, food and a bit of everything.'},
 {id:'bus',icon:'ph-bus',color:'#3F5B6E',es:'Transporte',en:'Transport',
  introEs:'El transporte al centro pasa cada 5 minutos, y hay sitio de taxis muy cerca de la casa.',
  introEn:'Buses to downtown pass every 5 minutes, and there is a taxi stand very close to the house.'}
];
const PLACES=[
 {id:'jesse',gm:'https://maps.google.com/?cid=177120079507311439',photo:'assets/hood/jesse.jpg',cat:'cafe',name:'Jesse',lat:18.974978,lng:-99.078602,
  hours:{es:'Cerrado los miércoles',en:'Closed on Wednesdays'},
  d:{es:'Café de especialidad y panadería. El mejor del pueblo.',en:'Specialty coffee and bakery. The best in town.'},
  tip:{es:'Nuestro favorito para el café y el pan de la mañana.',en:'Our favorite for morning coffee and bread.'}},
 {id:'rustique',gm:'https://maps.google.com/?cid=17935508604780592279',photo:'assets/hood/rustique.jpg',cat:'cafe',name:'Rustique',lat:18.97861,lng:-99.080511,
  hours:{es:'Mié–Dom · 8:00–13:00',en:'Wed–Sun · 8am–1pm'},
  d:{es:'Café y desayunos.',en:'Coffee and breakfast.'},
  tip:{es:'Buen lugar para un desayuno sin prisa.',en:'A good spot for an unhurried breakfast.'}},
 {id:'juquilita',gm:'https://maps.google.com/?cid=10148654891002315674',icon:'ph-fork-knife',photo:'assets/hood/juquilita.jpg',cat:'cafe',name:'Mi Juquilita',lat:18.9751,lng:-99.078811,
  d:{es:'Restaurante de comida casera.',en:'Home-style cooking.'},
  tip:{es:'Para cuando no tienes ganas de cocinar.',en:'For days you don\u2019t feel like cooking.'}},
 {id:'cecina',gm:'https://maps.google.com/?cid=6140905709014085877',photo:'assets/hood/cecina.jpg',cat:'cafe',name:'Cecina Don Armando',lat:18.975475,lng:-99.078977,
  hours:{es:'Solo sábado y domingo',en:'Saturday & Sunday only'},
  d:{es:'Cecina, solo los fines de semana.',en:'Cecina, weekends only.'},
  tip:{es:'Un clásico de fin de semana en el barrio.',en:'A neighborhood weekend classic.'}},
 {id:'tepozcafe',gm:'https://maps.google.com/?cid=14103321865181327121',photo:'assets/hood/tepozcafe.jpg',cat:'cafe',name:'Tepoz Café',lat:18.974534,lng:-99.077671,
  d:{es:'Cafetería y panadería orgánica.',en:'Organic café and bakery.'}},
 {id:'foodcourt',icon:'ph-fork-knife',cat:'cafe',name:{es:'Food court',en:'Food court'},lat:18.978514,lng:-99.080291,
  d:{es:'Varios puestos de comida en un solo lugar.',en:'Several food stalls in one place.'}},
 {id:'casaazul',gm:'https://maps.google.com/?cid=6007623657552606054',photo:'assets/hood/casaazul.jpg',cat:'shop',name:'Casa Azul',lat:18.975348,lng:-99.079235,
  hours:{es:'Todos los días · 11:00–20:00',en:'Every day · 11am–8pm'},
  d:{es:'Quesos y salchichonería.',en:'Cheese and deli shop.'}},
 {id:'catalana',gm:'https://maps.google.com/?cid=11145089216052943355',photo:'assets/hood/catalana.jpg',cat:'shop',name:'Catalana',lat:18.975013,lng:-99.07821,
  hours:{es:'Todos los días · 11:00–20:00',en:'Every day · 11am–8pm'},
  d:{es:'Tienda de vinos.',en:'Wine shop.'}},
 {id:'frutas',gm:'https://maps.google.com/?cid=3990295852471620605',cat:'shop',name:'Frutas y verduras',lat:18.975242,lng:-99.079052,
  d:{es:'Fruta y verdura fresca.',en:'Fresh fruit and vegetables.'}},
 {id:'farmacia',gm:'https://maps.google.com/?cid=6042971864246921295',photo:'assets/hood/farmacia.jpg',cat:'shop',name:'Farmacias Similares',lat:18.974623,lng:-99.078081,
  d:{es:'Farmacia.',en:'Pharmacy.'}},
 {id:'tianguis',cat:'market',name:'Tianguis de Huilotepec',lat:18.973776,lng:-99.076853,
  hours:{es:'Domingos',en:'Sundays'},
  d:{es:'Mercado de los domingos.',en:'Sunday market.'}},
 {id:'taxi',icon:'ph-taxi',cat:'bus',name:{es:'Sitio de taxis',en:'Taxi stand'},lat:18.974468,lng:-99.07769,
  d:{es:'Taxis al centro y alrededores.',en:'Taxis to downtown and around.'}},
 {id:'bus',cat:'bus',name:{es:'Parada al centro',en:'Bus to downtown'},lat:18.975632,lng:-99.079318,
  hours:{es:'Cada 5 min',en:'Every 5 min'},
  d:{es:'Ruta al centro de Tepoztlán.',en:'Route to downtown Tepoztlán.'}}
];
const KEY='nido-hood-pins-v1';
const over=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
const pos=p=>over()[p.id]||[p.lat,p.lng];
const cat=id=>CATS.find(c=>c.id===id);
function pin(p,on){const c=cat(p.cat),s=on?44:32;
 return L.divIcon({className:'',iconSize:[s,s],iconAnchor:[s/2,s/2],
  html:'<div style="width:'+s+'px;height:'+s+'px;border-radius:50%;background:'+c.color+';border:2.5px solid #F6F0E6;box-shadow:0 2px 8px rgba(46,37,32,.35);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font-size:'+(on?22:16)+'px;transition:all .15s"><i class="ph-bold '+(p.icon||c.icon)+'"></i></div>'});}
function houseIcon(){return L.divIcon({className:'',iconSize:[40,40],iconAnchor:[20,20],
 html:'<div style="width:40px;height:40px;border-radius:50%;background:#7E3A4C;border:3px solid #F6F0E6;box-shadow:0 3px 12px rgba(46,37,32,.4);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font:500 9px/1 Figtree,sans-serif;letter-spacing:.14em">NiDO</div>'});}
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
 LF.marker(HOUSE,{icon:houseIcon(),zIndexOffset:-500,keyboard:false,interactive:false}).addTo(m);
 const mk={};PLACES.filter(p=>!ids.length||ids.includes(p.id)).forEach(p=>{
  const k=LF.marker(pos(p),{icon:pin(p,false),title:typeof p.name==='string'?p.name:p.name.es}).addTo(m);
  k.on('click',()=>!h.edit&&h.cb.pick&&h.cb.pick(p.id));
  k.on('mouseover',()=>!h.edit&&h.cb.hover&&h.cb.hover(p.id));k.on('mouseout',()=>!h.edit&&h.cb.hover&&h.cb.hover(null));
  k.on('dragend',()=>{const ll=k.getLatLng(),o=over();o[p.id]=[+ll.lat.toFixed(6),+ll.lng.toFixed(6)];localStorage.setItem(KEY,JSON.stringify(o));h.cb.moved&&h.cb.moved(p.id);});
  mk[p.id]={k,p};});
 const h={m,mk,cb:{},hl:null,filter:null,edit:false,fitKey:null};
 h.fit=(fids)=>{h.lastFit=fids;const pts=[HOUSE];Object.values(mk).forEach(({k,p})=>{if(!fids||fids.includes(p.id))pts.push(k.getLatLng());});
  m.fitBounds(LF.latLngBounds(pts),{padding:[+(el.getAttribute('data-pad')||48),+(el.getAttribute('data-pad')||48)],maxZoom:18,animate:h.fitKey!==null});};
 el._hood=h;setTimeout(()=>{m.invalidateSize();if(h.fitKey!==null)h.fit(h.lastFit);},120);return h;
}
function sync(root,o){if(!root||!window.L)return;
 root.querySelectorAll('[data-hood-map]').forEach(el=>{const h=mount(el);if(!h)return;
  h.cb=o;
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
window.NIDO_HOOD={HOUSE,CATS,PLACES,cat,pos,over,sync,exportPins,KEY,
 resetPins:()=>localStorage.removeItem(KEY),
 gmaps:p=>{if(p.gm)return p.gm;const q=pos(p);return 'https://www.google.com/maps/dir/?api=1&origin='+HOUSE.join(',')+'&destination='+q.join(',')+'&travelmode=walking';}};
})();
