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
| `index.html` | Home — the pinned film stage, the fit index, the studio, perks, shelves, categories, testimonials, FAQ |
| `shop.html` | Product listing, filtered by `?c=` (`sun-men`, `sun-women`, `lenses-men`, `lenses-women`, `clip-on`) |
| `product.html` | Product detail, selected by `?p=` (`havana-round`, `cat-eye-sun`, `round-metal`, `rim-round-sun`) |

## Scripts

| File | What it does |
|---|---|
| `script.js` | Home scroll engine: the stage's three beats, section reveals, rails, FAQ |
| `product.js` | Product catalogue + detail page behaviour |
| `shop.js` | Listing grid and category filtering |
| `i18n.js` | EN / FR / AR / ES, keyed off the English source text |
| `styles.css` | Everything |

## The stage

The top of the home page is one 460vh section with a `position: sticky` pin, so
three beats play out over a single scroll without the page appearing to move:

1. **Hero** — title and buttons over the film.
2. **Clarity** — the copy slides in on the left while six cards grow out of a
   point on the right and settle into a stack.
3. **The reel** — the same six cards fan out across the full width and sweep
   right to left, with the caption set into opposite corners.

The cards are one set, not three. Each has three recorded arrangements —
`origin`, `deck` and `reel`, in `CARDS` in `script.js` — and scroll
interpolates between them, which is why the deck becomes the gallery rather
than one fading over the other. Positions are viewport percentages so the
composition holds at any window size.

The film runs under all three beats and never stops; it loops on its own and
scroll only turns it in space.

## The fit index

Section two is built on one device: a two-part label parts in space and a
photographic card drops into the gap between the halves. All three items sit
in the DOM together and only `.is-on` moves between them, so a swap is a
single CSS transition on opacity and a Z translation — the DOM never changes,
which is why the numbered list can drive the stage without a re-render.

Editing it means touching two places that must stay in step: the three
`.fitx-item` blocks in `index.html` and the three `.fitx-step` buttons beside
them. The script pairs them by index and bails out if the counts disagree.

The label halves are separate text nodes, so each translates on its own —
`Face`/`Shape` becomes `Visage`/`Forme`, not a split phrase. Keep them as
words that stand up alone, or the dictionary rows stop being true.

## Scroll-linked assembly

The fit index and the studio section below it do not arrive whole. A section
marked `data-seq` turns its own scroll position into 0–1, and each
`data-seq-part` inside declares the slice it cares about:

```html
<h2 class="visit-title" data-seq-part=".24 .58">Come and try them on</h2>
```

The script writes `--in` (0 to 1) onto that element and stops there; the CSS
decides what the number means — `.seq-up` just fades and lifts, while the
label halves, the card and the studio photo each spend it on their own 3D
move. Every `var(--in, 1)` carries a default of 1, so with the script absent,
or under `prefers-reduced-motion`, the sections render finished.

A section gets `.is-built` once it is fully assembled. That is what holds the
fit index carousel back — its timer runs from the start but a tick does
nothing until the stage exists, so the first swap never fires over a
half-built card.

Sections finish assembling by the time their top reaches the upper eighth of
the screen, so nothing is still moving once you are reading it. That ratio is
the `0.88` in `seqRender`.

## Editing

**Motion.** Every number worth arguing about sits in the `TUNE` object at the
top of `script.js` — the film's yaw, pitch and scale, and where each beat
starts and ends on the 0–1 stage progress. `window.Azylis.TUNE` is exposed, so
you can change values live in the console and call `Azylis.render()`.

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
  oddly on the optical categories. The reel's six photos
  (`reel-01`–`reel-06.jpg`) are real shots and are the strongest imagery on
  the site — the shelves and categories still are not.
- **Four products across every shelf**, so frames repeat between sections with
  different tags.
- **Sale prices are card-only.** The 50% off shelf shows a struck-through
  price, but the product page still shows full price — the catalogue has one
  price per product.
- **Copy is unreviewed by a native speaker**, particularly the Arabic and
  French. Delivery windows, refund timings and the warranty in the FAQ are
  invented placeholders — check them against your real policy before launch.
- **Social links in the footer are `#` placeholders.**
- **The studio section needs a real photograph and real details.**
  `store-01.jpg` is a lifestyle shot standing in for the Casablanca studio —
  it is not the shopfront. The opening hours are invented, and there is no
  street address or map link; add all four before launch.
- **RTL had a structural pass, not a visual one.** Mirroring is handled; expect
  to nudge some spacing once you look at Arabic on a real screen.
