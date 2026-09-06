# Paw to Wear Email Design System

## Design intent

Paw to Wear email should feel like a restrained fashion/lifestyle editorial translated into email:
- warm;
- quiet;
- spacious;
- tactile;
- image-led when assets support it;
- clear enough for commerce;
- never visually coupon-first by default.

## Canvas

```yaml
outer_background: "#F4F2ED"   # Linen / brand secondary
container_background: "#FFFFFF"
max_width: 600px
desktop_outer_padding: 24px 12px
content_padding_desktop: 48px
content_padding_mobile: 24px
```

## Canonical brand colors

```yaml
primary:
  dark_goldenrod: "#CEB134"
  sienna: "#8F642C"
secondary:
  linen: "#F4F2ED"
  warm_charcoal: "#252321"
  terracotta: "#A97264"
  warm_taupe: "#9A8B86"
neutral:
  black: "#000000"
  dark_grey: "#676767"
  mid_grey: "#999999"
  grey: "#CCCCCC"
  light_grey: "#F5F5F5"
  white: "#FFFFFF"
```

## Approved email presentation tints

The approved historical emails also use these warm presentation colors successfully. Treat them as email-only supporting tints, not replacements for canonical brand tokens:

```yaml
soft_section: "#FAF8F5"
soft_offer: "#F5EEE7"
soft_border: "#EEE6DF"
soft_rule: "#EEE8E2"
muted_body: "#6D655E"
muted_eyebrow: "#8C7667"
```

When in doubt, prefer current canonical colors from the Brand Brief.

## Typography

Canonical brand typography:

```css
Heading: 'Libre Caslon Text', Georgia, 'Times New Roman', serif;
Body: 'Plus Jakarta Sans', Arial, Helvetica, sans-serif;
```

Do not rely on web-font loading. These names may render only when supported; fallbacks must remain intentional.

Suggested sizes:

```yaml
h1_desktop: 40-42px
h1_mobile: 32-34px
h1_line_height: 1.14-1.2
h2_desktop: 29-31px
body_feature: 16-17px
body_standard: 14-15px
eyebrow: 11-12px
button: 15px
footer: 12px
```

Use regular-weight serif headlines rather than heavy bold display type.

## Spacing rhythm

Common section padding:
- desktop: 42-52px top/bottom;
- mobile: 32-44px top/bottom;
- hero: can be slightly more generous;
- inner cards: 20-30px.

Prefer whitespace over decorative separators.

## Buttons

Default button:
- background: Warm Charcoal `#252321`;
- text: white;
- radius: around 6px;
- padding: about `16px 30px`;
- bold sans-serif text;
- no gradient or shadow.

On mobile, full-width/block buttons are acceptable when they improve tapability.

## Cards and proof blocks

Use warm, low-contrast surfaces and thin borders:
- `#FAF8F5`
- `#F5EEE7`
- `1px solid #EEE6DF`
- radius around 6-8px.

Avoid dense shadowed ecommerce-card UI.


## Visual-first composition

Paw to Wear marketing emails should normally feel designed around **visual moments + concise copy**, not like a text newsletter placed inside a branded shell.

Use `07_visual_storytelling_policy.md` as the authority for visual density by task type. Static asset URLs are not required at generation time: use labeled placeholders whenever a visual would improve product discovery, proof, emotion, styling, comparison, or comprehension.

For campaign/product/story emails, a text-only body is a design exception. For checkout-adjacent or operational emails, minimal imagery may be the correct choice.

Avoid more than two substantial text-only sections in sequence when a useful visual can carry the next message beat.

## Images

For newly generated HTML, **static/editorial images are placeholders by default** because the user will insert final assets manually in Klaviyo.

- Do not embed remote static image URLs, even if approved examples contain them.
- Do not copy historical Klaviyo/CDN image URLs into new templates.
- Use the standardized visible blocks in `components/image_placeholder_patterns.md`.
- Label every slot by purpose: `Logo`, `Hero image`, `Product 1`, `Original photo`, `Finished embroidery`, etc.
- Record intended alt text in the adjacent `PTW_IMAGE_PLACEHOLDER` HTML comment.
- When useful, provide recommended dimensions/aspect ratio in the visible placeholder.
- Product/detail pairs may be 2 columns on desktop and stack on mobile.
- When comparison is the message, equal-size placeholder frames are appropriate.

Exception: verified Klaviyo dynamic product-image tags inside event-driven dynamic line-item modules may remain dynamic.

## Footer — locked canonical component

Do not design or modify the footer. Every Paw to Wear email must reuse `references/components/canonical_footer.html` verbatim.

This means no changes to:
- copy;
- Instagram / TikTok URLs;
- unsubscribe syntax;
- colors;
- Georgia font in the brand-name line;
- spacing;
- separators;
- link order;
- additional compliance or promotional text.

Only change the canonical footer when the user explicitly requests a footer update.
