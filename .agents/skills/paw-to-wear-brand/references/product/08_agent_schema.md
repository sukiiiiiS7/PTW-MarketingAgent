# Product Agent Schema

Suggested keys for future structured retrieval and tool outputs.

| Module | Suggested Key | Type | Description / Rule |
| --- | --- | --- | --- |
| garment_truth | garment_id | enum | hoodie \| sweatshirt \| t_shirt \| dad_hat \| beanie \| scarf; add baseball_cap if retained. |
| garment_truth | material | object | fiber composition + fabric weight + fabric construction; factual only. |
| garment_truth | construction | array | Seams, rib, sleeve, pocket, knit/weave, wash finish, etc. |
| garment_truth | fit | object | Canonical fit wording; never infer from product photography. |
| garment_truth | sizes | array | Variant labels; measurement chart should be a separate structured object. |
| sku_truth | colors | array | Store availability at product/SKU level, because palettes vary by pattern. |
| pattern_truth | pattern_code | string | Stable design identifier. |
| pattern_truth | pet_support | enum/list | single / multi or explicit min/max. |
| pattern_truth | customization_options | array | Only options valid for the selected pattern. |
| customization_pricing | option_price | money | Separate from base product price and versioned by effective date. |
| process_truth | state | enum | photo_review → artwork → preview → revision → approval → embroidery → finished_piece → shipped. |
| policy_truth | policy_rule | object | Official rules with effective date/source; overrides storefront marketing copy on policy conflicts. |
| pricing_truth | base_price | money | Current Shopify price by product handle; include compare-at separately. |
| campaign_truth | offer | object | start_at / end_at / eligibility / discount / stacking / active flag. Never permanent product truth. |