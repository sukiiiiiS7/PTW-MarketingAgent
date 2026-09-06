# Paw to Wear Email Skill — V1 Eval Cases

Run these after installing the skill.

## Eval 1 — Static collection launch

Prompt:

```text
$paw-to-wear-email
Create a Paw to Wear Fall 2026 collection launch email.
Use the current Brand Brief. Output Subject, Preheader, and complete Klaviyo-ready HTML.
This is a campaign, not an event-triggered flow.
```

Pass if:
- no `event.*` variables appear;
- one primary collection CTA;
- editorial hierarchy;
- brand fonts/fallbacks and palette;
- all static visuals, including logo/hero/product art, are labeled placeholders rather than historical or invented image URLs;
- valid unsubscribe link;
- no unsupported product claims.

## Eval 2 — Story / proof email

Prompt:

```text
$paw-to-wear-email
Create an email using one real customer revision story to prove why preview approval matters.
Use only the story facts supplied in the task.
```

Pass if:
- story detail leads to proof;
- no generic quality claims replace evidence;
- before/after or revision component may be planned with clearly labeled static image placeholders;
- no invented customer details.

## Eval 3 — Started Checkout dynamic products

Prompt:

```text
$paw-to-wear-email
Create a Shopify Started Checkout flow email for Paw to Wear. Show the checkout items dynamically and return the reader to checkout. Use the approved Started Checkout variable pattern.
```

Pass if:
- uses `event.responsive_checkout_url` (verified for this account; see klaviyo/08_shopify_started_checkout.md);
- loops `event.extra.line_items`;
- uses guarded variant title;
- formats quantity and currency;
- uses image fallback;
- no unbalanced template tags.

## Eval 4 — Unknown event schema

Prompt:

```text
$paw-to-wear-email
Create a Placed Order flow email showing order items and shipment tracking. I have not supplied any event properties.
```

Pass if:
- it does not invent event paths;
- it asks for/flags Preview & test event properties;
- it may build static structure, but does not claim the dynamic HTML is deployment-ready.

## Eval 5 — Dynamic coupon

Prompt:

```text
$paw-to-wear-email
Create a welcome email with a unique Klaviyo coupon, but I have not told you the coupon name.
```

Pass if:
- it does not invent a coupon name;
- it asks for or flags the exact configured coupon name.

## Eval 6 — Brand / visual QA

Prompt:

```text
$paw-to-wear-email
Rewrite this email in Paw to Wear style and HTML: HUGE SALE!!! Turn your fur baby into the cutest hoodie ever! SHOP NOW!!!
```

Pass if:
- it removes generic/cutesy/over-promotional tone unless user explicitly insists;
- layout stays restrained;
- promotion does not create visual clutter;
- it follows the Brand Brief rather than old example wording.


## Footer lock eval

For every rendered-email test, verify that the generated footer is byte-for-byte equivalent in meaningful HTML content to `references/components/canonical_footer.html`: same text, URLs, Klaviyo tag, colors, font declaration, spacing, separators, and ordering. Any unsolicited footer modification is a failure.


## Eval 7 — Static image placeholder lock

Prompt:

```text
$paw-to-wear-email
Create a static Paw to Wear collection email with a logo, hero image, two product images, and one detail image. I will insert all images manually in Klaviyo.
```

Pass if:
- no real/static `https://...` image URLs appear in the new HTML;
- no image URLs are copied from approved examples;
- logo, hero, products, and detail image each have a visible labeled placeholder;
- every placeholder has a `PTW_IMAGE_PLACEHOLDER` comment with intended alt text;
- placeholders are table-based and email-safe;
- verified dynamic-image exceptions are not introduced because this is a static campaign.

## Eval: examples must not become content templates

Run three tasks with the same Brand Brief but different objectives:

1. a concise Fall collection announcement;
2. an email focused only on preview approval / likeness confidence;
3. a Started Checkout recovery email.

Pass criteria:
- all three share Paw to Wear visual DNA;
- they do not repeat the same section skeleton;
- no email adds customer story/process/proof/offer modules unless the task needs them;
- no subject/headline/CTA is copied from approved examples without an explicit task reason;
- examples are used only for visual/layout grammar;
- dynamic variables are not copied from the Started Checkout example without schema verification.


## Eval — Three-email Checkout Started sequence with incomplete optional inputs

Input:
- Shopify + Checkout Started flow
- Email 1 Resume Checkout +3h
- Email 2 Risk Reversal +48h, asks for one real testimonial but no quote is supplied
- Email 3 Decision Email +72h, user supplies offer `$10 off sleeve personalization` but no coupon name/implementation
- User requires Klaviyo dynamic product data

Expected behavior:
- Generate all 3 emails in the same run.
- Use the verified Shopify Checkout Started core map (`event.responsive_checkout_url`) for recovery URL and line-item data.
- Email 1 is minimal and checkout-focused.
- Email 2 reserves a testimonial block with `[INSERT VERIFIED CUSTOMER TESTIMONIAL]`; it does not fabricate a quote and does not stop execution.
- Email 3 does NOT present the user-supplied `$10 off sleeve personalization` claim as settled customer-facing fact. It must not state a specific discount amount, mechanism, or scope to the reader until the offer is verified. It should mark the offer as pending verification (e.g., a generic "there's something extra waiting for you" placeholder, or an explicit internal note) and must not invent a coupon code or claim auto-application. Keeps the recovery CTA functional regardless of offer status.
- Omit unverified optional variant/customization fields.
- Do not reuse historical example narrative structures merely because they exist.

## Eval — Visual density / anti-text-wall

Prompt:

```text
$paw-to-wear-email
Create a Paw to Wear Fall 2026 collection launch email. I will insert the final images manually in Klaviyo. Do not ask me for image assets.
```

Pass if:
- the email is not primarily a series of text-only sections;
- it automatically creates task-specific static image placeholders rather than waiting for URLs;
- normally includes a hero/editorial image placeholder plus multiple product/design/detail visual slots appropriate to the concept;
- placeholder labels describe their actual role, not generic `Image 1` labels;
- copy around image-led sections is concise;
- the layout remains task-led and does not copy an approved example's content sequence.

## Eval — Visual density should adapt to lifecycle intent

Run these three tasks:

1. Resume Checkout +3h — minimal recovery.
2. Risk Reversal +48h — preview/revision/quality proof.
3. Decision Email +72h — reframe as a pet-inspired wearable piece.

Pass if:
- +3h can remain visually minimal, relying on verified dynamic line-item images and concise recovery copy;
- +48h includes static proof visual placeholders when preview/revision/finished quality is part of the message, plus dynamic checkout items if useful;
- +72h can use 1-2 lifestyle/product/detail placeholders to support brand reframing, plus dynamic checkout items;
- all three do not use the same visual skeleton;
- no task is made image-heavy merely to satisfy a quota.
