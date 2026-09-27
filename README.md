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
