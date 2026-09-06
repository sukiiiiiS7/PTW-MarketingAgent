# Paw to Wear Email Skill V1.3

## Install

Place this folder at:

```text
PTW-MarketingAgent/
└── .agents/
    └── skills/
        ├── paw-to-wear-brand/
        └── paw-to-wear-email/
```

The Email Skill consumes a Brand Brief from `$paw-to-wear-brand` and then conceives each email from the **current task objective**.

## V1.3 principle: examples are visual only

The three approved historical emails are **not content templates**.

They may influence:
- visual hierarchy;
- spacing;
- typography treatment;
- warm surfaces/borders;
- button styling;
- card/image proportions;
- mobile stacking.

They must not determine:
- subject/preheader;
- headline/body copy;
- narrative angle;
- section order;
- number of sections;
- story/process/proof sequence;
- CTA wording;
- offer placement;
- Klaviyo variable paths.

Every new email must be conceived from the user's current goal + Brand Brief + verified facts.

## Klaviyo runtime safety

Historical example code is not a valid source for current event paths. Essential event data must be verified from the target flow's Klaviyo Preview & test event properties (or exact current official documentation, then preview-tested).

If a required line-item schema is missing, the skill must not guess it.

## Locked footer

All generated Paw to Wear emails reuse `references/components/canonical_footer.html` verbatim unless the user explicitly asks to change the footer.

## Static image behavior

Static/editorial images render as labeled HTML placeholders. The user inserts final images manually in Klaviyo. Verified dynamic images are allowed only after their event schema has passed the Klaviyo safety gate.

## Suggested concepting test

Give the skill three very different tasks (for example a collection launch, a short product proof email, and a checkout recovery email). Their HTML should share Paw to Wear visual DNA but should **not** share the same content skeleton.


## v1.4 behavior

Execution-first: non-blocking missing inputs (testimonial copy, coupon implementation, static images, optional Klaviyo fields) no longer stop generation. Shopify Checkout Started may use Klaviyo's current documented core runtime map directly; Preview & test remains launch QA and account-specific override.


## Visual-first generation

V1.5 adds task-led visual planning. For marketing/editorial emails, the skill should automatically create meaningful static image placeholders when visuals help the objective, instead of falling back to text-heavy layouts because final image assets are not supplied. Checkout-adjacent and operational emails can remain intentionally minimal.
