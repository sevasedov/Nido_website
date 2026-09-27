(function(){
const IMG=(id,f)=>'assets/airbnb/'+f.slice(0,8)+'.jpg';
const R=[
 {slug:'ave-suave',name:'Ave Suave',id:'1465439964539140509',shared:true,rating:'4.19',reviews:16,fav:false,color:'#F2B48C',
  files:['f5a8c2b0-5ae7-4dcc-ab40-b392d56b8dd1','0e14a8cf-e1c3-494e-a07f-6e0f23e237b9','d3eab93e-6646-48e8-8b2c-629d02a5c458','106767c9-0e66-4dc2-92f1-5d0fa3ff5aab','58dd724a-00b2-42db-910b-8ccd914e314b'],
  es:'Muros color terracota, cabecera tallada a mano, lámparas de fibra natural y una ventana en arco que llena el cuarto de luz de tarde. Baño compartido: la opción más ligera del nido para estancias largas.',
  en:'Terracotta walls, a hand-carved headboard, natural-fiber lamps and an arched window that fills the room with afternoon light. Shared bathroom: the lightest option in the nest for long stays.'},
 {slug:'crazy-parrot',name:'Loro Loco',id:'1213102735793671313',shared:false,rating:'4.76',reviews:21,fav:false,color:'#8CC084',
  files:['2a0d70c1-c416-4322-bb3a-f251af694ebc','a4a5f6f6-032d-4093-bdb1-bba8244cd069','f064c9bc-c102-4d05-bbfd-20a7f5f64611','c1f57260-43be-4a35-8042-21c542d6b28e','a2d29c0e-5ed4-4cd5-906a-fcc6979f1de8'],
  es:'Paredes verde salvia, techo de vigas de madera y una cabecera de girasoles tallados. Escritorio, clóset abierto y baño privado. Para quienes llegan un fin de semana y se quedan un mes.',
  en:'Sage-green walls, a wooden-beam ceiling and a headboard of carved sunflowers. A desk, open wardrobe and private bathroom. For those who come for a weekend and stay a month.'},
 {slug:'blue-clover',name:'Trébol Azul',id:'1215616658194328045',shared:false,rating:'4.68',reviews:22,fav:false,color:'#8FB3E0',
  files:['0ff99f3d-a196-45d0-8ce5-14f85f495826','4fa529a4-b752-4dd6-aaa4-a57d98ff46d3','38bae3c5-f606-4005-afe0-f03d1289dddd','e39c323d-4e7f-47c0-bbc1-eacc418b18ea','297867a5-e633-4b2d-a125-cb1d65664aef'],
  es:'Muros profundos, una cabecera de hojas tropicales pintada a mano, cortinas rojas y plantas colgantes. Baño privado y un ambiente sereno para dormir bien y trabajar sin prisa.',
  en:'Deep-toned walls, a hand-painted tropical-leaf headboard, red curtains and trailing plants. Private bathroom and a calm mood to sleep well and work at your pace.'},
 {slug:'momo-toh',name:'Momo Toh',id:'1599502220194110114',shared:false,rating:'5.0',reviews:7,fav:true,color:'#E8A0B4',
  files:['c915810f-5e66-4afe-afc9-0aa8fce709b1','d1abb17f-bb9b-4a3a-baf8-7abc1a337da3','d22ef9a5-63c8-4f67-aa5a-238bf8e03565','77bfe98d-5768-41f8-abc9-39dd6f8a3a6f','85f76844-69a1-4924-94fd-d10187535685'],
  es:'La favorita de los huéspedes, con 5.0 en todas sus reseñas. Techo de vigas, detalles tejidos a mano, ventanales con luz natural y baño privado.',
  en:'The guest favorite, rated 5.0 in every review. Beamed ceiling, hand-woven details, large windows with natural light and a private bathroom.'}
];
R.forEach(r=>{r.photos=r.files.map(f=>IMG(r.id,f+'.jpeg'));r.thumbs=r.files.map(f=>IMG(r.id,f+'.jpeg',720));});
const A=n=>'assets/'+n+'.jpg';
['momo-bed1','momo-bed2','momo-bed3','momo-bath1'].forEach(n=>{R[3].photos.push(A(n));R[3].thumbs.push(A(n));});
const NATURE={hero:[A('view-roof'),A('garden-path')],garden:[A('garden-path'),A('door'),A('flower-orange'),A('papaya'),A('pomegranate'),A('flower-yellow'),A('flower-pink'),A('leaves')],views:[A('view-roof'),A('view-hills'),A('view-cliff'),A('view-range'),A('view-rock')],details:[A('sun-lamp'),A('lamp-wall'),A('chandelier')]};
const PRICE=600,WK=0.20,MO=0.55,WA='529983196367',EMAIL='nidotepoztlan@gmail.com',GMAPS='https://www.google.com/maps/place/NiDO/@18.9757952,-99.0791189,18z/data=!4m6!3m5!1s0x85ce0d001659fb6f:0xac0e11039e079134!8m2!3d18.9757952!4d-99.0791189!16s%2Fg%2F11w35dp7fk';
const fmt=n=>'$'+Math.round(n).toLocaleString('es-MX');
const L={
es:{nav:{location:'Ubicación',rooms:'Habitaciones',house:'La casa',life:'Coliving',work:'Trabajo remoto',guide:'Tepoztlán',faq:'Preguntas',book:'Reservar'},
 checkin:'Llegada',checkout:'Salida',room:'Habitación',anyRoom:'Cualquier habitación',nights:'noches',night:'noche',perNight:'/ noche',
 nightly:'Por noche',weekly:'Por semana',monthly:'Por mes',weekNote:'−20% semanal',monthNote:'−55% mensual',
 discount:'descuento',total:'Total',sendWa:'Reservar por WhatsApp',askWa:'Escríbenos por WhatsApp',back:'Todas las habitaciones',
 viewRoom:'Ver habitación',soon:'Próximamente',room5:'Habitación 5',reviews:'reseñas',favorite:'Favorita de huéspedes',
 sharedBath:'Baño compartido',privateBath:'Baño privado',doubleBed:'Cama matrimonial',otherRooms:'Otras habitaciones',
 amenities:'Qué incluye',pickDates:'Elige fechas para ver el precio exacto',rulesNote:'Fines de semana bienvenidos · −20% semanal · −55% mensual',
 youSave:'Ahorras',lang:'EN',langName:'English',follow:'Síguenos en Instagram',rights:'Tepoztlán, Morelos, México',
 guests:'huéspedes',hosts:'Anfitriones',respond:'Respondemos en menos de 1 hora'},
en:{nav:{location:'Location',rooms:'Rooms',house:'The house',life:'Coliving',work:'Remote work',guide:'Tepoztlán',faq:'FAQ',book:'Book'},
 checkin:'Check-in',checkout:'Check-out',room:'Room',anyRoom:'Any room',nights:'nights',night:'night',perNight:'/ night',
 nightly:'Per night',weekly:'Per week',monthly:'Per month',weekNote:'−20% weekly',monthNote:'−55% monthly',
 discount:'off',total:'Total',sendWa:'Book on WhatsApp',askWa:'Message us on WhatsApp',back:'All rooms',
 viewRoom:'View room',soon:'Coming soon',room5:'Room 5',reviews:'reviews',favorite:'Guest favorite',
 sharedBath:'Shared bathroom',privateBath:'Private bathroom',doubleBed:'Double bed',otherRooms:'Other rooms',
 amenities:'What\u2019s included',pickDates:'Pick dates to see the exact price',rulesNote:'Weekends welcome · −20% weekly · −55% monthly',
 youSave:'You save',lang:'ES',langName:'Español',follow:'Follow us on Instagram',rights:'Tepoztlán, Morelos, Mexico',
 guests:'guests',hosts:'Hosts',respond:'We reply in under 1 hour'}
};
const C={
es:{
 tagline:'Un lugar para pájaros extraños',
 houseText:'En este nido colorido puedes sentirte en casa, aunque estés lejos. Una casa fresca en Ixcatepec, Tepoztlán, con un área al aire libre llena de plantas y flores. Cinco habitaciones, cada una con detalles únicos.',
 hood:'El barrio es céntrico pero tranquilo, lejos del ruido del centro, con tiendas, comida y senderos a unos pasos.',
 spaces:[{k:'Cocina',d:'Compartida y llena de luz natural'},{k:'Dos salas',d:'Para trabajar o descansar fuera de tu cuarto'},{k:'Jardín',d:'Un pequeño oasis de plantas, flores y árboles'},{k:'Vista a la montaña',d:'Los cerros de Tepoztlán desde la casa'}],
 amen:['Wifi','Espacio de trabajo','Cocina compartida','Jardín','Vista a la montaña','Cerradura en tu puerta','Check-in autónomo','Dos salas comunes'],
 life:[{k:'Estancias largas',d:'Pensado para quedarte una semana, un mes o más. Los fines de semana también son bienvenidos.'},{k:'Gente curiosa',d:'Viajeros, creativos y nómadas que comparten cocina, jardín y conversación.'},{k:'Tu propio espacio',d:'Habitación privada con cerradura. Comunidad cuando quieres, silencio cuando lo necesitas.'}],
 work:[{k:'Wifi en toda la casa',d:'Conexión para videollamadas y trabajo remoto.'},{k:'Espacios de trabajo',d:'Escritorio dedicado y áreas comunes cómodas para concentrarte.'},{k:'Tarifa mensual',d:'55% de descuento en estancias de un mes.'}],
 guide:[{k:'Pirámide del Tepozteco',t:'Caminata',d:'Sube el cerro hasta el templo dedicado a Tepoztécatl. Llega temprano, la vista del valle lo vale.'},{k:'Mercado de Tepoztlán',t:'Comida',d:'Quesadillas de flor de calabaza, tlacoyos y artesanías. Más vivo los fines de semana.'},{k:'Ex Convento de la Natividad',t:'Cultura',d:'Monasterio del siglo XVI, Patrimonio de la Humanidad por la UNESCO, en el corazón del pueblo.'},{k:'Temazcal',t:'Bienestar',d:'Baño de vapor prehispánico. Hay varias opciones tradicionales alrededor del pueblo.'},{k:'Tepoznieves',t:'Antojo',d:'Nieves artesanales con sabores imposibles. Una parada obligada después de caminar.'},{k:'Amatlán y Valle de Atongo',t:'Naturaleza',d:'Senderos, cascadas en temporada de lluvias y paisajes de los cerros de Tepoztlán.'}],
 guideIntro:'Pueblo Mágico a los pies de la Sierra del Tepozteco. Montañas, mercado, temazcales y una energía que hace que la gente se quede más tiempo del planeado.',
 getHere:[{k:'En auto',d:'Aprox. 80 km desde la Ciudad de México, 1 h 15 min por la autopista México–Cuernavaca y la desviación a Tepoztlán.'},{k:'En autobús',d:'Salidas frecuentes desde la Terminal Sur (Taxqueña) directo a Tepoztlán. Desde la caseta, taxi corto a la casa.'}],
 faq:[{q:'¿Puedo reservar solo un fin de semana?',a:'Sí. Nos encantan las estancias de una semana o más, pero aceptamos reservas de fin de semana.'},{q:'¿Cómo funcionan los descuentos?',a:'La tarifa es de $600 MXN por noche. A partir de 7 noches tienes 20% de descuento y a partir de 28 noches, 55%.'},{q:'¿Cómo reservo?',a:'Elige tus fechas y habitación y escríbenos por WhatsApp. Confirmamos disponibilidad en menos de una hora.'},{q:'¿Las habitaciones tienen baño privado?',a:'Loro Loco, Trébol Azul y Momo Toh tienen baño privado. Ave Suave comparte baño.'},{q:'¿Puedo trabajar en remoto?',a:'Sí. Hay wifi, un espacio de trabajo dedicado y dos salas comunes.'},{q:'¿Cómo es el check-in?',a:'Autónomo, con caja de seguridad. Llegas a la hora que te acomode.'},{q:'¿Puedo cocinar?',a:'Sí, la cocina es compartida y está equipada para estancias largas.'},{q:'¿Qué idiomas hablan?',a:'Español, inglés y ruso.'}],
 reviewsIntro:'4.8 de promedio en 66 reseñas.',
 commons:[{id:'kitchen',icon:'ph-cooking-pot',k:'La cocina',d:'Compartida, equipada y llena de luz natural. El lugar donde se cruzan los horarios, los cafés de la mañana y las cenas improvisadas.'},{id:'living',icon:'ph-couch',k:'Dos salas',d:'Espacios cómodos para leer, trabajar o platicar fuera de tu habitación.'},{id:'garden',icon:'ph-plant',k:'El jardín',d:'Un pequeño oasis de plantas, flores y árboles con vista a los cerros. Perfecto para una tarde fresca.'},{id:'work',icon:'ph-desk',k:'Rincones de trabajo',d:'Mesas y escritorios con wifi para tus horas de laptop.'}],
 amenIcons:[{i:'ph-wifi-high',k:'Wifi en toda la casa'},{i:'ph-desk',k:'Espacio de trabajo'},{i:'ph-cooking-pot',k:'Cocina compartida'},{i:'ph-plant',k:'Jardín'},{i:'ph-mountains',k:'Vista a la montaña'},{i:'ph-couch',k:'Dos salas comunes'},{i:'ph-lock-key',k:'Cerradura en tu puerta'},{i:'ph-key',k:'Check-in autónomo'},{i:'ph-translate',k:'Español, inglés y ruso'},{i:'ph-chat-circle-dots',k:'Respuesta en < 1 hora'},{i:'ph-calendar-check',k:'Estancias largas y fines de semana'},{i:'ph-bird',k:'Cinco habitaciones únicas'}],
 loc:{title:'Bien ubicado, sin necesidad de auto',text:'Nido está en Ixcatepec, un barrio tranquilo de Tepoztlán lejos del ruido del centro. Tienes tiendas, cafés y fondas a unos pasos, y el transporte público pasa cerca. Ideal para estancias largas sin auto propio.',note:'Calle Progreso 1B, Ixcatepec, 62525 Tepoztlán, Morelos'},
 transit:[{i:'ph-bus',v:'10 min',k:'al centro en transporte público'},{i:'ph-person-simple-walk',v:'35 min',k:'caminando al centro'},{i:'ph-car-simple',v:'1 h 15',k:'desde la Ciudad de México'}],
 nearby:[{i:'ph-storefront',k:'Tiendas y abarrotes',d:'Lo básico del día a día a pocos pasos de la casa.'},{i:'ph-coffee',k:'Cafés y panaderías',d:'Para el café de la mañana o una tarde de laptop.'},{i:'ph-basket',k:'Fruterías y mercado',d:'Fruta, verdura y productos locales frescos.'},{i:'ph-path',k:'Senderos',d:'Caminos para caminar y correr que salen del barrio.'},{i:'ph-bus',k:'Transporte público',d:'Combis frecuentes hacia el centro de Tepoztlán.'}]
},
en:{
 tagline:'A place for strange birds',
 houseText:'In this colorful nest you can feel at home, even when you\u2019re away. A fresh house in Ixcatepec, Tepoztlán, with an open-air area full of plants and flowers. Five bedrooms, each with unique details.',
 hood:'The neighborhood is central yet calm, away from the noise of downtown, with shops, food and walking paths steps away.',
 spaces:[{k:'Kitchen',d:'Shared and full of natural light'},{k:'Two living rooms',d:'To work or chill outside your room'},{k:'Garden',d:'A little oasis of plants, flowers and trees'},{k:'Mountain views',d:'The Tepoztlán hills from the house'}],
 amen:['Wifi','Dedicated workspace','Shared kitchen','Garden','Mountain view','Lock on your door','Self check-in','Two living rooms'],
 life:[{k:'Long stays',d:'Made for staying a week, a month or more. Weekends are welcome too.'},{k:'Curious people',d:'Travelers, creatives and nomads sharing a kitchen, a garden and conversation.'},{k:'Your own space',d:'A private room with a lock. Community when you want it, quiet when you need it.'}],
 work:[{k:'Wifi throughout',d:'A connection for video calls and remote work.'},{k:'Workspaces',d:'A dedicated desk and comfortable common areas to focus.'},{k:'Monthly rate',d:'55% off stays of a month.'}],
 guide:[{k:'Tepozteco Pyramid',t:'Hike',d:'Climb the mountain to the temple of Tepoztécatl. Go early; the view over the valley is worth it.'},{k:'Tepoztlán Market',t:'Food',d:'Squash-blossom quesadillas, tlacoyos and crafts. Busiest on weekends.'},{k:'Ex-Convent of the Nativity',t:'Culture',d:'A 16th-century monastery and UNESCO World Heritage Site in the heart of town.'},{k:'Temazcal',t:'Wellness',d:'A pre-Hispanic steam bath. Several traditional options around town.'},{k:'Tepoznieves',t:'Treat',d:'Handmade ice cream in unlikely flavors. A must after a hike.'},{k:'Amatlán & Atongo Valley',t:'Nature',d:'Trails, rainy-season waterfalls and views of the Tepoztlán hills.'}],
 guideIntro:'A Pueblo Mágico at the foot of the Tepozteco mountains. Hills, a market, temazcales and an energy that makes people stay longer than planned.',
 getHere:[{k:'By car',d:'About 80 km from Mexico City, 1 h 15 min via the México–Cuernavaca highway and the Tepoztlán turnoff.'},{k:'By bus',d:'Frequent departures from Terminal Sur (Taxqueña) straight to Tepoztlán. From the stop, a short taxi to the house.'}],
 faq:[{q:'Can I book just a weekend?',a:'Yes. We love stays of a week or more, but weekend bookings are welcome.'},{q:'How do discounts work?',a:'The rate is $600 MXN per night. From 7 nights you get 20% off, and from 28 nights, 55% off.'},{q:'How do I book?',a:'Pick your dates and room and message us on WhatsApp. We confirm availability in under an hour.'},{q:'Do rooms have a private bathroom?',a:'Loro Loco, Trébol Azul and Momo Toh have private bathrooms. Ave Suave has a shared bathroom.'},{q:'Can I work remotely?',a:'Yes. There\u2019s wifi, a dedicated workspace and two common living rooms.'},{q:'How does check-in work?',a:'Self check-in with a lockbox. Arrive whenever suits you.'},{q:'Can I cook?',a:'Yes, the kitchen is shared and set up for long stays.'},{q:'What languages do you speak?',a:'Spanish, English and Russian.'}],
 reviewsIntro:'4.8 average across 66 reviews.',
 commons:[{id:'kitchen',icon:'ph-cooking-pot',k:'The kitchen',d:'Shared, fully equipped and full of natural light. Where schedules cross, morning coffees happen and dinners get improvised.'},{id:'living',icon:'ph-couch',k:'Two living rooms',d:'Comfortable spaces to read, work or chat outside your room.'},{id:'garden',icon:'ph-plant',k:'The garden',d:'A little oasis of plants, flowers and trees facing the hills. Perfect for a cool afternoon.'},{id:'work',icon:'ph-desk',k:'Work corners',d:'Tables and desks with wifi for your laptop hours.'}],
 amenIcons:[{i:'ph-wifi-high',k:'Wifi throughout'},{i:'ph-desk',k:'Workspace'},{i:'ph-cooking-pot',k:'Shared kitchen'},{i:'ph-plant',k:'Garden'},{i:'ph-mountains',k:'Mountain view'},{i:'ph-couch',k:'Two living rooms'},{i:'ph-lock-key',k:'Lock on your door'},{i:'ph-key',k:'Self check-in'},{i:'ph-translate',k:'Spanish, English & Russian'},{i:'ph-chat-circle-dots',k:'Reply in < 1 hour'},{i:'ph-calendar-check',k:'Long stays & weekends'},{i:'ph-bird',k:'Five unique rooms'}],
 loc:{title:'Well located, no car needed',text:'Nido is in Ixcatepec, a quiet neighborhood of Tepoztlán away from downtown noise. Shops, cafés and small eateries are steps away, and public transport passes nearby. Ideal for long stays without your own car.',note:'Calle Progreso 1B, Ixcatepec, 62525 Tepoztlán, Morelos'},
 transit:[{i:'ph-bus',v:'10 min',k:'to downtown by public transport'},{i:'ph-person-simple-walk',v:'35 min',k:'walking to downtown'},{i:'ph-car-simple',v:'1 h 15',k:'from Mexico City'}],
 nearby:[{i:'ph-storefront',k:'Shops & groceries',d:'Everyday essentials a few steps from the house.'},{i:'ph-coffee',k:'Cafés & bakeries',d:'For your morning coffee or an afternoon on the laptop.'},{i:'ph-basket',k:'Fruit stands & market',d:'Fresh fruit, vegetables and local produce.'},{i:'ph-path',k:'Trails',d:'Walking and running paths that start in the neighborhood.'},{i:'ph-bus',k:'Public transport',d:'Frequent combis to downtown Tepoztlán.'}]
}};
const REVIEWS=[
 {name:'Daena',from:'Calgary, Canada',when:{es:'Abril 2026',en:'April 2026'},stay:{es:'Unas noches',en:'A few nights'},text:'Really unique home and beautiful space! Hosts were very friendly and helpful. Would 100% stay here again!'},
 {name:'Samanthaa',from:'Oaxaca, México',when:{es:'Octubre 2025',en:'October 2025'},stay:{es:'Más de una semana',en:'Over a week'},text:'a beautiful place, you feel at home, the people there are too friendly, we will definitely come back ❤️'}
];
const HOUSE0=[R[1].photos[1],R[2].photos[2],R[0].photos[1],R[3].photos[2],R[1].photos[3],R[2].photos[4],R[3].photos[3],R[0].photos[3]];
const HOUSE=[A('garden-path'),A('view-roof'),A('door'),A('flower-orange'),A('sun-lamp'),A('view-hills'),A('chandelier'),A('papaya')];
const PHI={"basket":"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M134%2C120v56a6%2C6%2C0%2C0%2C1-12%2C0V120a6%2C6%2C0%2C0%2C1%2C12%2C0Zm40.83-.6-5.6%2C56A6%2C6%2C0%2C0%2C0%2C174.6%2C182l.61%2C0a6%2C6%2C0%2C0%2C0%2C6-5.4l5.6-56a6%2C6%2C0%2C0%2C0-11.94-1.2Zm-93.66%2C0a6%2C6%2C0%2C0%2C0-11.94%2C1.2l5.6%2C56a6%2C6%2C0%2C0%2C0%2C6%2C5.4l.61%2C0a6%2C6%2C0%2C0%2C0%2C5.37-6.57ZM238%2C88.79%2C222.87%2C201.85A14%2C14%2C0%2C0%2C1%2C209%2C214H47a14%2C14%2C0%2C0%2C1-13.87-12.15L18.05%2C88.79A6%2C6%2C0%2C0%2C1%2C24%2C82H69.28l54.2-61.95a6%2C6%2C0%2C0%2C1%2C9%2C0l54.2%2C62H232A6%2C6%2C0%2C0%2C1%2C238%2C88.79ZM85.22%2C82h85.56L128%2C33.11ZM225.15%2C94H30.85L45%2C200.26A2%2C2%2C0%2C0%2C0%2C47%2C202H209a2%2C2%2C0%2C0%2C0%2C2-1.74Z%22%2F%3E%3C%2Fsvg%3E","church":"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M227.09%2C146.86%2C190%2C124.6V104a6%2C6%2C0%2C0%2C0-3-5.21L134%2C68.52V46h18a6%2C6%2C0%2C0%2C0%2C0-12H134V16a6%2C6%2C0%2C0%2C0-12%2C0V34H104a6%2C6%2C0%2C0%2C0%2C0%2C12h18V68.52L69%2C98.79A6%2C6%2C0%2C0%2C0%2C66%2C104v20.6L28.91%2C146.86A6%2C6%2C0%2C0%2C0%2C26%2C152v64a6%2C6%2C0%2C0%2C0%2C6%2C6h80a6%2C6%2C0%2C0%2C0%2C6-6V168a10%2C10%2C0%2C0%2C1%2C20%2C0v48a6%2C6%2C0%2C0%2C0%2C6%2C6h80a6%2C6%2C0%2C0%2C0%2C6-6V152A6%2C6%2C0%2C0%2C0%2C227.09%2C146.86ZM38%2C155.4l28-16.8V210H38Zm90-9.4a22%2C22%2C0%2C0%2C0-22%2C22v42H78V107.48l50-28.57%2C50%2C28.57V210H150V168A22%2C22%2C0%2C0%2C0%2C128%2C146Zm90%2C64H190V138.6l28%2C16.8Z%22%2F%3E%3C%2Fsvg%3E","ice-cream":"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M206%2C98.83V96A78%2C78%2C0%2C0%2C0%2C50%2C96v2.83A22%2C22%2C0%2C0%2C0%2C56%2C142h4.45L115.84%2C239a14%2C14%2C0%2C0%2C0%2C24.32%2C0L195.55%2C142H200a22%2C22%2C0%2C0%2C0%2C6-43.17ZM129.74%2C233a2%2C2%2C0%2C0%2C1-3.48%2C0l-52-91h24L140%2C215.06ZM136%2C142l22.89%2C40.06-12%2C20.91-34.84-61Zm29.8%2C28-16-28h32ZM200%2C130H56a10%2C10%2C0%2C0%2C1%2C0-20%2C6%2C6%2C0%2C0%2C0%2C6-6V96a66%2C66%2C0%2C0%2C1%2C132%2C0v8a6%2C6%2C0%2C0%2C0%2C6%2C6%2C10%2C10%2C0%2C0%2C1%2C0%2C20Z%22%2F%3E%3C%2Fsvg%3E","mountains":"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20256%20256%22%20fill%3D%22currentColor%22%3E%3Cpath%20d%3D%22M164%2C78a26%2C26%2C0%2C1%2C0-26-26A26%2C26%2C0%2C0%2C0%2C164%2C78Zm0-40a14%2C14%2C0%2C1%2C1-14%2C14A14%2C14%2C0%2C0%2C1%2C164%2C38Zm89.16%2C158.94L198.6%2C104.86a13.9%2C13.9%2C0%2C0%2C0-12-6.86h0a13.88%2C13.88%2C0%2C0%2C0-12%2C6.86l-27.88%2C47.05-46.56-79a14%2C14%2C0%2C0%2C0-24.13%2C0L2.83%2C197A6%2C6%2C0%2C0%2C0%2C8%2C206H248a6%2C6%2C0%2C0%2C0%2C5.16-9.06ZM86.27%2C79a2%2C2%2C0%2C0%2C1%2C3.46%2C0l25.34%2C43H60.93ZM18.5%2C194l35.36-60h68.29l19.3%2C32.77%2C0%2C0%2C16%2C27.2Zm152.93%2C0-17.85-30.29L184.83%2C111a2%2C2%2C0%2C0%2C1%2C1.72-1%2C1.93%2C1.93%2C0%2C0%2C1%2C1.72%2C1l49.2%2C83Z%22%2F%3E%3C%2Fsvg%3E"};const PH=n=>PHI[n];
const SVG=d=>'data:image/svg+xml,'+encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='none' stroke='black' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'><path d='"+d+"'/></svg>").replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29');
const GUIDE_ICONS=[SVG('M24 212h208M40 212l18-44h140l18 44M66 168l16-38h92l16 38M90 130l14-34h48l14 34M108 96V64h40v32M116 212v-44h24v44'),PH('basket'),PH('church'),SVG('M28 208h200M44 208a84 84 0 0 1 168 0M106 208v-26a22 22 0 0 1 44 0v26M100 76c-10-12 10-20 0-34M128 68c-10-12 10-20 0-34M156 76c-10-12 10-20 0-34'),PH('ice-cream'),PH('mountains')];
function nightsBetween(a,b){if(!a||!b)return 0;const d=(new Date(b)-new Date(a))/864e5;return d>0?Math.round(d):0;}
function quote(a,b){const n=nightsBetween(a,b);const d=n>=28?MO:n>=7?WK:0;const base=PRICE*n,total=base*(1-d);
 return {has:n>0,nights:n,pct:d?Math.round(d*100)+'%':'',hasDiscount:d>0,base:fmt(base),total:fmt(total),perNight:fmt(PRICE*(1-d)),save:fmt(base-total)};}
function fmtDate(s,lang){if(!s)return '';return new Date(s+'T12:00').toLocaleDateString(lang==='es'?'es-MX':'en-US',{day:'numeric',month:'short'});}
function waLink(lang,room,a,b){const q=quote(a,b);let t;
 if(lang==='es')t=`¡Hola Nido! Me gustaría reservar ${room||'una habitación'}`+(q.has?` del ${fmtDate(a,lang)} al ${fmtDate(b,lang)} (${q.nights} noches, ${q.total} MXN)`:'')+'. ¿Está disponible?';
 else t=`Hi Nido! I\u2019d like to book ${room||'a room'}`+(q.has?` from ${fmtDate(a,lang)} to ${fmtDate(b,lang)} (${q.nights} nights, ${q.total} MXN)`:'')+'. Is it available?';
 return `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;}
function mailLink(lang,room,a,b){const q=quote(a,b);const sub=lang==='es'?'Reserva Nido'+(room?' · '+room:''):'Nido booking'+(room?' · '+room:'');
 const body=lang==='es'?`Hola Nido,\n\nMe gustaría reservar ${room||'una habitación'}`+(q.has?` del ${fmtDate(a,lang)} al ${fmtDate(b,lang)} (${q.nights} noches, ${q.total} MXN)`:'')+'.\n\n¿Está disponible?\n\nGracias':`Hi Nido,\n\nI\u2019d like to book ${room||'a room'}`+(q.has?` from ${fmtDate(a,lang)} to ${fmtDate(b,lang)} (${q.nights} nights, ${q.total} MXN)`:'')+'.\n\nIs it available?\n\nThanks';
 return `mailto:${EMAIL}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;}
function initLang(){try{const p=new URLSearchParams(location.search).get('lang');if(p==='en'||p==='es')return p;return localStorage.getItem('nido-lang')||'es';}catch(e){return 'es';}}
function vals(cmp,opts){
 const s=cmp.state,lang=s.lang||'es',ui=L[lang],c=C[lang];
 const set=o=>cmp.setState(o);
 const setLang=l=>{try{localStorage.setItem('nido-lang',l);}catch(e){}document.documentElement.lang=l;set({lang:l});};
 const scrollTo=id=>{const go=()=>{const el=document.getElementById(id);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-(opts&&opts.offset||0),behavior:'smooth'});};
  if(s.view!=='home'){set({view:'home'});setTimeout(go,60);}else go();};
 const openRoom=i=>{set({view:'room',room:i,sel:i});window.scrollTo(0,0);};
 const rooms=R.map((r,i)=>({...r,idx:i,num:'0'+(i+1),desc:r[lang],bath:r.shared?ui.sharedBath:ui.privateBath,open:()=>openRoom(i),photo:r.photos[0],thumb:r.thumbs[0],hover:r.thumbs[1]}));
 const cur=rooms[s.room||0];
 const es=lang==='es';
 const roomAmen=[{i:'ph-bed',k:ui.doubleBed},{i:cur.shared?'ph-users-three':'ph-shower',k:cur.bath},{i:'ph-lock-key',k:es?'Cerradura en la puerta':'Lock on the door'},{i:'ph-wifi-high',k:'Wifi'},{i:'ph-desk',k:es?'Espacio de trabajo':'Workspace'},{i:'ph-mountains',k:es?'Vista a la montaña':'Mountain view'},{i:'ph-key',k:es?'Check-in autónomo':'Self check-in'},{i:'ph-cooking-pot',k:es?'Acceso a cocina':'Kitchen access'},{i:'ph-plant',k:es?'Acceso al jardín':'Garden access'},{i:'ph-couch',k:es?'Dos salas comunes':'Two living rooms'},{i:'ph-calendar-check',k:es?'−20% semana · −55% mes':'−20% week · −55% month'},{i:'ph-translate',k:'ES · EN · RU'}];
 const selName=s.sel>=0?R[s.sel].name:'';
 const q=quote(s.ci,s.co);
 const roomOpts=[{v:-1,label:ui.anyRoom}].concat(R.map((r,i)=>({v:i,label:r.name})));
 const navKeys=['rooms','house','life','work','guide','faq'];
 return {lang,isEs:lang==='es',isEn:lang==='en',ui,c,logo:'assets/logo.jpg',
  toggleLang:()=>setLang(lang==='es'?'en':'es'),setEs:()=>setLang('es'),setEn:()=>setLang('en'),
  nav:navKeys.map(k=>({key:k,label:ui.nav[k],go:()=>scrollTo(k)})),navAll:['rooms','house','location','life','guide','faq'].map(k=>({key:k,label:ui.nav[k],go:()=>scrollTo(k)})),goBook:()=>scrollTo('book'),goTop:()=>{set({view:'home'});window.scrollTo({top:0,behavior:'smooth'});},
  isHome:s.view!=='room',isRoom:s.view==='room',goHome:()=>{set({view:'home'});setTimeout(()=>scrollTo('rooms'),30);},
  rooms,cur,curPhotos:cur.photos,curThumbs:cur.thumbs,others:rooms.filter(r=>r.idx!==cur.idx),
  ci:s.ci||'',co:s.co||'',setCi:e=>set({ci:e.target.value}),setCo:e=>set({co:e.target.value}),
  sel:s.sel==null?-1:s.sel,setSel:e=>set({sel:+e.target.value}),roomOpts,q,noQuote:!q.has,
  wa:waLink(lang,selName,s.ci,s.co),mail:mailLink(lang,selName,s.ci,s.co),mailRoom:mailLink(lang,cur.name,s.ci,s.co),mailPlain:mailLink(lang,'',null,null),email:EMAIL,gmaps:GMAPS,gRating:'5.0',orEmail:lang==='es'?'¿Sin WhatsApp? Escríbenos por email':'No WhatsApp? Email us',emailBtn:lang==='es'?'Reservar por email':'Book by email',gLabel:lang==='es'?'· 5 reseñas en Google':'· 5 reviews on Google',gOpen:lang==='es'?'Ver en Google Maps':'View on Google Maps',waRoom:waLink(lang,cur.name,s.ci,s.co),waPlain:waLink(lang,'',null,null),phone:'+52 998 319 6367',
  price:{night:fmt(PRICE),week:fmt(PRICE*7*(1-WK)),month:fmt(PRICE*30*(1-MO)),weekNight:fmt(PRICE*(1-WK)),monthNight:fmt(PRICE*(1-MO)),weekFull:fmt(PRICE*7),monthFull:fmt(PRICE*30)},
  faqs:c.faq.map((f,i)=>({...f,num:(i<9?'0':'')+(i+1),open:s.faq===i,closed:s.faq!==i,sign:s.faq===i?'−':'+',toggle:()=>set({faq:s.faq===i?-1:i})})),
  guideIcons:GUIDE_ICONS,reviews:REVIEWS.map(r=>({...r,when:r.when[lang],stay:r.stay[lang],initial:r.name[0]})),
  house:HOUSE,nature:NATURE,igUrl:'https://www.instagram.com/nidotepoztlan/',igPosts:[['assets/ig/ig1c.jpg',"Bienvenidos a NiDO, casa de pájaros extraños","Welcome to NiDO, home of strange birds"],['assets/ig/ig2c.jpg',"NiDO · room tour","NiDO · room tour"],['assets/ig/ig3.jpg',"Umbral del Espejo, fiesta de otoño · 17/10","Umbral del Espejo, autumn party · 17/10"],['assets/ig/ig4.jpg',"Música en el jardín","Music in the garden"],['assets/ig/ig5.jpg',"Día de juegos · 19 de julio","Game day · July 19"],['assets/ig/ig6.jpg',"Umbral de Verano, festival de solsticio · 20 de junio","Umbral de Verano, solstice festival · June 20"],['assets/ig/ig7.jpg',"Noche de juegos · 3 de mayo","Game night · May 3"],['assets/ig/ig8.jpg',"Mañanas en NiDO","Mornings at NiDO"]].map((x,i)=>({src:x[0],cap:lang==='es'?x[1]:x[2],span:i===0?'span 2':'auto'})),igTitle:lang==='es'?'Síguenos en Instagram':'Follow us on Instagram',igSub:lang==='es'?'Días en el nido, luz de Tepoztlán y la vida de la casa.':'Days in the nest, Tepoztlán light and life around the house.',kitchenMain:'uploads/kitchen1.jpeg',livingMain:'uploads/livingroom1_8.jpeg',workMain:'uploads/livingroom1_2.jpeg',upStrip:['uploads/livingroom2_6.jpeg','uploads/livingroom2_8.jpeg','uploads/livingroom2_3.jpeg','uploads/livingroom2_1.jpeg','uploads/livingroom2_7.jpeg','uploads/livingroom2_10.jpeg'],livingStrip:['uploads/livingroom1_4.jpeg','uploads/livingroom1_3.jpeg','uploads/livingroom1_5.jpeg','uploads/livingroom1_6.jpeg','uploads/livingroom1_1.jpeg','uploads/livingroom1_7.jpeg'],kitchenStrip:['uploads/kitchen9.jpeg','uploads/kitchen6.jpeg','uploads/kitchen5.jpeg','uploads/kitchen4.jpeg','uploads/kitchen10.jpeg','uploads/kitchen7.jpeg'],natureGrid:[A('view-roof'),A('garden-path'),A('flower-orange'),A('view-cliff'),A('door'),A('papaya'),A('sun-lamp'),A('view-rock')],roomAmen,mapSrc:'https://www.openstreetmap.org/export/embed.html?bbox=-99.096%2C18.967%2C-99.062%2C18.986&layer=mapnik&marker=18.9758%2C-99.0791',mapLink:GMAPS,insta:[A('flower-orange'),'uploads/kitchen5.jpeg',A('view-hills'),'uploads/kitchen9.jpeg',A('sun-lamp'),A('garden-path')],hostNames:'Seva, Gabriel, Leni & Kristina',year:new Date().getFullYear()};
}
const RID=p=>'r_'+p.replace(/[^a-z0-9]/gi,'_');
function RES(v){const X=window.__resources,M=window.NIDO_IMG;return (X&&X[RID(v)])||(M&&M[v])||v;}
window.NIDO_RES=RES;
function resImgs(o){const w=v=>typeof v==='string'?(/^(assets|uploads)\//.test(v)?RES(v):v):Array.isArray(v)?v.map(w):(v&&typeof v==='object'&&!v.$$typeof)?Object.fromEntries(Object.entries(v).map(([k,x])=>[k,typeof x==='function'?x:w(x)])):v;return w(o);}
function state(){return {lang:initLang(),view:'home',room:0,sel:-1,ci:'',co:'',faq:-1};}
function reveal(root,mode){
 const els=(root||document).querySelectorAll('[data-reveal]:not([data-rv])');
 if(!('IntersectionObserver' in window))return;
 const io=reveal._io||(reveal._io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const el=e.target;el.style.opacity='1';el.style.transform='none';el.style.clipPath='inset(0 0 0 0)';reveal._io.unobserve(el);}}),{threshold:0.12,rootMargin:'0px 0px -5% 0px'}));
 els.forEach(el=>{el.setAttribute('data-rv','1');const k=el.getAttribute('data-reveal');const d=el.getAttribute('data-delay')||'0';
  el.style.transition=`opacity 1s cubic-bezier(.2,.7,.2,1) ${d}s, transform 1.1s cubic-bezier(.2,.7,.2,1) ${d}s, clip-path 1.2s cubic-bezier(.7,0,.2,1) ${d}s`;
  el.style.opacity=k==='clip'?'1':'0';
  if(k==='up')el.style.transform='translateY(40px)';if(k==='scale')el.style.transform='scale(1.08)';if(k==='left')el.style.transform='translateX(-40px)';
  if(k==='clip')el.style.clipPath='inset(100% 0 0 0)';
  io.observe(el);});
}
function mountMaps(){const LF=window.L;if(!LF||typeof LF.map!=='function')return;document.querySelectorAll('[data-nido-map]').forEach(el=>{if(!el.offsetWidth||el.querySelector('.leaflet-pane'))return;if(el._leaflet_id)el._leaflet_id=null;el.innerHTML='';
 const m=LF.map(el,{scrollWheelZoom:false,attributionControl:true,zoomControl:true}).setView([18.9758,-99.0791],15);
 LF.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Tiles © Esri, HERE, Garmin, © OpenStreetMap'}).addTo(m);
 LF.circleMarker([18.9758,-99.0791],{radius:10,color:'#fff',weight:3,fillColor:'#B5562F',fillOpacity:1}).addTo(m).bindTooltip('NiDO · Calle Progreso 1B',{permanent:true,direction:'top',offset:[0,-10]});
 const off=+(el.getAttribute('data-offset')||0),offY=+(el.getAttribute('data-offset-y')||0);setTimeout(()=>{m.invalidateSize();if(off||offY)m.panBy([-Math.min(off,el.offsetWidth*0.3),offY],{animate:false});},200);});}

setInterval(mountMaps,400);
window.NIDO={vals:(c,o)=>resImgs(vals(c,o)),state,reveal,waLink,rooms:R,price:PRICE};
})();
