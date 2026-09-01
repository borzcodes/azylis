# Azylis

Eyewear brand site — hand-finished acetate frames, Casablanca.

Static: no build step, no dependencies. Open `index.html`, or serve it locally
(the local server matters for the hero film — see below).

## Run it

```bash
node dev-server.js
```

Then open <http://localhost:4321>.

`dev-server.js` answers HTTP byte-range requests. That is not optional for the
hero: a browser refuses to seek or reliably stream a `<video>` from a server
that ignores `Range`, so opening `index.html` straight off the filesystem, or
serving it with a simpler static server, can leave the film blank.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home — hero film, bento grid, perks, shelves, categories, testimonials, FAQ |
| `shop.html` | Product listing, filtered by `?c=` (`sun-men`, `sun-women`, `lenses-men`, `lenses-women`, `clip-on`) |
| `product.html` | Product detail, selected by `?p=` (`havana-round`, `cat-eye-sun`, `round-metal`, `rim-round-sun`) |

## Scripts

| File | What it does |
|---|---|
| `script.js` | Home scroll engine: the film's 3D transform, section reveals, rails, FAQ |
| `product.js` | Product catalogue + detail page behaviour |
| `shop.js` | Listing grid and category filtering |
| `i18n.js` | EN / FR / AR / ES, keyed off the English source text |
| `styles.css` | Everything |

## Editing

**Motion.** Every number worth arguing about sits in the `TUNE` object at the
top of `script.js` — the film's yaw, pitch, scale and the timing of each
section. `window.Azylis.TUNE` is exposed, so you can change values live in the
console and call `Azylis.render()`.

**Language.** `i18n.js` maps each English string to `[fr, ar, es]`. Add a row
and it applies everywhere, including copy the scripts build at runtime.
Product names, SKUs, prices and people's names are deliberately absent so they
pass through untranslated. Arabic switches the document to RTL.

**Products.** Two lists, kept separate on purpose: `CATALOGUE` in `product.js`
drives the detail pages, `ITEMS` in `shop.js` drives the listing. Adding a
product means touching both.

## Known gaps

- **Photography is placeholder.** `wear-01.jpg` (447×447) and `wear-02.jpg`
  (310×400) are too small to enlarge, and both show sunglasses — which reads
  oddly on the optical categories.
- **Four products across every shelf**, so frames repeat between sections with
  different tags.
- **Sale prices are card-only.** The 50% off shelf shows a struck-through
  price, but the product page still shows full price — the catalogue has one
  price per product.
- **Copy is unreviewed by a native speaker**, particularly the Arabic and
  French. Delivery windows, refund timings and the warranty in the FAQ are
  invented placeholders — check them against your real policy before launch.
- **Social links in the footer are `#` placeholders.**
- **RTL had a structural pass, not a visual one.** Mirroring is handled; expect
  to nudge some spacing once you look at Arabic on a real screen.
