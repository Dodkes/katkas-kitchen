# Katka's Kitchen — katkaskitchen.com.au

Static website for a Slovak home-baking business on the Gold Coast, QLD.

Plain HTML, CSS and a little vanilla JavaScript. **No build step, no dependencies, no
framework.** Open a `.html` file, change the words, save, upload. That is the whole workflow.

---

## Preview it locally

Pages link to assets with root-relative paths (`/assets/...`), which means opening a file
directly with `file://` will not load the CSS. Serve the folder instead:

```bash
cd katkas-kitchen
python3 -m http.server 8000
# then open http://localhost:8000
```

## What is where

```
index.html                  Home
celebration-cakes/          Birthday & celebration cakes
wedding-cakes/              Wedding cakes & Slovak sweet tables
slovak-desserts/            Medovník, kremeš, punch slices…
pastries-and-bread/         Buchty, koláče, šišky, bread
gallery/                    Photo grid (placeholders for now)
about/                      Katka's story
faq/                        Ordering, allergens, prices
contact/                    Enquiry form + details
privacy/                    Privacy policy
404.html                    Not-found page

assets/css/site.css         All styling. Design tokens are at the top in `:root`.
assets/js/site.js           Mobile menu + enquiry form submit. ~60 lines.
assets/img/*.svg            Folk ornaments, logo, patterns, product medallions.
assets/img/og-image.png     1200×630 social sharing card.

robots.txt  sitemap.xml  site.webmanifest  _headers
```

Each page is standalone, so the header and footer markup is repeated in all eleven files.
That is the trade-off for having no build step: a change to the navigation means editing
eleven files (find-and-replace handles it). If the site grows past a dozen pages, move to
Eleventy — it outputs the same static HTML, so nothing here would be wasted.

## Editing

- **Text** — edit the HTML directly. Slovak characters are stored as real UTF-8
  (`medovník`, not `medovn&iacute;`), so you can just type them.
- **Colours and fonts** — `:root` at the top of `assets/css/site.css`. Change
  `--blue` / `--red` and the whole site follows, ornaments included.
- **Prices** — each product page has its tiles and a `.menu-list` block.
- **A new page** — copy the closest existing page, then update `<title>`,
  `<meta name="description">`, `<link rel="canonical">`, the `og:` tags, the JSON-LD
  breadcrumb, the `<h1>`, and add the URL to `sitemap.xml`.

## Adding real photos

The folk medallions are deliberate placeholders. To swap one for a photograph, replace the
`<img>` inside `.tile-art` and drop the tint class:

```html
<!-- before -->
<div class="tile-art tile-art--a">
  <img src="/assets/img/medallion-1.svg" width="190" height="190" alt="" loading="lazy">
</div>
<!-- after -->
<div class="tile-art">
  <img src="/assets/img/medovnik.webp" width="800" height="680"
       alt="Sliced medovník showing eight honey layers" loading="lazy" decoding="async">
</div>
```

Then add `.tile-art img { width: 100%; height: 100%; object-fit: cover; }` for photo tiles.

Always: convert to WebP, keep the longest edge around 1400px, set real `width`/`height`
attributes (stops the layout jumping, which Google measures), write a descriptive `alt`,
and keep `loading="lazy"` on everything except the first image on the page.

```bash
# bulk convert, needs: brew install webp
for f in *.jpg; do cwebp -q 82 -resize 1400 0 "$f" -o "${f%.jpg}.webp"; done
```

## Deploying

Cloudflare Pages or Netlify — both free, both give a global CDN and automatic HTTPS.
Connect this git repo, set the build command to nothing and the output directory to `/`.
`_headers` is already written for both (security headers plus long-lived asset caching).

> **DNS warning.** When you point `katkaskitchen.com.au` at the host, change only the
> `A` / `AAAA` / `CNAME` records. **Leave the `MX` records alone** or
> `info@katkaskitchen.com.au` will stop receiving mail — and you will not notice until
> somebody tells you their order enquiry bounced.

## Before launch

See `CONTENT-TODO.md` — every placeholder value is listed there with its location.
The enquiry form in particular does nothing until you wire up an endpoint.

## After launch

1. **Google Business Profile** — set up as a *service-area business* so the home address
   stays private. This drives more local enquiries than the website itself, and
   verification takes days to weeks, so start it early.
2. **Google Search Console** — verify the domain, submit `sitemap.xml`.
3. **Bing Webmaster Tools** — same, takes two minutes.
4. **Analytics** — Cloudflare Web Analytics is free, needs no cookie banner and does not
   slow the site down.
5. **Reviews** — ask every customer. Ten genuine Google reviews will move the needle
   further than any change to this code.
