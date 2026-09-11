# Image assets

All the artwork is SVG built from the folk motifs in the brand logo, so it scales to any
size, stays sharp on retina screens, and recolours from the CSS variables in
`assets/css/site.css`.

| File | Used for |
|---|---|
| `logo-mark.svg` | The folk heart wreath. Hero panel, About page, 404 page. |
| `logo-badge.svg` | Compact square mark. Header and footer — stays legible at 42px, which the full wreath does not. |
| `favicon.svg` | Browser tab icon. |
| `apple-touch-icon.png` | 180×180, iOS home screen. |
| `icon-192.png`, `icon-512.png` | Referenced by `site.webmanifest`. |
| `og-image.png` | 1200×630 social sharing card (Facebook, WhatsApp, LinkedIn). |
| `og-image.svg` | Editable source for the card above. |
| `pattern-folk.svg` | Tiling background, blue at 4% opacity. Light sections. |
| `pattern-folk-light.svg` | Same tile in cream, for the footer and CTA band. |
| `divider.svg` | The `.folk-rule` section divider. |
| `rosette.svg`, `star-flower.svg`, `swirl.svg`, `heart.svg` | Individual motifs. Feature icons, and the watermark on `.card`. |
| `medallion-1…4.svg` | Product tile artwork, standing in for photographs. |

## Swapping in the real logo

The wreath here is a reconstruction, drawn to match the uploaded logo so the site could be
built before the original file was to hand. To use the real artwork instead, save it as
`logo.png` (or `.svg`) in this folder and point the hero at it:

```
index.html  →  <img class="hero-wreath" src="/assets/img/logo-mark.svg" …>
```

Note that the hero overlays the words "Katka's Kitchen" as live HTML text on top of the
wreath (`.hero-wordmark` — better for SEO and accessibility than text baked into an
image). If the real logo already contains the lettering, delete that `<p>`.

## Regenerating the raster files

`og-image.png` and the icons are rendered from SVG with `rsvg-convert`
(`brew install librsvg`):

```bash
rsvg-convert -w 1200 -h 630 og-image.svg     -o og-image.png
rsvg-convert -w 180  -h 180 logo-badge.svg   -o apple-touch-icon.png
rsvg-convert -w 192  -h 192 logo-badge.svg   -o icon-192.png
rsvg-convert -w 512  -h 512 logo-badge.svg   -o icon-512.png
```
