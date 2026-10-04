# Nido Tepoztlán — website

Static site. No build step. Upload the contents of this folder to the root of the GitHub repo.

- index.html — page (layout + copy)
- nido-data.js — rooms, prices, texts ES/EN
- nido-reviews.js — guest reviews
- support.js, image-slot.js — page runtime
- assets/, uploads/ — images (web-optimized)

## Custom domain
1. Create a file named CNAME in this folder containing only your domain, e.g. www.nidotepoztlan.com
2. Replace https://www.TU-DOMINIO.com in robots.txt and sitemap.xml with your domain
3. GitHub → Settings → Pages → Custom domain → enter domain → Enforce HTTPS
4. At your domain registrar add DNS:
   - CNAME  www  →  sevasedov.github.io
   - A      @    →  185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

## SEO / URLs
- functions/_middleware.js (Cloudflare Pages) serves index.html for every page and sets its title, description, canonical, hreflang and structured data:
  / and /en/ (home), /ave-suave, /loro-loco, /trebol-azul, /momo-toh and their /en/ versions.
- To change a room's Google title or description, edit ROOMS in that file.
- Adding a room: add it to nido-data.js, to ROOMS in functions/_middleware.js, and to sitemap.xml.
