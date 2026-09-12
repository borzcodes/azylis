# Graph Report - .  (2026-09-09)

## Corpus Check
- 35 files · ~95,267 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 203 nodes · 223 edges · 30 communities detected
- Extraction: 75% EXTRACTED · 25% INFERRED · 0% AMBIGUOUS · INFERRED: 55 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output
- Edge kinds: conceptually_related_to: 132 · contains: 28 · implements: 22 · semantically_similar_to: 15 · references: 14 · calls: 11 · shares_data_with: 1

## God Nodes (most connected - your core abstractions)
1. `Azylis README Overview` - 7 edges
2. `#stage Scroll Section` - 6 edges
3. `Men's Sunglasses (Product Photo)` - 6 edges
4. `Azylis Tortoiseshell Round Frame (Angled Rear View)` - 6 edges
5. `Azylis Eyewear Frame (Front View)` - 6 edges
6. `Bearded Male Model in Suit` - 5 edges
7. `Bearded Man Model` - 5 edges
8. `Female Model Wearing Sunglasses` - 5 edges
9. `apply()` - 4 edges
10. `onScroll()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Graphify Knowledge Graph Config` --conceptually_related_to--> `Azylis README Overview`  [AMBIGUOUS]
  CLAUDE.md → README.md
- `PDP Sticky Info Column` --conceptually_related_to--> `50% Off Shelf`  [INFERRED]
  product.html → index.html

## Hyperedges (group relationships)
- **Three-Beat Scroll Stage Pattern** — index_film, index_hero_copy, index_clarity_layer, index_reel [EXTRACTED 0.90]
- **Fit Index Single-DOM-Swap Pattern** — index_fitx_items, index_fitx_steps, index_fitx_section [EXTRACTED 0.90]
- **Four Products Repeated Across Every Shelf** — index_bestsellers_shelf, index_arrivals_shelf, index_sale_shelf [INFERRED 0.75]

## Communities

### Community 0 - "Page Sections & Layout"
Cohesion: 0.10
Nodes (22): New Arrivals Shelf, Bestsellers Shelf, Shop by Category Section, Clarity Layer, FAQ Section, Feature Strip, Hero Film (#film / heroVideo), .fitx-item Blocks (+14 more)

### Community 1 - "Scroll Animation Engine (script.js)"
Cohesion: 0.18
Nodes (10): buildDots(), kick(), markDots(), onScroll(), readScroll(), refresh(), render(), show() (+2 more)

### Community 2 - "Documentation Cross-References (README)"
Cohesion: 0.18
Nodes (11): Graphify Knowledge Graph Config, Azylis README Overview, dev-server.js, i18n.js (README entry), index.html (README entry), product.html (README entry), product.js (README entry), script.js (README entry) (+3 more)

### Community 3 - "FitX-01 Photo (Clear Frame, Woman)"
Cohesion: 0.29
Nodes (8): Transparent/Clear Frame Style, Dark Tinted Lenses, Female Model with Long Caramel Hair, Fitx-01 Product Lifestyle Photo, Small Stud Earrings, Dark Studio Background, Clear Square-Frame Sunglasses, Cream Lace Turtleneck Top

### Community 4 - "Reel-06 Photo (Cat-Eye, Gold Jewelry)"
Cohesion: 0.36
Nodes (8): Brown Utility Jacket Outfit, Tortoiseshell Cat-Eye Sunglasses, Chin-Resting Editorial Pose, Female Model Wearing Sunglasses, Gold Bangle, Ring and Hoop Earring, Reel 06 Lifestyle Photo, Urban Stone Steps Setting, Reel Content Series (Social/Lifestyle)

### Community 5 - "Men's Sunglasses Category Photo"
Cohesion: 0.29
Nodes (7): Azylis Brand Marking, Men's Eyewear Category, Bronze/Tortoise-Tone Acetate Frame, Geometric Square Frame Shape, Olive-Green Tinted Lenses, Bearded Male Model, Wavy Hair, Smart-Casual Outfit, Men's Sunglasses (Product Photo)

### Community 6 - "Dev Server (dev-server.js)"
Cohesion: 0.29
Nodes (6): fs, http, path, port, root, types

### Community 7 - "Fit-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.48
Nodes (7): Beige Tailored Suit, Editorial Fashion/Lifestyle Photo, Bearded Male Model in Suit, Navy Polka-Dot Tie, Formal Menswear Outfit Styling, Rimless Blue-Tinted Sunglasses, Light Blue Striped Dress Shirt

### Community 8 - "FitX-02 Photo (Rimless Sunglasses, Suit)"
Cohesion: 0.48
Nodes (7): Beige Tailored Suit, Formal Menswear Styling Concept, Eyewear Lifestyle Product Photography, Bearded Man Model, Navy Polka-Dot Tie, Rimless Blue-Tint Sunglasses, Light Blue Striped Dress Shirt

### Community 9 - "FitX-03 Photo (Car Scene, Amber Sunglasses)"
Cohesion: 0.43
Nodes (7): Wrist Bracelet Accessory, Car Interior Sunset Scene, Golden Hour Dusk Lighting Aesthetic, FitX-03 Product Lifestyle Photo, Male Model with Goatee, Maroon Knit Sweater, Round Amber-Tinted Sunglasses

### Community 10 - "Frame Angle Product Shot"
Cohesion: 0.29
Nodes (7): Azylis Tortoiseshell Round Frame (Angled Rear View), Metal Barrel Hinge Detail, Rear Three-Quarter Product Angle, Round Lens Shape, Neutral Grey Studio Backdrop, Temple Arm Engraving, Tortoiseshell Acetate Pattern

### Community 11 - "Frame Front Product Shot"
Cohesion: 0.33
Nodes (7): Temple Engraving Branding, Azylis Eyewear Frame (Front View), Keyhole-Style Nose Bridge, Layered Acetate Temple Arms, Folded/Closed Presentation Pose, Round/Panto Lens Shape, Tortoiseshell Acetate Pattern

### Community 12 - "Reel-01 Photo (Urban, Clear Glasses)"
Cohesion: 0.38
Nodes (7): Navy Ribbed Knit Sweater Styling, Clear/Transparent Acetate Eyeglasses, Male Model Close-Up Portrait, Natural Sunlight / Golden Hour Lighting, Outdoor Urban Bridge/Overpass Setting, Reel/Social Content Series (Lifestyle Eyewear), Round/Panto Frame Shape

### Community 13 - "Wear-01 Photo (Wraparound Sunglasses)"
Cohesion: 0.47
Nodes (6): Azylis Eyewear Brand, Model Wearing Sunglasses Lifestyle Photo, Male Model with Short Ginger Hair, Checked Houndstooth Blazer Outfit, Neutral Studio Backdrop, Black Angular Wraparound Sunglasses

### Community 14 - "Translation Engine (i18n.js)"
Cohesion: 0.53
Nodes (4): apply(), lookup(), remember(), textNodes()

### Community 15 - "Reel-02 Photo (Blazer, Two-Tone Sunglasses)"
Cohesion: 0.47
Nodes (6): Black Blazer with Satin Top, Layered Ear Cuff and Stud Earrings, Editorial Close-Up Bust Shot Style, Female Model (Close-Up Portrait), Reel Content Series (azylis), Round Two-Tone Sunglasses

### Community 16 - "Reel-03 Photo (Framing Gesture)"
Cohesion: 0.47
Nodes (6): Black Square-Frame Sunglasses (Reel 03), Director's Frame Hand Gesture, Male Model (Reel 03), Outdoor Rocky/Desert Backdrop, Frame Gesture Selfie with Sunglasses (Reel 03), Reel Content Series (Azylis)

### Community 17 - "Store-01 Photo (Trench Coat, Aviators)"
Cohesion: 0.50
Nodes (5): Azylis Eyewear Brand, Editorial Fashion Photography Style, Model Wearing Clear-Frame Aviator Sunglasses, Clear Acetate Aviator Sunglasses (Dark Lenses), Dark Navy Trench Coat Styling

### Community 18 - "Women's Lenses Category Photo"
Cohesion: 0.50
Nodes (5): Category Lenses Women Photo, Lifestyle Outdoor Photography Style, Minimalist Casual Model Styling, Round Black-Rim Eyeglasses, Women's Eyewear Category

### Community 19 - "Women's Sunglasses Category Photo"
Cohesion: 0.50
Nodes (5): Black Acetate Frame, Cat-Eye / Oval Frame Style, Luxury Lifestyle Styling (Coat, Leather Bag, Gold Jewelry), Cat-Eye Sunglasses (Women's) Product Photo, Women's Eyewear Category

### Community 20 - "Clip-On Lens Category Photo"
Cohesion: 0.60
Nodes (5): Dark Clip-On Sun Lens Attachment, Close-Up Hand-Holding Product Composition, Business-Casual Lifestyle Styling (Suit, Male Model), Clip-On Sunglasses Product Photo, Tortoiseshell Round Eyeglass Frame

### Community 21 - "Reel-04 Photo (Handbag, Cat-Eye Sunglasses)"
Cohesion: 0.60
Nodes (5): Brown Leather Tote Bag, Reel 04 Lifestyle Photo, Female Model, Warm Neutral Editorial Aesthetic, Dark Oval Cat-Eye Sunglasses

### Community 22 - "Wear-02 Photo (Leather Jacket)"
Cohesion: 0.60
Nodes (5): Close-Up Editorial Fashion Portrait Style, Black Leather Jacket Outfit, Woman Wearing Sunglasses Portrait, Female Model with Wavy Brown Hair, Square Sunglasses (Black, Green Lenses)

### Community 23 - "Men's Lenses Category Photo"
Cohesion: 0.50
Nodes (4): Men's Eyewear Category, Outdoor Lifestyle Photography Style, Men's Clear Acetate Eyeglasses, Transparent Frame Design

### Community 24 - "Moss Frame Color Variant"
Cohesion: 0.50
Nodes (4): Acetate Frame Material, Round/Panto Frame Shape, Green Tortoiseshell Pattern, Moss Frame Color Variant

### Community 25 - "Midnight Frame Color Variant"
Cohesion: 0.67
Nodes (4): Acetate Frame Material, Round/Panto Frame Shape, Dark Tortoiseshell Acetate Pattern, Midnight Frame Color Variant

### Community 26 - "Fit-01 Photo (Aviator Sunglasses)"
Cohesion: 0.67
Nodes (4): Clear-Frame Aviator Sunglasses, Fit/Try-On Demonstration Photo, Lifestyle Fashion Portrait Concept, Woman Model Wearing Sunglasses

### Community 27 - "Reel-05 Photo (Green Geometric Sunglasses)"
Cohesion: 0.50
Nodes (4): AZYLIS Branded Green-Tinted Geometric Sunglasses, Beige Shirt with Navy Contrast Collar, Close-Up Lifestyle Portrait Content Style, Smiling Male Model Wearing Sunglasses

### Community 28 - "Product Page Rendering (product.js)"
Cohesion: 1.00
Nodes (2): choose(), paintMain()

### Community 29 - "Site Favicon"
Cohesion: 1.00
Nodes (1): Favicon Eyewear Lens Icon

## Ambiguous Edges - Review These
- `Graphify Knowledge Graph Config` → `Azylis README Overview`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **75 isolated node(s):** `http`, `fs`, `path`, `root`, `port` (+70 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Product Page Rendering (product.js)`** (2 nodes): `choose()`, `paintMain()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site Favicon`** (1 nodes): `Favicon Eyewear Lens Icon`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Graphify Knowledge Graph Config` and `Azylis README Overview`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What connects `http`, `fs`, `path` to the rest of the system?**
  _75 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Sections & Layout` be split into smaller, more focused modules?**
  _Cohesion score 0.09666666666666666 - nodes in this community are weakly interconnected._