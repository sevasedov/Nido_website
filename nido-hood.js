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
  introEs:'El transporte al centro pasa cada 5 minutos, muy cerca de la casa.',
  introEn:'Buses to downtown pass every 5 minutes, very close to the house.'},
 {id:'trail',icon:'ph-mountains',color:'#4E6A4C',es:'Senderos',en:'Trails',
  introEs:'Ixcatepec está al pie de los cerros. Estos senderos empiezan cerca de la casa.',
  introEn:'Ixcatepec sits at the foot of the hills. These trails start close to the house.'}
];
const AT='https://www.alltrails.com/';
const PLACES=[
 {id:'jesse',cat:'cafe',name:'Jesse',lat:18.9768,lng:-99.0800,
  d:{es:'Café de especialidad y panadería. El mejor del pueblo.',en:'Specialty coffee and bakery. The best in town.'},
  tip:{es:'Nuestro favorito para el café y el pan de la mañana.',en:'Our favorite for morning coffee and bread.'}},
 {id:'rustique',cat:'cafe',name:'Rustique',lat:18.9752,lng:-99.0803,
  hours:{es:'Mié–Dom · 8:00–13:00',en:'Wed–Sun · 8am–1pm'},
  d:{es:'Café y desayunos.',en:'Coffee and breakfast.'},
  tip:{es:'Buen lugar para un desayuno sin prisa.',en:'A good spot for an unhurried breakfast.'}},
 {id:'juquilita',cat:'cafe',name:'Mi Juquilita',lat:18.9762,lng:-99.0784,
  d:{es:'Restaurante de comida casera.',en:'Home-style cooking.'},
  tip:{es:'Para cuando no tienes ganas de cocinar.',en:'For days you don\u2019t feel like cooking.'}},
 {id:'cecina',cat:'cafe',name:'Cecina Don Armando',lat:18.9748,lng:-99.0787,
  hours:{es:'Solo sábado y domingo',en:'Saturday & Sunday only'},
  d:{es:'Cecina, solo los fines de semana.',en:'Cecina, weekends only.'},
  tip:{es:'Un clásico de fin de semana en el barrio.',en:'A neighborhood weekend classic.'}},
 {id:'casaazul',cat:'shop',name:'Casa Azul',lat:18.9765,lng:-99.0794,
  d:{es:'Quesos y salchichonería.',en:'Cheese and deli shop.'}},
 {id:'catalana',cat:'shop',name:'Catalana',lat:18.9771,lng:-99.0789,
  d:{es:'Tienda de vinos.',en:'Wine shop.'}},
 {id:'frutas',cat:'shop',name:'Frutas y verduras',lat:18.9755,lng:-99.0797,
  d:{es:'Fruta y verdura fresca.',en:'Fresh fruit and vegetables.'}},
 {id:'farmacia',cat:'shop',name:'Farmacias Similares',lat:18.9773,lng:-99.0807,
  d:{es:'Farmacia.',en:'Pharmacy.'}},
 {id:'tianguis',cat:'market',name:'Tianguis de Huilotepec',lat:18.9832,lng:-99.0868,
  hours:{es:'Domingos',en:'Sundays'},
  d:{es:'Mercado de los domingos.',en:'Sunday market.'}},
 {id:'bus',cat:'bus',name:{es:'Parada al centro',en:'Bus to downtown'},lat:18.9761,lng:-99.0806,
  hours:{es:'Cada 5 min',en:'Every 5 min'},
  d:{es:'Ruta al centro de Tepoztlán.',en:'Route to downtown Tepoztlán.'}},
 {id:'crucero',cat:'trail',name:'Cerro Crucero Ixcatepec',lat:18.9712,lng:-99.0762,
  hours:{es:'2.6 km · circuito · ~1 h',en:'2.6 km · loop · ~1 h'},
  d:{es:'Subida corta a un cerro con vista a todo el valle de Tepoztlán.',en:'A short climb to a hilltop with views over the whole Tepoztlán valley.'},
  link:AT+'trail/mexico/morelos/cerro-youalinchan-cerro-crucero-ixcatepec'},
 {id:'chalchi',cat:'trail',name:'Chalchitepetl',lat:18.9737,lng:-99.0852,
  hours:{es:'Corto y empinado',en:'Short and steep'},
  d:{es:'Sube desde una calle del pueblo a la cima del Chalchi.',en:'Climbs from a town street to the top of the Chalchi.'},
  link:AT+'mexico/morelos/tepoztlan'},
 {id:'tepozteco',cat:'trail',name:'El Tepozteco',lat:18.9925,lng:-99.0980,
  hours:{es:'3 km ida y vuelta · ~1 h 40',en:'3 km out & back · ~1 h 40'},
  d:{es:'El sendero clásico a la pirámide en la cima del cerro.',en:'The classic trail to the pyramid on top of the hill.'},
  link:AT+'trail/mexico/morelos/tepozteco'}
];
const KEY='nido-hood-pins-v1';
const over=()=>{try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}};
const pos=p=>over()[p.id]||[p.lat,p.lng];
const cat=id=>CATS.find(c=>c.id===id);
function pin(p,on){const c=cat(p.cat),s=on?44:32;
 return L.divIcon({className:'',iconSize:[s,s],iconAnchor:[s/2,s/2],
  html:'<div style="width:'+s+'px;height:'+s+'px;border-radius:50%;background:'+c.color+';border:2.5px solid #F6F0E6;box-shadow:0 2px 8px rgba(46,37,32,.35);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font-size:'+(on?22:16)+'px;transition:all .15s"><i class="ph-bold '+c.icon+'"></i></div>'});}
function houseIcon(){return L.divIcon({className:'',iconSize:[52,52],iconAnchor:[26,26],
 html:'<div style="width:52px;height:52px;border-radius:50%;background:#7E3A4C;border:3px solid #F6F0E6;box-shadow:0 3px 12px rgba(46,37,32,.4);display:flex;align-items:center;justify-content:center;color:#F6F0E6;font:500 11px/1 Figtree,sans-serif;letter-spacing:.14em">NiDO</div>'});}
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
 LF.marker(HOUSE,{icon:houseIcon(),zIndexOffset:1000,keyboard:false}).addTo(m);
 const mk={};PLACES.filter(p=>!ids.length||ids.includes(p.id)).forEach(p=>{
  const k=LF.marker(pos(p),{icon:pin(p,false),title:typeof p.name==='string'?p.name:p.name.es}).addTo(m);
  k.on('click',()=>!h.edit&&h.cb.pick&&h.cb.pick(p.id));
  k.on('mouseover',()=>!h.edit&&h.cb.hover&&h.cb.hover(p.id));k.on('mouseout',()=>!h.edit&&h.cb.hover&&h.cb.hover(null));
  k.on('dragend',()=>{const ll=k.getLatLng(),o=over();o[p.id]=[+ll.lat.toFixed(6),+ll.lng.toFixed(6)];localStorage.setItem(KEY,JSON.stringify(o));h.cb.moved&&h.cb.moved(p.id);});
  mk[p.id]={k,p};});
 const h={m,mk,cb:{},hl:null,filter:null,edit:false,fitKey:null};
 h.fit=(fids)=>{const pts=[HOUSE];Object.values(mk).forEach(({k,p})=>{if(!fids||fids.includes(p.id))pts.push(k.getLatLng());});
  m.fitBounds(LF.latLngBounds(pts),{padding:[+(el.getAttribute('data-pad')||48),+(el.getAttribute('data-pad')||48)],maxZoom:18,animate:h.fitKey!==null});};
 el._hood=h;setTimeout(()=>m.invalidateSize(),50);return h;
}
function sync(root,o){if(!root||!window.L)return;
 root.querySelectorAll('[data-hood-map]').forEach(el=>{const h=mount(el);if(!h)return;
  h.cb=o;
  if(!o.edit&&h.hl!==o.hl){Object.values(h.mk).forEach(({k,p})=>{const on=p.id===o.hl;k.setIcon(pin(p,on));k.setZIndexOffset(on?900:0);});h.hl=o.hl;}
  const f=o.filter||null;
  if(h.filter!==f){Object.values(h.mk).forEach(({k,p})=>{const vis=!f||p.cat===f;if(vis&&!h.m.hasLayer(k))k.addTo(h.m);if(!vis&&h.m.hasLayer(k))h.m.removeLayer(k);});h.filter=f;}
  if(h.edit!==!!o.edit){Object.values(h.mk).forEach(({k,p})=>{k.options.draggable=!!o.edit;if(o.edit){k.setIcon(pin(p,false));h.hl=null;k.bindTooltip(typeof p.name==='string'?p.name:p.name.es,{permanent:true,direction:'top',offset:[0,-14]}).openTooltip();}else k.unbindTooltip();k.dragging&&(o.edit?k.dragging.enable():k.dragging.disable());});h.edit=!!o.edit;}
  const fk=f||(el.getAttribute('data-fit')||'all');
  if(h.fitKey!==fk){const near=PLACES.filter(p=>p.cat!=='trail'&&p.cat!=='market').map(p=>p.id);
   h.fit(f?PLACES.filter(p=>p.cat===f).map(p=>p.id):(fk==='near'?near:null));h.fitKey=fk;}
  if(o.focus&&o.focus!==h.focused){const x=h.mk[o.focus];if(x)h.m.panTo(x.k.getLatLng(),{animate:true});h.focused=o.focus;}
 });}
function exportPins(){const o=over();return PLACES.map(p=>{const q=o[p.id]||[p.lat,p.lng];return p.id+': '+q[0]+', '+q[1]+(o[p.id]?'  (moved)':'');}).join('\n');}
window.NIDO_HOOD={HOUSE,CATS,PLACES,cat,pos,over,sync,exportPins,KEY,
 resetPins:()=>localStorage.removeItem(KEY),
 gmaps:p=>{const q=pos(p);return 'https://www.google.com/maps/dir/?api=1&origin='+HOUSE.join(',')+'&destination='+q.join(',')+'&travelmode=walking';}};
})();
