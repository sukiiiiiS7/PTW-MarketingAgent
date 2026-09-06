# Execution-First Policy

## Goal

Complete the requested email deliverable in the current run whenever a safe, useful result is possible. Missing non-essential inputs must not turn the skill into a questionnaire.

## Input severity

Classify missing information before deciding whether to stop.

### Non-blocking — continue and render

These must **not** stop execution:

- static/editorial image assets → use the standard image placeholder;
- a requested real testimonial whose exact quote was not supplied → use a visible `TESTIMONIAL PLACEHOLDER` and an HTML comment; never fabricate the quote;
- coupon code/name or auto-apply setup when the offer itself is explicitly supplied by the user → keep the approved offer copy, do not invent a code, and add an implementation comment/note;
- optional variant/options fields not covered by the verified Klaviyo schema → omit them;
- optional product URL when the email's primary CTA can safely return to checkout;
- optional personalization data → omit or use a safe fallback.

### Blocking only when truly required

A missing input is blocking only when all are true:

1. the requested core behavior cannot work without it;
2. there is no verified official mapping for the exact integration + metric; and
3. there is no safe omission or placeholder that preserves a useful deliverable.

Example: the user requests dynamic order-specific content for an unknown custom event and provides no schema.

## Shopify Checkout Started

For the exact combination `Shopify + Checkout Started`, the current official Klaviyo mapping in `references/klaviyo/08_shopify_started_checkout.md` is an approved runtime source for its documented core fields. Do not ask for Preview & test JSON before generating those fields.

If account Preview & test data is supplied later, prefer it when it differs from the generic official map.

## Testimonials

When the task requires a **real** testimonial but none is supplied:

- never invent a customer quote;
- do not stop the email;
- reserve the appropriate visual block;
- insert visible text such as `[INSERT VERIFIED CUSTOMER TESTIMONIAL]`;
- add an HTML comment describing the desired quote type.

## Offers and coupons

When the user explicitly provides the offer but not its Klaviyo/Shopify implementation:

- the offer claim may be written as task-local truth;
- do not invent a coupon name or code;
- do not claim automatic application unless specified;
- keep the checkout CTA functional using the verified recovery URL;
- add `<!-- PTW_IMPLEMENTATION_NOTE: configure $10 sleeve-personalization discount before launch -->` or equivalent.

## Multi-email tasks

If the user requests several emails, generate all requested emails in the same run unless a truly blocking condition affects all of them. One unresolved optional element in Email 2 must not prevent Email 1 or Email 3 from being produced.
