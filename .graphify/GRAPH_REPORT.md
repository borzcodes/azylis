# Graph Report - .  (2026-09-13)

## Corpus Check
- Large corpus: 1691 files · ~11,901,954 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder, or use --no-semantic to run AST-only.

## Summary
- 247 nodes · 332 edges · 31 communities detected
- Extraction: 83% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 54 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output
- Edge kinds: conceptually_related_to: 131 · contains: 87 · calls: 55 · MODIFIES: 25 · semantically_similar_to: 15 · references: 8 · ON_BRANCH: 6 · PARENT_OF: 5


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 1691 · Candidates: 1798
- Excluded: 0 untracked · 0 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `e3428bf`
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

### Community 0 - "Page Sections & Layout"
Cohesion: 0.10
Nodes (24): main, 5981771 Azylis eyewear site, 754eccc 'updating the site structure', 810e102 'implement the new animations and new pictures', e3428bf 'fixing mobile view', ef225b3 'implementing real products', ef3b9d6 'implementing the rest of the categories', apply() (+16 more)

### Community 1 - "Scroll Animation Engine (script.js)"
Cohesion: 0.13
Nodes (23): args, CATS, COLOUR_KEYS, COLOURS, DATA_FILE, decode(), fetchText(), fs (+15 more)

### Community 2 - "Documentation Cross-References (README)"
Cohesion: 0.25
Nodes (16): add(), badge(), clear(), close(), count(), esc(), keyOf(), money() (+8 more)

### Community 3 - "FitX-01 Photo (Clear Frame, Woman)"
Cohesion: 0.27
Nodes (5): esc(), fillRecap(), itemRow(), renderBag(), thumb()

### Community 4 - "Reel-06 Photo (Cat-Eye, Gold Jewelry)"
Cohesion: 0.20
Nodes (10): Graphify Knowledge Graph Config, Azylis README Overview, i18n.js (README entry), index.html (README entry), product.html (README entry), product.js (README entry), script.js (README entry), shop.html (README entry) (+2 more)

### Community 5 - "Men's Sunglasses Category Photo"
Cohesion: 0.29
Nodes (8): Transparent/Clear Frame Style, Dark Tinted Lenses, Female Model with Long Caramel Hair, Fitx-01 Product Lifestyle Photo, Small Stud Earrings, Dark Studio Background, Clear Square-Frame Sunglasses, Cream Lace Turtleneck Top

### Community 6 - "Dev Server (dev-server.js)"
Cohesion: 0.36
Nodes (8): Brown Utility Jacket Outfit, Tortoiseshell Cat-Eye Sunglasses, Chin-Resting Editorial Pose, Female Model Wearing Sunglasses, Gold Bangle, Ring and Hoop Earring, Reel 06 Lifestyle Photo, Urban Stone Steps Setting, Reel Content Series (Social/Lifestyle)

### Community 7 - "Fit-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.29
Nodes (7): Azylis Brand Marking, Men's Eyewear Category, Bronze/Tortoise-Tone Acetate Frame, Geometric Square Frame Shape, Olive-Green Tinted Lenses, Bearded Male Model, Wavy Hair, Smart-Casual Outfit, Men's Sunglasses (Product Photo)

### Community 8 - "FitX-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.29
Nodes (6): fs, http, path, port, root, types

### Community 9 - "FitX-03 Photo (Car Scene, Amber Sunglasses)"
Cohesion: 0.48
Nodes (7): Beige Tailored Suit, Editorial Fashion/Lifestyle Photo, Bearded Male Model in Suit, Navy Polka-Dot Tie, Formal Menswear Outfit Styling, Rimless Blue-Tinted Sunglasses, Light Blue Striped Dress Shirt

### Community 10 - "Frame Angle Product Shot"
Cohesion: 0.48
Nodes (7): Beige Tailored Suit, Formal Menswear Styling Concept, Eyewear Lifestyle Product Photography, Bearded Man Model, Navy Polka-Dot Tie, Rimless Blue-Tint Sunglasses, Light Blue Striped Dress Shirt

### Community 11 - "Frame Front Product Shot"
Cohesion: 0.43
Nodes (7): Wrist Bracelet Accessory, Car Interior Sunset Scene, Golden Hour Dusk Lighting Aesthetic, FitX-03 Product Lifestyle Photo, Male Model with Goatee, Maroon Knit Sweater, Round Amber-Tinted Sunglasses

### Community 12 - "Reel-01 Photo (Urban, Clear Glasses)"
Cohesion: 0.29
Nodes (7): Azylis Tortoiseshell Round Frame (Angled Rear View), Metal Barrel Hinge Detail, Rear Three-Quarter Product Angle, Round Lens Shape, Neutral Grey Studio Backdrop, Temple Arm Engraving, Tortoiseshell Acetate Pattern

### Community 13 - "Wear-01 Photo (Wraparound Sunglasses)"
Cohesion: 0.33
Nodes (7): Temple Engraving Branding, Azylis Eyewear Frame (Front View), Keyhole-Style Nose Bridge, Layered Acetate Temple Arms, Folded/Closed Presentation Pose, Round/Panto Lens Shape, Tortoiseshell Acetate Pattern

### Community 14 - "Translation Engine (i18n.js)"
Cohesion: 0.38
Nodes (7): Navy Ribbed Knit Sweater Styling, Clear/Transparent Acetate Eyeglasses, Male Model Close-Up Portrait, Natural Sunlight / Golden Hour Lighting, Outdoor Urban Bridge/Overpass Setting, Reel/Social Content Series (Lifestyle Eyewear), Round/Panto Frame Shape

### Community 15 - "Reel-02 Photo (Blazer, Two-Tone Sunglasses)"
Cohesion: 0.47
Nodes (6): Azylis Eyewear Brand, Model Wearing Sunglasses Lifestyle Photo, Male Model with Short Ginger Hair, Checked Houndstooth Blazer Outfit, Neutral Studio Backdrop, Black Angular Wraparound Sunglasses

### Community 16 - "Reel-03 Photo (Framing Gesture)"
Cohesion: 0.53
Nodes (4): choose(), paintGallery(), paintMain(), priceHtml()

### Community 17 - "Store-01 Photo (Trench Coat, Aviators)"
Cohesion: 0.47
Nodes (6): Black Blazer with Satin Top, Layered Ear Cuff and Stud Earrings, Editorial Close-Up Bust Shot Style, Female Model (Close-Up Portrait), Reel Content Series (azylis), Round Two-Tone Sunglasses

### Community 18 - "Women's Lenses Category Photo"
Cohesion: 0.47
Nodes (6): Black Square-Frame Sunglasses (Reel 03), Director's Frame Hand Gesture, Male Model (Reel 03), Outdoor Rocky/Desert Backdrop, Frame Gesture Selfie with Sunglasses (Reel 03), Reel Content Series (Azylis)

### Community 19 - "Women's Sunglasses Category Photo"
Cohesion: 0.50
Nodes (5): Azylis Eyewear Brand, Editorial Fashion Photography Style, Model Wearing Clear-Frame Aviator Sunglasses, Clear Acetate Aviator Sunglasses (Dark Lenses), Dark Navy Trench Coat Styling

### Community 20 - "Clip-On Lens Category Photo"
Cohesion: 0.50
Nodes (5): Category Lenses Women Photo, Lifestyle Outdoor Photography Style, Minimalist Casual Model Styling, Round Black-Rim Eyeglasses, Women's Eyewear Category

### Community 21 - "Reel-04 Photo (Handbag, Cat-Eye Sunglasses)"
Cohesion: 0.50
Nodes (5): Black Acetate Frame, Cat-Eye / Oval Frame Style, Luxury Lifestyle Styling (Coat, Leather Bag, Gold Jewelry), Cat-Eye Sunglasses (Women's) Product Photo, Women's Eyewear Category

### Community 22 - "Wear-02 Photo (Leather Jacket)"
Cohesion: 0.60
Nodes (5): Dark Clip-On Sun Lens Attachment, Close-Up Hand-Holding Product Composition, Business-Casual Lifestyle Styling (Suit, Male Model), Clip-On Sunglasses Product Photo, Tortoiseshell Round Eyeglass Frame

### Community 23 - "Men's Lenses Category Photo"
Cohesion: 0.60
Nodes (5): Brown Leather Tote Bag, Reel 04 Lifestyle Photo, Female Model, Warm Neutral Editorial Aesthetic, Dark Oval Cat-Eye Sunglasses

### Community 24 - "Moss Frame Color Variant"
Cohesion: 0.60
Nodes (5): Close-Up Editorial Fashion Portrait Style, Black Leather Jacket Outfit, Woman Wearing Sunglasses Portrait, Female Model with Wavy Brown Hair, Square Sunglasses (Black, Green Lenses)

### Community 25 - "Midnight Frame Color Variant"
Cohesion: 0.50
Nodes (4): Men's Eyewear Category, Outdoor Lifestyle Photography Style, Men's Clear Acetate Eyeglasses, Transparent Frame Design

### Community 26 - "Fit-01 Photo (Aviator Sunglasses)"
Cohesion: 0.50
Nodes (4): Acetate Frame Material, Round/Panto Frame Shape, Green Tortoiseshell Pattern, Moss Frame Color Variant

### Community 27 - "Reel-05 Photo (Green Geometric Sunglasses)"
Cohesion: 0.67
Nodes (4): Acetate Frame Material, Round/Panto Frame Shape, Dark Tortoiseshell Acetate Pattern, Midnight Frame Color Variant

### Community 28 - "Product Page Rendering (product.js)"
Cohesion: 0.67
Nodes (4): Clear-Frame Aviator Sunglasses, Fit/Try-On Demonstration Photo, Lifestyle Fashion Portrait Concept, Woman Model Wearing Sunglasses

### Community 29 - "Site Favicon"
Cohesion: 0.50
Nodes (4): AZYLIS Branded Green-Tinted Geometric Sunglasses, Beige Shirt with Navy Contrast Collar, Close-Up Lifestyle Portrait Content Style, Smiling Male Model Wearing Sunglasses

### Community 30 - "Community 30"
Cohesion: 1.00
Nodes (1): Favicon Eyewear Lens Icon

## Ambiguous Edges - Review These
- `Graphify Knowledge Graph Config` → `Azylis README Overview`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **69 isolated node(s):** `http`, `fs`, `path`, `root`, `port` (+64 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 30`** (1 nodes): `Favicon Eyewear Lens Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Graphify Knowledge Graph Config` and `Azylis README Overview`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What connects `http`, `fs`, `path` to the rest of the system?**
  _69 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Sections & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.10317460317460317 - nodes in this community are weakly interconnected._
- **Should `Scroll Animation Engine (script.js)` be split into smaller, more focused modules?**
  _Cohesion score 0.12666666666666668 - nodes in this community are weakly interconnected._