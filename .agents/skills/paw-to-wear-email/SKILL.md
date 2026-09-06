---
name: paw-to-wear-email
description: Conceive and render task-specific Paw to Wear marketing and lifecycle emails as brand-consistent, visually-led, responsive, Klaviyo-ready HTML. Use for email copy, campaigns, flows, dynamic Shopify/Klaviyo emails, redesigns, and HTML QA; derive each email from the current task and Brand Brief, use approved examples only for visual/layout grammar, and never invent unverified Klaviyo event paths or product claims.
---

# Paw to Wear Email Skill

## Purpose

Turn a concrete Paw to Wear email task into a finished email deliverable:

1. subject line;
2. preheader;
3. brand-consistent copy and message hierarchy;
4. Paw to Wear visual/layout treatment;
5. responsive, email-safe HTML ready for Klaviyo;
6. correct Klaviyo personalization/dynamic syntax when the required variables are verified;
7. clear HTML image placeholders for all static/editorial images so the user can insert final assets in Klaviyo after import.

This is a **final execution skill**, not a brand-definition skill and not a lifecycle-strategy engine.

## Required upstream brand context

For Paw to Wear work, use the sibling `$paw-to-wear-brand` skill first when a current `brand_brief` is not already available in the conversation/task context.

Treat the Brand Brief as the boundary for:
- positioning;
- voice;
- message direction;
- CTA family;
- approved product facts and proof;
- prohibited or unverified claims;
- visual identity.

Do not silently recreate or override brand truth from memory. If the Brand Brief conflicts with an explicit current user instruction, follow the user instruction while preserving factual safety.

## Read these references

Read only the files required by the task.

Always read:
- `references/00_email_system.md`
- `references/05_task_led_concepting.md`
- `references/06_execution_policy.md`
- `references/07_visual_storytelling_policy.md`
- `references/01_email_copy_rules.md`
- `references/02_email_design_system.md`
- `references/04_output_contract.md`
- `references/html/00_html_compatibility.md`
- `references/components/image_placeholder_patterns.md`

When composing from reusable blocks:
- `references/03_component_library.md`

For every rendered email, always read and reuse exactly:
- `references/components/canonical_footer.html`

When Klaviyo variables, flow-event data, dynamic products, personalization, coupons, or compliance tags are involved:
- `references/klaviyo/00_klaviyo_rules.md`
- then the smallest relevant Klaviyo reference(s)

Use approved examples **only when visual/layout reference is useful**. They are not content, narrative, structure, CTA, or Klaviyo-runtime templates. Read `references/examples/README.md` before opening any example file.

If an example is opened, use it only for spacing, proportions, typography treatment, surfaces, cards, image framing, mobile stacking, and other visual grammar.

## Task classification

Before writing, classify the email as one of:

- `campaign_static` — campaign/newsletter; no event-scoped data required.
- `campaign_profile_personalized` — campaign with profile variables only.
- `flow_profile_personalized` — flow using profile data but not trigger-event fields.
- `flow_event_triggered` — metric-triggered flow using `event` data.
- `transactional_or_operational` — order/service communication; use the user-supplied purpose and verified data model.

Also identify:
- one primary job for the email;
- one primary CTA/action;
- audience/lifecycle context if supplied;
- required products/assets/links;
- whether any dynamic content is essential.

Do not turn this into broad lifecycle planning unless the user asks for strategy.

## Composition workflow

1. **Obtain Brand Brief.** Use `$paw-to-wear-brand` if needed.
2. **Concept from the current task.** Define the single objective, reader context, primary action, strongest task-specific message, useful proof/content, asset slots, URLs, and dynamic-data needs. Create the section sequence from first principles using `references/05_task_led_concepting.md`; do not start from an approved example.
3. **Create the visual plan before drafting copy.** Use `references/07_visual_storytelling_policy.md` to decide what the reader should see, which beats deserve image placeholders, and the visual mode of each section. Missing static assets must not cause a text-heavy email: create labeled placeholders automatically when visuals would help.
4. **Validate facts.** Use only Brand Brief product facts and explicit task-local facts. Do not infer price, discount, timing, material, guarantee scope, or availability.
5. **Resolve Klaviyo data.** For dynamic flows, distinguish profile tags from event tags. Use an account-verified schema when available; for Shopify `Checkout Started`, the current official standard field map in `references/klaviyo/08_shopify_started_checkout.md` is sufficient to proceed for its documented core fields. Missing optional/account-specific fields must not block the email; omit them or use a labeled implementation placeholder.
6. **Choose hierarchy and layout.** Build the simplest task-specific sequence that carries one dominant message. Select visual components only after the concept is clear; new combinations/layouts are expected.
7. **Write copy.** Subject + preheader + hero + supporting content + proof + CTA. Apply Paw to Wear expression rules from the Brand Brief.
8. **Render design.** Use the visual system and component library. Keep the layout editorial, spacious, restrained, and mobile-first. Represent each static/editorial image as a labeled placeholder block following `references/components/image_placeholder_patterns.md`. For campaign/product/story emails, visual placeholders should be a meaningful part of the composition rather than an afterthought; text-only layouts are the exception when the task is inherently minimal or operational.
9. **Render HTML.** Produce table-based, responsive email HTML suitable for Klaviyo custom HTML. Do not embed historical/example static image URLs. Insert the canonical footer from `references/components/canonical_footer.html` verbatim; do not redesign or rewrite it.
10. **Run QA.** Brand, claims, Klaviyo syntax, links, alt text, mobile behavior, unsubscribe/compliance, and HTML completeness.
11. **Return final deliverable in the same run.** Follow `references/04_output_contract.md`. Do not stop to request non-blocking inputs when the task can be completed with verified standard fields, omission of optional fields, or explicit placeholders.

## Copy rules

Apply `references/01_email_copy_rules.md`.

Preserve these invariants:
- One email = one primary job.
- Subject and preheader complement rather than repeat.
- One dominant message hierarchy.
- Headline may carry emotion; body should explain; proof should make the claim believable.
- Specific details beat generic emotional adjectives.
- Avoid tagline stacking.
- Promotion should support product/value/proof unless the task is explicitly promotion-led.
- Use one primary CTA label consistently; secondary text links are allowed when structurally useful.
- Do not force `Wear What Matters.` into every section or every email.

## Visual rules

Apply `references/02_email_design_system.md`.

Default expression:
- editorial;
- spacious;
- warm;
- understated;
- fashion-aware;
- visually-led;
- product/detail-led rather than coupon-heavy.

For marketing/editorial tasks, do not default to a sequence of text blocks just because final image assets are unavailable. Use the visual storytelling policy to create task-specific image placeholders automatically. Near-checkout and operational emails may intentionally remain minimal.

Use the current brand font stacks:
- headings: `'Libre Caslon Text', Georgia, 'Times New Roman', serif`
- body: `'Plus Jakarta Sans', Arial, Helvetica, sans-serif`

Do not depend on web-font loading for legibility. The fallback must still look intentional.

### Locked footer

The footer is not a design surface. For every Paw to Wear email, copy `references/components/canonical_footer.html` exactly as provided. Do not change its copy, links, colors, typography, spacing, separators, order, or Klaviyo unsubscribe syntax. Do not add manage-preferences, legal copy, promotional copy, address copy, social links, or other footer elements unless the user explicitly asks to change the canonical footer. The canonical footer intentionally preserves the approved example styling even where it differs from current body typography tokens.


### Static image placeholders — locked behavior

For newly generated emails, do **not** embed static/editorial image URLs, including old URLs copied from approved examples. Use the standardized visible HTML placeholders from `references/components/image_placeholder_patterns.md` so the user can replace them manually in Klaviyo after importing the HTML.

This applies to static assets such as:
- logo/header image;
- hero/banner image;
- product/collection campaign photography;
- customer photos;
- embroidery/detail/process images;
- decorative editorial images.

Each placeholder should clearly state its role and, when useful, a recommended aspect ratio or dimensions. Also include a machine-readable HTML comment immediately before the block, for example:

```html
<!-- PTW_IMAGE_PLACEHOLDER: hero | recommended=1200x800 | alt="Fall 2026 collection" -->
```

Do not output broken `<img src="...">` placeholders or invented CDN URLs.

**Exception:** verified Klaviyo **dynamic product images** that are part of an event-driven module (for example, Started Checkout line items) may keep their verified dynamic image syntax because those images are populated at send time rather than manually inserted. If the user explicitly asks to replace dynamic images with placeholders too, follow that instruction.

## Klaviyo runtime rules

Apply `references/klaviyo/00_klaviyo_rules.md` and the relevant sub-reference.

Hard rules:

1. **Never invent an event path.** Event properties vary by integration and metric and are case-sensitive. However, a current official Klaviyo field map for the exact integration + metric counts as verified for the documented core fields and may be used without asking the user to paste Preview & test data first.
2. Use `{{ person... }}` for profile data and `{{ event... }}` only where an event-triggered flow provides it.
3. If a custom/profile/event property contains spaces or special characters, use Klaviyo `lookup` syntax where required.
4. Use loops and conditionals only when the referenced collection/property is verified.
5. Use `{% currency_format ... %}` for numeric monetary event values when formatting is needed.
6. Use a dynamic-image fallback when image data may be missing.
7. A custom HTML marketing email must use the unsubscribe link exactly as it appears in the locked canonical footer: `<a href="{% unsubscribe_link %}">Unsubscribe</a>`. Do not generate an alternative footer unsubscribe treatment.
8. Do not guess unique-coupon names. Use `{% coupon_code 'ExactCouponName' %}` only when the exact Klaviyo coupon name is supplied or verified.
9. Do not use event-scoped variables in ordinary campaigns.
10. When a dynamic path is unknown, first decide whether it is core or optional. Optional fields must be omitted or represented by a labeled implementation placeholder. If a core path is covered by the exact current official integration + metric reference, use it. Only ask for Preview & test data when a truly core path has no verified mapping and the requested deliverable cannot function without it.

## Shopify Checkout Started dynamic data

Do not copy dynamic paths from historical Paw to Wear examples. For Shopify `Checkout Started`, use `references/klaviyo/08_shopify_started_checkout.md` as the verified core runtime map and generate the documented line-item module immediately. If target-flow Preview & test data is available, treat it as the account-specific override; do not require it before initial generation of the documented core fields.

Historical examples may inform the **visual treatment** of line-item rows only.

## HTML requirements

Apply `references/html/00_html_compatibility.md`.

Default implementation:
- complete HTML document;
- hidden preheader text;
- `role="presentation"` tables;
- 600px max-width content container;
- inline styles for critical presentation;
- lightweight `<style>` block for responsive classes/media query;
- labeled static image placeholder blocks instead of static `<img>` URLs;
- useful intended alt text recorded in each placeholder comment;
- explicit placeholder width/aspect guidance where useful;
- mobile padding around 24px;
- no JavaScript;
- no CSS grid/flex dependency;
- no forms;
- no CSS variables;
- no fragile layout that depends on unsupported selectors.

Use a simple anchor-button pattern consistent with approved examples. Do not add VML/button complexity unless requested or a compatibility requirement clearly calls for it.

## Component selection

`references/03_component_library.md` contains visual primitives, not recipes.

After the task concept is clear, select only the components that help the current objective. You may combine them in new ways or create a new email-safe section treatment within the visual system.

Do not reproduce historical sequences such as welcome → process, story → proof → revision, or objection → story → dynamic items unless the current task independently calls for that sequence.

Do not add components merely because they exist or because they appeared in an approved example.

## Dynamic-data safety gate

Before returning a dynamic email, confirm:
- trigger metric/integration is known;
- every essential `event` path used is verified by either (a) target-flow Preview & test data or (b) exact current official Klaviyo documentation for the same integration + metric; historical Paw to Wear examples do not count as runtime verification;
- loop collection path is verified by one of those two sources;
- dynamic links point to the intended URL;
- fallbacks exist for optional profile/image fields where appropriate;
- no dynamic tag contains typographic/curly quotes;
- no unclosed `{% if %}`, `{% for %}`, or other template block exists.

If an optional field fails, omit it or replace it with a labeled implementation placeholder and continue. If a core field fails and no verified mapping exists, complete all non-dependent parts and surface the exact blocking gap. Do not convert missing testimonial text, coupon implementation details, static assets, or optional variant fields into a reason to refuse the whole deliverable.

## Quality gate

Before completion, check:

### Brand
- Does the email feel like Paw to Wear rather than a generic personalized-pet store?
- Is the emotion specific and restrained?
- Is there unnecessary tagline overload?
- Does the CTA match the Brand Brief and email objective?

### Task-led concept
- Is the email concept clearly derived from the current user objective and Brand Brief rather than an approved example?
- Would the structure still make sense if the example files did not exist?
- Did any story/process/proof/offer block appear mainly because an example contained it?

### Content
- Is the primary job obvious in the first screenful?
- Does each section earn its place?
- Are claims supported?
- Are subject and preheader complementary?

### Design
- Does hierarchy survive on mobile?
- Is the page spacious rather than crowded?
- Are headings, body, buttons, and section backgrounds consistent?
- Are all static/editorial images represented as labeled placeholders rather than embedded URLs?
- Are placeholder roles and intended alt text clear enough for manual Klaviyo insertion?

### Klaviyo
- Are dynamic paths verified?
- Are loops/conditions balanced?
- Is currency formatted correctly?
- Is the primary dynamic CTA URL correct?
- Is the locked canonical footer present verbatim, including its `{% unsubscribe_link %}` tag?

### HTML
- Complete document with closing tags?
- Valid hidden preheader?
- No JavaScript/forms/grid/flex dependency?
- No unsupported local-only asset paths?
- No copied historical/example static image URLs?

## Output contract

Follow `references/04_output_contract.md`.

Default user-facing output:

```text
Subject: ...
Preheader: ...

Klaviyo context: ...      # include only when dynamic/personalized behavior matters
Dynamic data used: ...    # include only when applicable
Variables needed: ...     # include only when something is unverified

HTML:
<!doctype html>
...
```

If the user asks Codex to create files in the repository, write the `.html` file to the requested location; if no path is specified, use `outputs/email/<descriptive-slug>.html` only when file creation is clearly desired. Otherwise return the complete HTML in the response.

## Do not

Do not:
- redefine Paw to Wear positioning or voice;
- invent product truth, offers, coupon names, event variables, or URLs;
- output a generic text-only email when the user asked for Klaviyo HTML;
- add lifecycle timing/segmentation strategy unless requested;
- use event variables in campaigns;
- treat approved examples as permanent product/policy truth;
- copy old examples verbatim when the task calls for new copy;
- copy static image URLs from approved examples into newly generated HTML;
- invent static image URLs or render broken `<img>` tags as placeholders;
- create a new slogan for every section;
- use excessive urgency, all-caps discount language, or decorative clutter unless explicitly required by the task.

## Completion standard

A successful result is a Paw to Wear email that can be understood as a coherent branded design before final imagery is inserted, renders safely across common email clients, uses only verified facts and Klaviyo data, presents static image slots as clear placeholders for manual Klaviyo insertion, and is ready to paste/import into Klaviyo apart from any explicitly surfaced variable or asset gaps.
