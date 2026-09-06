# Dynamic Product Rendering

## Principle

Dynamic product content must be driven by a **verified collection/list and verified item fields** from the target Klaviyo event (or another Klaviyo product/feed mechanism explicitly supplied by the user).

Historical Paw to Wear examples may inform the visual row/card styling only. They must not supply event paths.

## Required schema before production rendering

For a dynamic line-item module, verify as applicable:
- collection/list path;
- product title field;
- image field;
- variant/options field if needed;
- quantity field;
- price/line-value field;
- destination/recovery URL.

Guard optional values with conditionals/fallbacks only after their field paths are verified.

## Layout

Use the current Paw to Wear visual system. A compact item row/card is one option, not a fixed template.

Choose layout based on item count, data available, and email objective.

## URL choice

For checkout recovery, use the verified recovery/checkout URL provided by the target event when available. Do not guess it from a historical template.
