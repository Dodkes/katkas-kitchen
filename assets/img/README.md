# Image assets

Most of the artwork is SVG built from the folk motifs in the brand logo, so it scales to
any size, stays sharp on retina screens, and recolours from the CSS variables in
`assets/css/site.css`. The full brand logo is supplied as a transparent PNG.

| File | Used for |
|---|---|
| `logo-mark.png` | The transparent full logo. Homepage hero, About page, 404 page, and structured data. |
| `logo-motif-bird.png` | Isolated rooster detail cropped from the full logo, used for the homepage feature icon. |
| `logo-motif-flower.png` | Isolated blue flower detail cropped from the full logo, used for the homepage feature icon. |
| `logo-badge.svg` | Standalone red heart mark. Used in the header, footer and About page. |
| `favicon.svg` | Browser tab icon. |
| `apple-touch-icon.png` | 180×180, iOS home screen. |
| `icon-192.png`, `icon-512.png` | Referenced by `site.webmanifest`. |
| `og-image-folk-heart.png` | 1200×630 social sharing card featuring the current full folk-heart logo. |
| `og-image-folk-heart.svg` | Editable source for the card above; it uses `logo-mark.png`. |
| `apple-cake.jpg` | Photo of the jablkový koláč. Not currently on any page — the Pastries tiles became a text list. |
| `sisky.jpeg` | Photo of the šišky. Not currently on any page, same reason. |
| `buchty.jpg` | Photo of the buchty, which are no longer on the menu. Kept as source material. |
| `pattern-folk.svg` | Tiling background, blue at 4% opacity. Light sections. |
| `pattern-folk-light.svg` | Same tile in cream, for the footer and CTA band. |
| `divider.svg` | The `.folk-rule` section divider. |
| `rosette.svg`, `heart.svg` | Individual motifs used as clean homepage feature icons and the watermark on `.card`. |

## Swapping in the real logo

The full logo image includes the brand lettering, so the hero does not overlay separate
text on top of it. The compact SVG badge is still used in the header and footer.

```
index.html  →  <img class="hero-wreath" src="/assets/img/logo-mark.png" …>
```

## Regenerating the raster files

`og-image-folk-heart.png` and the icons are rendered from SVG with `rsvg-convert`
(`brew install librsvg`):

```bash
rsvg-convert -w 1200 -h 630 og-image-folk-heart.svg -o og-image-folk-heart.png
rsvg-convert -w 180  -h 180 logo-badge.svg   -o apple-touch-icon.png
rsvg-convert -w 192  -h 192 logo-badge.svg   -o icon-192.png
rsvg-convert -w 512  -h 512 logo-badge.svg   -o icon-512.png
```

## Keeping `logo-mark.png` small

It is the hero image on the homepage, so it is the thing Google measures as LCP. The
artwork is flat folk art in about six colours, which means a 16-colour palette is
visually identical to 24-bit and roughly twenty times smaller. 880px covers the largest
use (440 CSS px at 2×).

```bash
# needs: brew install pngquant
sips -Z 880 original.png --out /tmp/logo-880.png
pngquant 16 --nofs --speed 1 --force --output assets/img/logo-mark.png /tmp/logo-880.png
```

If you ever replace the logo, run it through this before committing. The unoptimised
1.1 MB original is in the git history.
