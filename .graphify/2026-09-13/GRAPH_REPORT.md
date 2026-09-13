# Graph Report - .  (2026-09-13)

## Corpus Check
- Large corpus: 1689 files · ~11,901,118 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 246 nodes · 328 edges · 32 communities detected
- Extraction: 83% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 54 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output
- Edge kinds: conceptually_related_to: 131 · contains: 87 · calls: 55 · MODIFIES: 23 · semantically_similar_to: 15 · references: 8 · ON_BRANCH: 5 · PARENT_OF: 4


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 1689 · Candidates: 1793
- Excluded: 5 untracked · 0 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `ef3b9d6`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `render()` - 10 edges
2. `add()` - 7 edges
3. `parseProducts()` - 6 edges
4. `Azylis README Overview` - 6 edges
5. `Men's Sunglasses (Product Photo)` - 6 edges
6. `Azylis Tortoiseshell Round Frame (Angled Rear View)` - 6 edges
7. `Azylis Eyewear Frame (Front View)` - 6 edges
8. `remove()` - 5 edges
9. `badge()` - 5 edges
10. `run()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Graphify Knowledge Graph Config` --conceptually_related_to--> `Azylis README Overview`  [AMBIGUOUS]
  CLAUDE.md → README.md

## Hyperedges (group relationships)
- **Three-Beat Scroll Stage Pattern** — index_film, index_hero_copy, index_clarity_layer, index_reel [EXTRACTED 0.90]
- **Fit Index Single-DOM-Swap Pattern** — index_fitx_items, index_fitx_steps, index_fitx_section [EXTRACTED 0.90]
- **Four Products Repeated Across Every Shelf** — index_bestsellers_shelf, index_arrivals_shelf, index_sale_shelf [INFERRED 0.75]

## Communities

### Community 2 - "Documentation Cross-References (README)"
Cohesion: 0.25
Nodes (16): write(), num(), money(), esc(), keyOf(), count(), total(), add() (+8 more)

### Community 1 - "Scroll Animation Engine (script.js)"
Cohesion: 0.11
Nodes (25): fs, path, ROOT, OUT_DIR, DATA_FILE, CATS, COLOURS, args (+17 more)

### Community 3 - "FitX-01 Photo (Clear Frame, Woman)"
Cohesion: 0.27
Nodes (5): esc(), thumb(), itemRow(), renderBag(), fillRecap()

### Community 8 - "FitX-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.29
Nodes (6): http, fs, path, root, port, types

### Community 0 - "Page Sections & Layout"
Cohesion: 0.11
Nodes (18): remember(), lookup(), textNodes(), apply(), readScroll(), render(), tick(), kick() (+10 more)

### Community 16 - "Reel-03 Photo (Framing Gesture)"
Cohesion: 0.53
Nodes (4): priceHtml(), paintGallery(), paintMain(), choose()

### Community 30 - "Community 30"
Cohesion: 0.83
Nodes (3): esc(), priceHtml(), card()

### Community 4 - "Reel-06 Photo (Cat-Eye, Gold Jewelry)"
Cohesion: 0.20
Nodes (10): Graphify Knowledge Graph Config, Azylis README Overview, index.html (README entry), shop.html (README entry), product.html (README entry), script.js (README entry), product.js (README entry), shop.js (README entry) (+2 more)

### Community 22 - "Wear-02 Photo (Leather Jacket)"
Cohesion: 0.60
Nodes (5): Clip-On Sunglasses Product Photo, Tortoiseshell Round Eyeglass Frame, Dark Clip-On Sun Lens Attachment, Business-Casual Lifestyle Styling (Suit, Male Model), Close-Up Hand-Holding Product Composition

### Community 25 - "Midnight Frame Color Variant"
Cohesion: 0.50
Nodes (4): Men's Clear Acetate Eyeglasses, Transparent Frame Design, Men's Eyewear Category, Outdoor Lifestyle Photography Style

### Community 20 - "Clip-On Lens Category Photo"
Cohesion: 0.50
Nodes (5): Category Lenses Women Photo, Round Black-Rim Eyeglasses, Women's Eyewear Category, Lifestyle Outdoor Photography Style, Minimalist Casual Model Styling

### Community 31 - "Community 31"
Cohesion: 1.00
Nodes (1): Favicon Eyewear Lens Icon

### Community 7 - "Fit-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.29
Nodes (7): Men's Sunglasses (Product Photo), Men's Eyewear Category, Geometric Square Frame Shape, Olive-Green Tinted Lenses, Bronze/Tortoise-Tone Acetate Frame, Azylis Brand Marking, Bearded Male Model, Wavy Hair, Smart-Casual Outfit

### Community 21 - "Reel-04 Photo (Handbag, Cat-Eye Sunglasses)"
Cohesion: 0.50
Nodes (5): Cat-Eye Sunglasses (Women's) Product Photo, Cat-Eye / Oval Frame Style, Black Acetate Frame, Women's Eyewear Category, Luxury Lifestyle Styling (Coat, Leather Bag, Gold Jewelry)

### Community 28 - "Product Page Rendering (product.js)"
Cohesion: 0.67
Nodes (4): Woman Model Wearing Sunglasses, Clear-Frame Aviator Sunglasses, Fit/Try-On Demonstration Photo, Lifestyle Fashion Portrait Concept

### Community 9 - "FitX-03 Photo (Car Scene, Amber Sunglasses)"
Cohesion: 0.48
Nodes (7): Bearded Male Model in Suit, Rimless Blue-Tinted Sunglasses, Beige Tailored Suit, Navy Polka-Dot Tie, Light Blue Striped Dress Shirt, Editorial Fashion/Lifestyle Photo, Formal Menswear Outfit Styling

### Community 5 - "Men's Sunglasses Category Photo"
Cohesion: 0.29
Nodes (8): Fitx-01 Product Lifestyle Photo, Female Model with Long Caramel Hair, Clear Square-Frame Sunglasses, Transparent/Clear Frame Style, Dark Tinted Lenses, Cream Lace Turtleneck Top, Dark Studio Background, Small Stud Earrings

### Community 10 - "Frame Angle Product Shot"
Cohesion: 0.48
Nodes (7): Bearded Man Model, Rimless Blue-Tint Sunglasses, Beige Tailored Suit, Navy Polka-Dot Tie, Light Blue Striped Dress Shirt, Formal Menswear Styling Concept, Eyewear Lifestyle Product Photography

### Community 11 - "Frame Front Product Shot"
Cohesion: 0.43
Nodes (7): FitX-03 Product Lifestyle Photo, Round Amber-Tinted Sunglasses, Male Model with Goatee, Car Interior Sunset Scene, Maroon Knit Sweater, Wrist Bracelet Accessory, Golden Hour Dusk Lighting Aesthetic

### Community 12 - "Reel-01 Photo (Urban, Clear Glasses)"
Cohesion: 0.29
Nodes (7): Azylis Tortoiseshell Round Frame (Angled Rear View), Tortoiseshell Acetate Pattern, Round Lens Shape, Rear Three-Quarter Product Angle, Metal Barrel Hinge Detail, Temple Arm Engraving, Neutral Grey Studio Backdrop

### Community 27 - "Reel-05 Photo (Green Geometric Sunglasses)"
Cohesion: 0.67
Nodes (4): Midnight Frame Color Variant, Dark Tortoiseshell Acetate Pattern, Round/Panto Frame Shape, Acetate Frame Material

### Community 13 - "Wear-01 Photo (Wraparound Sunglasses)"
Cohesion: 0.33
Nodes (7): Azylis Eyewear Frame (Front View), Tortoiseshell Acetate Pattern, Round/Panto Lens Shape, Keyhole-Style Nose Bridge, Layered Acetate Temple Arms, Temple Engraving Branding, Folded/Closed Presentation Pose

### Community 26 - "Fit-01 Photo (Aviator Sunglasses)"
Cohesion: 0.50
Nodes (4): Moss Frame Color Variant, Green Tortoiseshell Pattern, Round/Panto Frame Shape, Acetate Frame Material

### Community 14 - "Translation Engine (i18n.js)"
Cohesion: 0.38
Nodes (7): Male Model Close-Up Portrait, Clear/Transparent Acetate Eyeglasses, Round/Panto Frame Shape, Outdoor Urban Bridge/Overpass Setting, Natural Sunlight / Golden Hour Lighting, Navy Ribbed Knit Sweater Styling, Reel/Social Content Series (Lifestyle Eyewear)

### Community 17 - "Store-01 Photo (Trench Coat, Aviators)"
Cohesion: 0.47
Nodes (6): Round Two-Tone Sunglasses, Female Model (Close-Up Portrait), Editorial Close-Up Bust Shot Style, Layered Ear Cuff and Stud Earrings, Black Blazer with Satin Top, Reel Content Series (azylis)

### Community 18 - "Women's Lenses Category Photo"
Cohesion: 0.47
Nodes (6): Frame Gesture Selfie with Sunglasses (Reel 03), Male Model (Reel 03), Black Square-Frame Sunglasses (Reel 03), Director's Frame Hand Gesture, Outdoor Rocky/Desert Backdrop, Reel Content Series (Azylis)

### Community 23 - "Men's Lenses Category Photo"
Cohesion: 0.60
Nodes (5): Reel 04 Lifestyle Photo, Dark Oval Cat-Eye Sunglasses, Female Model, Brown Leather Tote Bag, Warm Neutral Editorial Aesthetic

### Community 29 - "Site Favicon"
Cohesion: 0.50
Nodes (4): Smiling Male Model Wearing Sunglasses, AZYLIS Branded Green-Tinted Geometric Sunglasses, Beige Shirt with Navy Contrast Collar, Close-Up Lifestyle Portrait Content Style

### Community 6 - "Dev Server (dev-server.js)"
Cohesion: 0.36
Nodes (8): Reel 06 Lifestyle Photo, Tortoiseshell Cat-Eye Sunglasses, Female Model Wearing Sunglasses, Gold Bangle, Ring and Hoop Earring, Brown Utility Jacket Outfit, Urban Stone Steps Setting, Chin-Resting Editorial Pose, Reel Content Series (Social/Lifestyle)

### Community 19 - "Women's Sunglasses Category Photo"
Cohesion: 0.50
Nodes (5): Model Wearing Clear-Frame Aviator Sunglasses, Clear Acetate Aviator Sunglasses (Dark Lenses), Editorial Fashion Photography Style, Dark Navy Trench Coat Styling, Azylis Eyewear Brand

### Community 15 - "Reel-02 Photo (Blazer, Two-Tone Sunglasses)"
Cohesion: 0.47
Nodes (6): Model Wearing Sunglasses Lifestyle Photo, Black Angular Wraparound Sunglasses, Male Model with Short Ginger Hair, Checked Houndstooth Blazer Outfit, Neutral Studio Backdrop, Azylis Eyewear Brand

### Community 24 - "Moss Frame Color Variant"
Cohesion: 0.60
Nodes (5): Woman Wearing Sunglasses Portrait, Square Sunglasses (Black, Green Lenses), Female Model with Wavy Brown Hair, Black Leather Jacket Outfit, Close-Up Editorial Fashion Portrait Style

## Ambiguous Edges - Review These
- `Graphify Knowledge Graph Config` → `Azylis README Overview`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **69 isolated node(s):** `http`, `fs`, `path`, `root`, `port` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 31`** (1 nodes): `Favicon Eyewear Lens Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Graphify Knowledge Graph Config` and `Azylis README Overview`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What connects `http`, `fs`, `path` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Scroll Animation Engine (script.js)` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._
- **Should `Page Sections & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._