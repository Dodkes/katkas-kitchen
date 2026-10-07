# Before launch — every invented value, and where it lives

Everything below was made up so the site would look finished. All of it needs replacing.
Sorted roughly by how much damage it does if missed.

---

## 1. Blockers — the site is broken or misleading without these

### Phone number — resolved
The fictional placeholder has been replaced with Katka's number (`0404 335 142`) in the
site pages and phone links.

### ABN — resolved
The real ABN (`26 253 605 871`) is now in the footer of every page and on the privacy page.

### Social media links
`https://www.facebook.com/katkaskitchen.au` — footer of all pages and `sameAs` in the
business JSON-LD. Instagram links have been removed from the website.

**The Facebook handle is unconfirmed and may belong to someone else.** Replace it with
the real account or remove its links and `sameAs` entries. A wrong `sameAs` tells Google
that another person's account is Katka's business.

---

## 2. Legal and compliance

### Fake testimonials — removed
The invented testimonial section has been removed from `index.html`.

Only add customer reviews if they are genuine and approved for use.

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
| `slovak-desserts/` | 6 product tiles + "Also on the tray" list |
| `pastries-and-bread/` | 4 pastry product tiles |

Also invented: the **notice periods** (two to three days for dessert boxes, Thursday
for weekend yeast pastries). These appear on product pages and the contact page — make them
match how Katka actually wants to work, then keep them consistent.

---

## 4. Business details to confirm

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

Ten to fifteen shots is enough: a sliced medovník showing the layers,
a tray of buchty, a sweet table, and one of Katka in her kitchen for the About page.
Daylight near a window, no flash. See the "Adding real photos" section of `README.md`
for the markup and the WebP conversion command.

---

## Quick pre-launch checklist

- [ ] Real phone number everywhere
- [ ] Form endpoint wired up and tested to a real inbox
- [x] Real ABN
- [ ] Social links correct, or removed along with `sameAs`
- [x] Invented testimonials removed
- [ ] Prices, deposit and notice periods confirmed
- [ ] Postcode confirmed
- [ ] About page rewritten by Katka
- [ ] Privacy policy reviewed and dated
- [ ] Delete every `.draft-note` box (`grep -rn 'draft-note' --include='*.html' .`)
- [ ] Google Business Profile created and verified
- [ ] Search Console verified, `sitemap.xml` submitted
