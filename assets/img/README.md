# Image assets

Most of the artwork is SVG built from the folk motifs in the brand logo, so it scales to
any size, stays sharp on retina screens, and recolours from the CSS variables in
`assets/css/site.css`. The full brand logo is supplied as a transparent PNG.

| File | Used for |
|---|---|
| `logo-mark.png` | The transparent full logo. Homepage hero, About page, 404 page, and structured data. |
| `logo-motif-bird.png` | Isolated rooster detail cropped from the full logo, used for the homepage feature icon. |
| `logo-motif-flower.png` | Isolated blue flower detail cropped from the full logo, used for the homepage feature icon. |
| `logo-badge.svg` | Compact folk badge mark. Header and footer — transparent background and lightweight, so it reads cleanly at 42px. |
| `favicon.svg` | Browser tab icon. |
| `apple-touch-icon.png` | 180×180, iOS home screen. |
| `icon-192.png`, `icon-512.png` | Referenced by `site.webmanifest`. |
| `og-image.png` | 1200×630 social sharing card (Facebook, WhatsApp, LinkedIn). |
| `og-image.svg` | Editable source for the card above. |
| `pattern-folk.svg` | Tiling background, blue at 4% opacity. Light sections. |
| `pattern-folk-light.svg` | Same tile in cream, for the footer and CTA band. |
| `divider.svg` | The `.folk-rule` section divider. |
| `rosette.svg`, `star-flower.svg`, `swirl.svg`, `heart.svg` | Individual motifs used as clean homepage feature icons and the watermark on `.card`. |
| `medallion-1…4.svg` | Product tile artwork, standing in for photographs. |

## Swapping in the real logo

The full logo image includes the brand lettering, so the hero does not overlay separate
text on top of it. The compact SVG badge is still used in the header and footer.

```
index.html  →  <img class="hero-wreath" src="/assets/img/logo-mark.png" …>
```

## Regenerating the raster files

`og-image.png` and the icons are rendered from SVG with `rsvg-convert`
(`brew install librsvg`):

```bash
rsvg-convert -w 1200 -h 630 og-image.svg     -o og-image.png
rsvg-convert -w 180  -h 180 logo-badge.svg   -o apple-touch-icon.png
rsvg-convert -w 192  -h 192 logo-badge.svg   -o icon-192.png
rsvg-convert -w 512  -h 512 logo-badge.svg   -o icon-512.png
```
