// Cloudflare Pages middleware: one index.html, a proper <head> for every URL.
//
//   /                 Spanish home        /en/               English home
//   /ave-suave ...    Spanish room pages  /en/ave-suave ...  English room pages
//
// Google reads the title, description, canonical, hreflang and structured
// data straight from the HTML this returns, so each room ranks on its own.
// To change a room's search title or description, edit ROOMS below.

const SITE = 'https://nidotepoztlan.com';
const IMG = SITE + '/assets/view-hills.jpg';

const HOME = {
  es: {
    title: 'Nido · Casa de huéspedes y coliving en Tepoztlán, Morelos',
    desc: 'Estancias largas y fines de semana en Tepoztlán. Habitaciones privadas en una casa con jardín, cocina y dos salas en Ixcatepec, a 10 min del centro en transporte público. Desde $600 MXN por noche.',
  },
  en: {
    title: 'Nido · Guest house & coliving in Tepoztlán, Morelos',
    desc: 'Long stays and weekends in Tepoztlán. Private rooms in a house with a garden, kitchen and two living rooms in Ixcatepec, 10 min from the center by public transport. From $600 MXN per night.',
  },
};

const ROOMS = {
  'ave-suave': {
    name: 'Ave Suave', airbnb: '1465439964539140509', price: 600, privateBath: false, img: 'assets/ave-1.jpg',
    es: { title: 'Ave Suave · Habitación con baño compartido en Tepoztlán | Nido',
          desc: 'Habitación privada con cama doble, ventana en arco y baño compartido justo enfrente, en una casa con jardín en Ixcatepec, Tepoztlán. Desde $600 MXN/noche, 20% menos por semana y 55% por mes.' },
    en: { title: 'Ave Suave · Private room with shared bath in Tepoztlán | Nido',
          desc: 'Private room with a double bed, arched window and a shared bathroom right across the hall, in a garden house in Ixcatepec, Tepoztlán. From $600 MXN/night, 20% off weekly and 55% off monthly.' },
  },
  'loro-loco': {
    name: 'Loro Loco', airbnb: '1213102735793671313', price: 600, privateBath: true, img: 'assets/loro-1.jpg',
    es: { title: 'Loro Loco · Habitación con baño privado y escritorio en Tepoztlán | Nido',
          desc: 'Habitación con cama doble, escritorio y baño privado en una casa compartida con jardín en Ixcatepec, Tepoztlán. Ideal para trabajo remoto y estancias largas. Desde $600 MXN/noche.' },
    en: { title: 'Loro Loco · Room with private bath & desk in Tepoztlán | Nido',
          desc: 'Room with a double bed, desk and private bathroom in a shared garden house in Ixcatepec, Tepoztlán. Great for remote work and long stays. From $600 MXN/night.' },
  },
  'trebol-azul': {
    name: 'Trébol Azul', airbnb: '1215616658194328045', price: 600, privateBath: true, img: 'assets/trebol-1.jpg',
    es: { title: 'Trébol Azul · Habitación con baño privado y balcón en Tepoztlán | Nido',
          desc: 'Habitación con cama doble, baño privado y un pequeño balcón propio en una casa con jardín en Ixcatepec, Tepoztlán. Tranquila para dormir y trabajar. Desde $600 MXN/noche.' },
    en: { title: 'Trébol Azul · Room with private bath & balcony in Tepoztlán | Nido',
          desc: 'Room with a double bed, private bathroom and its own small balcony in a garden house in Ixcatepec, Tepoztlán. Quiet for sleeping and working. From $600 MXN/night.' },
  },
  'momo-toh': {
    name: 'Momo Toh', airbnb: '1599502220194110114', price: 750, privateBath: true, img: 'assets/momo-bed2.jpg',
    es: { title: 'Momo Toh · Habitación con terraza privada y vista en Tepoztlán | Nido',
          desc: 'La favorita de los huéspedes: cama doble, baño privado y terraza propia con vista a los cerros de Tepoztlán, en Ixcatepec. Desde $750 MXN/noche, descuentos por semana y mes.' },
    en: { title: 'Momo Toh · Room with private terrace & view in Tepoztlán | Nido',
          desc: 'The guest favorite: double bed, private bathroom and your own terrace overlooking the Tepoztlán hills, in Ixcatepec. From $750 MXN/night, weekly and monthly discounts.' },
  },
};

const BUSINESS = {
  '@type': 'LodgingBusiness',
  '@id': SITE + '/#nido',
  name: 'Nido Tepoztlán',
  url: SITE + '/',
  image: IMG,
  logo: SITE + '/assets/logo-v3.jpg',
  telephone: '+529983196367',
  email: 'nidotepoztlan@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: 'Calle Progreso 1B, Ixcatepec', addressLocality: 'Tepoztlán',
             addressRegion: 'Morelos', postalCode: '62525', addressCountry: 'MX' },
  geo: { '@type': 'GeoCoordinates', latitude: 18.9758, longitude: -99.0791 },
  hasMap: 'https://maps.google.com/?cid=12397869118622683444',
  priceRange: '$600–$750 MXN',
  currenciesAccepted: 'MXN',
  numberOfRooms: 4,
  availableLanguage: ['es', 'en', 'ru'],
  amenityFeature: ['Wifi', 'Cocina compartida', 'Jardín', 'Espacio de trabajo', 'Dos salas comunes', 'Check-in autónomo', 'Vista a la montaña']
    .map(n => ({ '@type': 'LocationFeatureSpecification', name: n, value: true })),
  sameAs: ['https://www.instagram.com/nidotepoztlan/',
           ...Object.values(ROOMS).map(r => 'https://www.airbnb.com/rooms/' + r.airbnb)],
};

const pathFor = (lang, room) => (lang === 'en' ? '/en' : '') + '/' + (room || '');

function page(pathname) {
  const m = pathname.match(/^(\/en)?\/([a-z-]*)$/);
  if (!m) return null;
  const lang = m[1] ? 'en' : 'es', slug = m[2];
  if (slug && !ROOMS[slug]) return null;
  return { lang, room: slug || null };
}

function ldFor(lang, room) {
  if (!room) return { '@context': 'https://schema.org', ...BUSINESS };
  const r = ROOMS[room], t = r[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: r.name,
    description: t.desc,
    url: SITE + pathFor(lang, room),
    image: SITE + '/' + r.img,
    bed: { '@type': 'BedDetails', numberOfBeds: 1, typeOfBed: lang === 'en' ? 'Double' : 'Matrimonial' },
    occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
    amenityFeature: [{ '@type': 'LocationFeatureSpecification',
                       name: lang === 'en' ? (r.privateBath ? 'Private bathroom' : 'Shared bathroom') : (r.privateBath ? 'Baño privado' : 'Baño compartido'),
                       value: true }],
    containedInPlace: BUSINESS,
  };
}

export async function onRequest(ctx) {
  const url = new URL(ctx.request.url);
  const p = url.pathname;

  // Old URLs → new ones (permanent)
  if (p === '/Neighborhood.dc.html' || p === '/Neighborhood.dc') return Response.redirect(SITE + '/neighborhood', 301);
  if (p === '/en') return Response.redirect(SITE + '/en/', 301);
  if (p.length > 1 && p.endsWith('/') && p !== '/en/') {
    const clean = p.slice(0, -1);
    if (page(clean) || clean === '/neighborhood') return Response.redirect(SITE + clean + url.search, 301);
  }

  const pg = page(p);

  // Legacy ?lang=en links → /en/...
  if (pg && pg.lang === 'es' && url.searchParams.get('lang') === 'en') {
    return Response.redirect(SITE + pathFor('en', pg.room), 301);
  }

  // Scripts and images requested from under /en/ live at the site root
  if (!pg && p.startsWith('/en/')) {
    return ctx.env.ASSETS.fetch(new Request(new URL(p.slice(3) + url.search, url), ctx.request));
  }

  if (!pg) return ctx.next();

  const res = await ctx.env.ASSETS.fetch(new Request(new URL('/', url), ctx.request));
  if (!res.ok) return res;

  const { lang, room } = pg;
  const meta = room ? ROOMS[room][lang] : HOME[lang];
  const self = SITE + pathFor(lang, room);
  const es = SITE + pathFor('es', room), en = SITE + pathFor('en', room);
  const ogImg = room ? SITE + '/' + ROOMS[room].img : IMG;
  const boot = {
    lang,
    home: { es: HOME.es.title, en: HOME.en.title },
    rooms: Object.fromEntries(Object.entries(ROOMS).map(([k, r]) => [k, { es: r.es.title, en: r.en.title }])),
  };

  const set = (attr, value) => ({ element(el) { el.setAttribute(attr, value); } });
  const out = new HTMLRewriter()
    .on('html', set('lang', lang))
    .on('title', { element(el) { el.setInnerContent(meta.title); } })
    .on('meta[name="description"]', set('content', meta.desc))
    .on('link[rel="canonical"]', set('href', self))
    .on('link[hreflang="es"]', set('href', es))
    .on('link[hreflang="en"]', set('href', en))
    .on('link[hreflang="x-default"]', set('href', es))
    .on('meta[property="og:url"]', set('content', self))
    .on('meta[property="og:title"]', set('content', meta.title))
    .on('meta[property="og:description"]', set('content', meta.desc))
    .on('meta[property="og:locale"]', set('content', lang === 'en' ? 'en_US' : 'es_MX'))
    .on('meta[property="og:image"]', set('content', ogImg))
    .on('script#nido-ld', { element(el) { el.setInnerContent(JSON.stringify(ldFor(lang, room)), { html: true }); } })
    .on('meta[charset]', { element(el) {
      el.after('<script>window.NIDO_PATHS=1;window.NIDO_LANG=' + JSON.stringify(lang) + ';window.NIDO_META=' + JSON.stringify(boot).replace(/</g, '\\u003c') + ';</script>', { html: true });
    } })
    .transform(res);

  const headers = new Headers(out.headers);
  headers.set('content-type', 'text/html; charset=utf-8');
  return new Response(out.body, { status: 200, headers });
}

