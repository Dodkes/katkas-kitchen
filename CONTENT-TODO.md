# Before launch — every invented value, and where it lives

Everything below was made up so the site would look finished. All of it needs replacing.
Sorted roughly by how much damage it does if missed.

---

## 1. Blockers — the site is broken or misleading without these

### Phone number
`0491 570 006` — appears in **all 11 pages** (top bar, footer, `LocalBusiness` JSON-LD,
contact page) and in the error message in `assets/js/site.js`.

This is deliberately taken from the range ACMA reserves for fiction and drama
(0491 570 006 – 0491 570 156), so it cannot ring a real person while the site is in draft.
Replace with Katka's real number in both the display text (`0491 570 006`) and the
`tel:+61491570006` links.

```bash
grep -rln '0491 570 006' --include='*.html' --include='*.js' .
```

### Enquiry form does nothing
`contact/index.html` — the form posts to `https://formspree.io/f/REPLACE_ME`. While
`REPLACE_ME` is present, `assets/js/site.js` deliberately stays out of the way, so the
form will not work at all.

Pick one:
- **Formspree** — create a form, paste its endpoint into `action`. Free for ~50/month.
- **Cloudflare Worker** — if you are already on Cloudflare Pages, a small Worker posting
  to an email API keeps everything on your own domain.

Test it end to end and confirm a real email lands in `info@katkaskitchen.com.au`
before you announce the site.

### ABN
`00 000 000 000` — footer of all 11 pages, plus `privacy/index.html`.
A `.com.au` domain requires an Australian presence, so Katka's real ABN exists — use it.

### Social media links
`https://www.instagram.com/katkaskitchen.au` and
`https://www.facebook.com/katkaskitchen.au` — footer of all 11 pages, the contact page,
and `sameAs` in the `LocalBusiness` JSON-LD.

**These handles are guesses and may belong to someone else.** Either point them at the
real accounts or delete the links and the `sameAs` entries entirely. A wrong `sameAs`
tells Google that another person's Instagram account is Katka's business.

---

## 2. Legal and compliance

### Fake testimonials — remove or replace
`index.html`, the "What people say" section. Three invented quotes, each marked
`Placeholder — replace`, inside a `.draft-note` warning box.

Fabricated testimonials breach the Australian Consumer Law and the ACCC actively
prosecutes it. Either paste in real Google reviews (with the reviewer's first name) or
delete the whole `<section>`. Do not leave invented quotes on a live site.

No `AggregateRating` structured data was added anywhere, on purpose — marking up review
scores that do not exist is both a Google penalty and a false claim.

### Privacy policy
`privacy/index.html` — written as a plausible starting point and dated *September 2026*.
Have it checked against Katka's actual obligations under the Privacy Act, and update the
date. It currently states no tracking cookies are set, which is true of the code as
shipped — if you add analytics that sets cookies, that sentence stops being true.

### Food business registration
Not a website item, but the bigger one: selling food from a home kitchen in Queensland
requires a licence from the local council, and the rules differ by state. Worth
confirming Katka's setup is registered before driving traffic to the site.

### Allergen wording
The `.allergen` box on each product page says Katka cannot guarantee freedom from traces.
Check the wording matches how she actually operates.

---

## 3. All prices are invented

Every figure on the site is a guess at Gold Coast market rates. Locations:

| Page | Where |
|---|---|
| `index.html` | "A few favourites" list |
| `celebration-cakes/` | 6 product tiles + "Sizes and serves" list |
| `wedding-cakes/` | 6 product tiles |
| `slovak-desserts/` | 6 product tiles + "Also on the tray" list |
| `pastries-and-bread/` | 6 product tiles + "Bread" list |
| `faq/` | "How much does a cake cost?" |

Also invented: the **30% deposit**, the **$45 tasting box** credited against the booking,
and every **notice period** (two weeks for cakes, Thursday for weekend bread, six to nine
months for weddings). These appear on product pages, the FAQ and the contact page — make
them match how Katka actually wants to work, then keep them consistent.

---

## 4. Business details to confirm

- **Opening hours** — invented as Tue–Fri 9–5, Sat 8–1, closed Sun/Mon. In the footer of
  every page, `contact/index.html`, and `openingHoursSpecification` in the JSON-LD.
- **Postcode `4217`** (Surfers Paradise) — in the `PostalAddress` JSON-LD on `index.html`
  and `contact/index.html`. Set the real one. No street address is published anywhere,
  which is the right call for a home kitchen; Google Business Profile handles the
  address privately.
- **Product range** — the six items per category are Katka's likely repertoire, not a
  confirmed menu. Delete what she does not make. Anything left on the site is something
  a customer can order.

---

## 5. Content Katka should write herself

- **`about/index.html`** — the grandmother, the walnut grinder, the recipe notebook. It is
  written to be plausible and it is not her story. This is the page visitors trust most
  and the one Google reads for E-E-A-T signals, so it is worth her own words.
- **`index.html`** — the "A Slovak kitchen that moved to Queensland" section repeats the
  same invented backstory.

---

## 6. Photographs

`gallery/index.html` plus every product tile uses decorative folk medallions instead of
photos. They are designed to look intentional rather than broken, so the site can launch
without them — but **good photographs of the actual baking will do more for enquiries
than anything else on this list.**

Ten to fifteen shots is enough: three or four cakes, a sliced medovník showing the layers,
a tray of buchty, a sweet table, and one of Katka in her kitchen for the About page.
Daylight near a window, no flash. See the "Adding real photos" section of `README.md`
for the markup and the WebP conversion command.

---

## Quick pre-launch checklist

- [ ] Real phone number everywhere
- [ ] Form endpoint wired up and tested to a real inbox
- [ ] Real ABN
- [ ] Social links correct, or removed along with `sameAs`
- [ ] Invented testimonials removed or replaced with real reviews
- [ ] Prices, deposit and notice periods confirmed
- [ ] Opening hours and postcode confirmed
- [ ] About page rewritten by Katka
- [ ] Privacy policy reviewed and dated
- [ ] Delete every `.draft-note` box (`grep -rn 'draft-note' --include='*.html' .`)
- [ ] Google Business Profile created and verified
- [ ] Search Console verified, `sitemap.xml` submitted
