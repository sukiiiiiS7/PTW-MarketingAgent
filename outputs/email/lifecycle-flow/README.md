# Paw to Wear — Lead-to-Purchase Lifecycle Flow

This folder contains 13 English, responsive, Klaviyo custom-HTML emails. Timing follows the supplied lifecycle map.

| # | Flow | Timing | Subject | Preheader | File |
| ---: | --- | --- | --- | --- | --- |
| 1 | Lead → Browse | Immediately after signup | More than a photo on a sweatshirt. | Your pet, translated into artwork you can approve—then made to wear. | [01-welcome-brand-promise.html](./01-welcome-brand-promise.html) |
| 2 | Lead → Browse | +1 day | See it before we stitch it. | Your photo becomes artwork, then a preview you can review and revise. | [02-welcome-how-it-works.html](./02-welcome-how-it-works.html) |
| 3 | Lead → Browse | +3 days | The photo they could not leave behind. | A Paw to Wear story begins with why one image matters. | [03-welcome-customer-story.html](./03-welcome-customer-story.html) |
| 4 | Lead → Browse | +5 days | What goes into every stitch. | Custom artwork, your approval, heavyweight garments, and careful construction. | [04-welcome-craftsmanship-value.html](./04-welcome-craftsmanship-value.html) |
| 5 | Lead → Browse | +7 days | Who are you making it for? | For your wardrobe, a gift, another pet, or a memory you want close. | [05-welcome-buying-reason.html](./05-welcome-buying-reason.html) |
| 6 | Browse → Added to Cart | 2–4 hours after Viewed Product | Still picturing them in this? | The piece you viewed starts with their photo—and a preview before embroidery. | [06-browse-viewed-product-reminder.html](./06-browse-viewed-product-reminder.html) |
| 7 | Browse → Added to Cart | +20–24 hours | Four questions before you make it theirs. | Photo quality, likeness, revisions, and timing—answered clearly. | [07-browse-objection-killer.html](./07-browse-objection-killer.html) |
| 8 | Added to Cart → Started Checkout | +1 hour | Your custom piece is still here. | Return to your cart and continue with the choices you started. | [08-cart-reminder.html](./08-cart-reminder.html) |
| 9 | Added to Cart → Started Checkout | +12 hours | You do not have to get every detail perfect now. | A real person reviews your photo, and you see the artwork before production. | [09-cart-customization-reassurance.html](./09-cart-customization-reassurance.html) |
| 10 | Added to Cart → Started Checkout | +30–36 hours | Why people come back to finish the piece. | It is the moment the photo starts to feel unmistakably theirs. | [10-cart-final-nudge.html](./10-cart-final-nudge.html) |
| 11 | Started Checkout → Purchase | +3 hours | Your custom piece is waiting. | Your checkout is still open when you are ready to finish. | [11-checkout-resume.html](./11-checkout-resume.html) |
| 12 | Started Checkout → Purchase | +48 hours | Before we stitch, you get to see it. | Photo review, artwork preview, revisions, and finished-piece proof. | [12-checkout-risk-reversal.html](./12-checkout-risk-reversal.html) |
| 13 | Started Checkout → Purchase | +72 hours | Not just customized. Entirely yours. | Their photo, their choices, and 10% off with code PERSONAL10. | [13-checkout-decision.html](./13-checkout-decision.html) |

## Klaviyo implementation notes

- Welcome emails are profile/list-triggered and contain no guessed event fields.
- Browse and Added-to-Cart event schemas were not supplied. Their HTML uses safe customer-facing fallback blocks and marks the CTA with `data-klaviyo-replace`; replace those blocks/URLs only with exact values copied from Klaviyo Preview & test.
- Shopify Started Checkout uses the approved Paw to Wear paths: `event.responsive_checkout_url`, `event.extra.line_items`, and the documented item fields used in these templates.
- Configure flow filters so Browse exits on Added to Cart, cart emails exit on Started Checkout, and every abandonment flow exits on Placed Order.
- PERSONAL10 is a verified active Shopify discount code: 10% off entire order, no minimum purchase, cannot combine with other discounts. Re-verify current status (active/expired, usage limits) in Shopify admin before each send.
- Add product-interest profile updates (hoodie / sweatshirt / multi-pet, etc.) in Klaviyo flow actions using verified event values; this is an automation configuration, not an email-template function.
- The canonical footer is inserted verbatim in every file.

## Variables and assets still needed

### 01-welcome-brand-promise.html


Assets / verification needed:
- Verified original pet photo and matching finished embroidery image.

### 03-welcome-customer-story.html


Assets / verification needed:
- Verified customer name/pet name, permissioned story, original photo, and finished-piece image.

### 04-welcome-craftsmanship-value.html


Assets / verification needed:
- Optional verified stitch close-up image.

### 05-welcome-buying-reason.html


Assets / verification needed:
- Optional active first-purchase incentive and exact terms.
- Optional verified Klaviyo preference-link URLs for Myself / Gift / Not sure yet.

### 06-browse-viewed-product-reminder.html

Klaviyo variables needed:
- Viewed Product: product title
- Viewed Product: product image URL
- Viewed Product: product or customization URL

### 07-browse-objection-killer.html

Klaviyo variables needed:
- Viewed Product: product or customization URL

Assets / verification needed:
- Verified customer testimonial about likeness.
- Verified stitched close-up image.

### 08-cart-reminder.html

Klaviyo variables needed:
- Added to Cart/Cart event: cart recovery URL
- Cart item title
- Variant/color
- Pet count/customization context if exposed

### 09-cart-customization-reassurance.html

Klaviyo variables needed:
- Added to Cart/Cart event: cart recovery URL

### 10-cart-final-nudge.html

Klaviyo variables needed:
- Added to Cart/Cart event: cart recovery URL

Assets / verification needed:
- Verified review or customer reaction and matching finished embroidery.

### 11-checkout-resume.html

Klaviyo variables needed:
- event.responsive_checkout_url
- event.extra.line_items and approved item fields

### 12-checkout-risk-reversal.html

Klaviyo variables needed:
- event.responsive_checkout_url
- event.extra.line_items and approved item fields

Assets / verification needed:
- Verified testimonial about concern over likeness and the final result.

### 13-checkout-decision.html

Klaviyo variables needed:
- event.responsive_checkout_url
- event.extra.line_items and approved item fields
- PERSONAL10 verified as 10% off entire order, no minimum, no stacking

Assets / verification needed:
- Offer eligibility, start/end dates, stacking rules, and active status.

