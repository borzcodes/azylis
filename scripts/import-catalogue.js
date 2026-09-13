/* ============================================================
   Azylis — catalogue importer
   Pulls a WooCommerce category from the current azylis.ma site,
   downloads each product's photo into assets/catalog/ and writes
   catalogue-data.js, which shop.js and product.js read at runtime.

     node scripts/import-catalogue.js solaire-hommes
     node scripts/import-catalogue.js solaire-femmes optique-hommes
     node scripts/import-catalogue.js --galleries

   Re-running merges by slug, so categories can be imported one at a
   time and a product that sits in two categories keeps both tags.
   --galleries visits every product page already in the data and
   downloads its extra photos (skipping products that have them).
   ============================================================ */

"use strict";

const fs = require("fs");
const path = require("path");

const SITE = "https://azylis.ma";
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "assets", "catalog");
const DATA_FILE = path.join(ROOT, "catalogue-data.js");

/* their category slugs → ours */
const CATS = {
  "solaire-hommes": "sun-men",
  "solaire-femmes": "sun-women",
  "optique-hommes": "lenses-men",
  "optique-femmes": "lenses-women",
  "lunettes-de-vue-hommes": "lenses-men",
  "lunettes-de-vue-femmes": "lenses-women",
  "clip-on": "clip-on"
};

/* the last word(s) of a title that name the colourway */
const COLOURS = new Set([
  "BLACK", "BLUE", "BROWN", "GREY", "GRAY", "GOLD", "GREEN", "VERDE", "ORANGE",
  "RED", "PURPLE", "PINK", "YELLOW", "OLIVE", "TIGRED", "TRANS", "SAUMON", "SKY",
  "SAHARA", "TURQUOISE", "ELECTRO", "DARK", "ORNÉ", "ORNE", "SILVER", "WHITE",
  "BEIGE", "SOLAR", "PONT"
]);

const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node scripts/import-catalogue.js <woocommerce-category> [...]");
  process.exit(1);
}

const decode = (s) => s
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#8217;|&rsquo;/g, "’")
  .replace(/&ldquo;|&rdquo;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).trim();

const titleCase = (s) => s.toLowerCase().replace(/(^|[\s-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase());

const slugify = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function splitName(title) {
  const words = title.replace(/\s+/g, " ").trim().split(" ");
  const colour = [];
  while (words.length > 1 && COLOURS.has(words[words.length - 1].toUpperCase())) {
    colour.unshift(words.pop());
  }
  return { family: titleCase(words.join(" ")), color: colour.length ? titleCase(colour.join(" ")) : "" };
}

/* Photo sizes. A card renders at ~350px, so 1024 is three times that and
   stays crisp on a retina screen; the product page shows the photo large,
   so it gets the original file — the one their site's lightbox opens. */
const CARD_SIZE = 1024;
const GALLERY_SIZE = "original";

function pickImage(srcset, src, want) {
  if (!srcset) return src;
  const cands = srcset.split(",").map((c) => c.trim().split(/\s+/))
    .map(([u, w]) => ({ u, w: parseInt(w, 10) || 0 }))
    .filter((c) => c.u)
    .sort((a, b) => b.w - a.w);
  if (want === "original") return cands[0].u;
  const exact = cands.find((c) => c.w === want);
  if (exact) return exact.u;
  const up = cands.filter((c) => c.w > want).pop();   // the smallest size above
  return up ? up.u : cands[0].u;
}

async function fetchText(url) {
  const r = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (azylis importer)" } });
  if (!r.ok) throw new Error(r.status + " " + url);
  return r.text();
}

function parseProducts(html) {
  const out = [];
  const blocks = html.split(/<li class="(?=[^"]*type-product)/).slice(1);
  for (const block of blocks) {
    const classes = block.slice(0, block.indexOf('"'));
    const title = /woocommerce-loop-product__title">([^<]+)</.exec(block);
    const link = /href="https?:\/\/azylis\.ma\/product\/([^/"]+)\/?"/.exec(block);
    const tag = /<img[^>]*>/.exec(block);
    const src = tag && /\ssrc="([^"]+)"/.exec(tag[0]);
    const set = tag && /\ssrcset="([^"]+)"/.exec(tag[0]);
    const prices = [...block.matchAll(/<bdi>([\d.,]+)&nbsp;/g)].map((m) => parseFloat(m[1].replace(/,/g, "")));
    if (!title || !link || !src || !prices.length) continue;

    const cats = [...classes.matchAll(/product_cat-([\w-]+)/g)].map((m) => CATS[m[1]]).filter(Boolean);
    const onSale = /<del/.test(block) && prices.length > 1;
    const name = decode(title[1]).replace(/\s+/g, " ");
    const { family, color } = splitName(name);

    out.push({
      wooSlug: link[1],
      name: titleCase(name),
      family, color,
      price: onSale ? prices[1] : prices[0],
      oldPrice: onSale ? prices[0] : null,
      remote: pickImage(set && set[1], src[1], CARD_SIZE),
      cats: [...new Set(cats)]
    });
  }
  return out;
}

async function download(url, file) {
  if (fs.existsSync(file)) return "kept";
  const r = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (azylis importer)" } });
  if (!r.ok) throw new Error(r.status);
  fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
  return "saved";
}

function readData() {
  if (!fs.existsSync(DATA_FILE)) return [];
  const m = /=\s*(\[[\s\S]*\]);\s*$/.exec(fs.readFileSync(DATA_FILE, "utf8"));
  return m ? JSON.parse(m[1]) : [];
}

function writeData(list) {
  const banner =
    "/* Generated by scripts/import-catalogue.js — do not edit by hand.\n" +
    "   " + list.length + " products, last import " + new Date().toISOString().slice(0, 10) + ". */\n";
  fs.writeFileSync(DATA_FILE, banner + "window.AZYLIS_CATALOGUE = " + JSON.stringify(list, null, 1) + ";\n");
}

/* Each gallery block: the photo at full size, and whether it is the featured
   image — WooCommerce marks that one wp-post-image, and it goes first. */
function parseGallery(html) {
  const out = [];
  const re = /woocommerce-product-gallery__image[\s\S]*?(<img[^>]*>)/g;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[1];
    const src = /\ssrc="([^"]+)"/.exec(tag);
    const set = /\ssrcset="([^"]+)"/.exec(tag);
    if (!src) continue;
    const u = pickImage(set && set[1], src[1], GALLERY_SIZE);
    if (out.some((o) => o.u === u)) continue;
    out.push({ u, main: /wp-post-image/.test(tag) });
  }
  return out;
}

/* The description tab holds no text, only an infographic per product
   (protection, size, what is in the box). Same picking rules as photos. */
function parseDetails(html) {
  const i = html.indexOf("woocommerce-Tabs-panel--description");
  if (i < 0) return [];
  const panel = html.slice(i, html.indexOf("</div>", i + 200));
  const out = [];
  const re = /<img[^>]*>/g;
  let m;
  while ((m = re.exec(panel))) {
    const src = /\ssrc="([^"]+)"/.exec(m[0]);
    const set = /\ssrcset="([^"]+)"/.exec(m[0]);
    if (!src) continue;
    const u = pickImage(set && set[1], src[1], GALLERY_SIZE);
    if (!out.includes(u)) out.push(u);
  }
  return out;
}

/* ---------- galleries: every product page, its photos + details ---------- */

async function galleries() {
  const list = readData();
  const todo = list.filter((p) => p.wooSlug && !(p.gallery && p.details));
  console.log(todo.length + " of " + list.length + " products need their gallery or details");

  let pages = 0, saved = 0, failed = 0;
  const queue = todo.slice();
  const workers = Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      try {
        const html = await fetchText(SITE + "/product/" + p.wooSlug + "/");
        pages++;
        /* featured shot first, every one at full size: slug-1, slug-2, … */
        const shots = parseGallery(html).sort((a, b) => (b.main ? 1 : 0) - (a.main ? 1 : 0));
        const gallery = [];
        let n = 0;
        for (const s of shots) {
          const ext = (path.extname(new URL(s.u).pathname) || ".jpg").toLowerCase();
          const file = path.join(OUT_DIR, p.slug + "-" + (++n) + ext);
          const r = await download(s.u, file);
          if (r === "saved") saved++;
          gallery.push("assets/catalog/" + path.basename(file));
        }
        p.gallery = gallery.length ? gallery : [p.img];

        /* the details infographic(s): slug-d1, slug-d2, … */
        const details = [];
        let d = 0;
        for (const u of parseDetails(html)) {
          const ext = (path.extname(new URL(u).pathname) || ".jpg").toLowerCase();
          const file = path.join(OUT_DIR, p.slug + "-d" + (++d) + ext);
          const r = await download(u, file);
          if (r === "saved") saved++;
          details.push("assets/catalog/" + path.basename(file));
        }
        p.details = details;
        if (pages % 25 === 0) console.log("  " + pages + " pages …");
      } catch (e) {
        failed++;
        console.warn("  ! " + p.slug + ": " + e.message);
      }
    }
  });
  await Promise.all(workers);

  writeData(list);
  const withGallery = list.filter((p) => p.gallery).length;
  const photos = list.reduce((n, p) => n + (p.gallery ? p.gallery.length : 0), 0);
  console.log("\n" + withGallery + " products with galleries, " + photos + " photos in all — " +
    saved + " downloaded" + (failed ? ", " + failed + " pages failed" : ""));
}

async function run() {
  if (args[0] === "--galleries") return galleries();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  /* existing data, so a second category merges instead of replacing */
  let existing = [];
  if (fs.existsSync(DATA_FILE)) {
    const m = /=\s*(\[[\s\S]*\]);\s*$/.exec(fs.readFileSync(DATA_FILE, "utf8"));
    if (m) existing = JSON.parse(m[1]);
  }
  const bySlug = new Map(existing.map((p) => [p.slug, p]));

  let found = [];
  for (const cat of args) {
    let page = 1, more = true;
    while (more) {
      const url = SITE + "/product-category/" + cat + "/" + (page > 1 ? "page/" + page + "/" : "");
      process.stdout.write("fetching " + url + " … ");
      const html = await fetchText(url);
      const items = parseProducts(html);
      console.log(items.length + " products");
      found.push(...items);
      more = new RegExp('href="[^"]*/' + cat + "/page/" + (page + 1) + '/"').test(html);
      page++;
    }
  }

  /* one slug per product name; the same product can appear in several categories */
  const taken = new Set(bySlug.keys());
  const seen = new Map();
  for (const p of found) {
    const base = slugify(p.name);
    if (seen.has(p.wooSlug)) continue;
    let slug = base, n = 2;
    while (taken.has(slug) && !(bySlug.get(slug) && bySlug.get(slug).wooSlug === p.wooSlug)) slug = base + "-" + n++;
    taken.add(slug);
    seen.set(p.wooSlug, slug);
    p.slug = slug;
  }

  let saved = 0, kept = 0, failed = 0;
  const queue = [...seen.values()].map((slug) => found.find((p) => p.slug === slug));
  const workers = Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const p = queue.shift();
      const ext = (path.extname(new URL(p.remote).pathname) || ".jpg").toLowerCase();
      const file = path.join(OUT_DIR, p.slug + ext);
      try {
        const r = await download(p.remote, file);
        r === "saved" ? saved++ : kept++;
        p.img = "assets/catalog/" + p.slug + ext;
      } catch (e) {
        failed++;
        p.img = p.remote;          // keep the remote photo rather than lose the product
        console.warn("  ! " + p.slug + ": " + e.message);
      }
      const prev = bySlug.get(p.slug);
      bySlug.set(p.slug, {
        slug: p.slug, wooSlug: p.wooSlug,
        name: p.name, family: p.family, color: p.color,
        price: p.price, oldPrice: p.oldPrice,
        img: p.img,
        gallery: prev ? prev.gallery : undefined,
        details: prev ? prev.details : undefined,
        cats: [...new Set([...(prev ? prev.cats : []), ...p.cats])]
      });
    }
  });
  await Promise.all(workers);

  const list = [...bySlug.values()];
  const banner =
    "/* Generated by scripts/import-catalogue.js — do not edit by hand.\n" +
    "   " + list.length + " products, last import " + new Date().toISOString().slice(0, 10) + ". */\n";
  fs.writeFileSync(DATA_FILE, banner + "window.AZYLIS_CATALOGUE = " + JSON.stringify(list, null, 1) + ";\n");

  console.log("\n" + list.length + " products in catalogue-data.js — " +
    saved + " photos downloaded, " + kept + " already there" + (failed ? ", " + failed + " failed" : ""));
}

run().catch((e) => { console.error(e); process.exit(1); });
