# Pricing Truth

**Status: CURRENT BASE PRICING SNAPSHOT from the Product Truth source. Dynamic over time.**

## Pricing Summary

| Pattern Group | Patterns | T-Shirt | Sweatshirt | Hoodie | Accessories | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Core | Icon / Urban / Devotion / Campus / Halo / Story | 99 | 139 | 159 | Icon Dad Hat $69; Icon Beanie $89; Icon Scarf $99 | Current base prices from Shopify export. |
| Fall / Premium | Sleepyhead / Vogue / Groove / Brew / Crest / Bold | 129 | 169 | 189 |  | Current prices from Shopify export. |
| Other catalog item | Icon Stitch Baseball Cap |  |  |  | $89 | Exists in export, but is not present in the user's current Garment taxonomy and its style_name metafield is blank. |

## Verified active discount codes (account-specific, confirmed via Shopify admin)

| Code | Type | Verified Terms | Status | Source |
| --- | --- | --- | --- | --- |
| WEARTHEM10 | Order discount | 10% off entire order, no minimum purchase, cannot combine with other discounts | Active as of verification date | Confirmed in Shopify Discounts admin |
| PERSONAL10 | Order discount | 10% off entire order, no minimum purchase, no usage limit set, cannot combine with other discounts | Active as of verification date | Confirmed in Shopify Discounts admin |

**Do not use "$10 off sleeve personalization" or any fixed-dollar, item-specific discount language for PERSONAL10.** The verified configuration is a percentage discount on the entire order, not a fixed amount tied to a specific customization option. This corrects an earlier brief description that did not match the actual Shopify configuration.

Before using either code in new output, re-verify current status (active/expired, usage limits, stacking rules) in Shopify admin — this table reflects a point-in-time confirmation, not a live feed.

## Offers observed in source

| Status | Observed Offer | Why It Should Not Be Permanent Product Truth | Recommended Canonical Location | Source |
| --- | --- | --- | --- | --- |
| Needs verification | Current crawled product pages still show an 'August Paw Celebration Month' promotion with Buy 2 → 20% off the 2nd item; Buy 3 → 40% off the 3rd item. | The current date is 2026-09-04, so this campaign label is time-sensitive and may be stale. An agent should never assume it is active just because it remains in page copy. | campaign_truth / offers with start_at, end_at, eligibility, stacking, code/automatic-discount logic, and source-of-truth ID. | https://pawtowear.com/products/custom-full-color-embroidered-pet-portrait-t-shirt |
| Rule | No permanent offer should be stored here unless it has explicit effective dates and eligibility. | Prevents outdated discount claims in email, ads, SEO, support, and social content. | campaign_truth | Internal recommendation |

## Critical rule

An observed promotion is not automatically active. Offers belong in a future `campaign_truth` module with effective dates and eligibility. Do not let a channel skill reuse an old promotion simply because it appears in historical/live page copy.
