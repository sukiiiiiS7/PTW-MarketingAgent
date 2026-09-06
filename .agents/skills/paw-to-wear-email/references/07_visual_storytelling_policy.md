# Visual Storytelling Policy

## Core principle

Paw to Wear email should usually be **visually conceived, not text-filled**.

Static images are inserted by the user after importing the HTML into Klaviyo, so the absence of supplied image assets is **not** a reason to produce a mostly-text email. When visuals would help the task, create clearly labeled static image placeholders automatically and design the copy around those visual moments.

The email concept must decide **what the reader should see**, not only what the reader should read.

## Visual planning is mandatory

Before writing body copy, create an internal visual plan for the current email:

- what is the dominant visual moment;
- which message/proof/product/story beats benefit from an image;
- the role of each image slot;
- recommended aspect ratio or dimensions when useful;
- whether each section is `image-first`, `image+text`, `text-only`, `dynamic-product`, or `card/proof`;
- how the visual rhythm changes on mobile.

Do not expose this planning unless the user asks. Render it into the HTML through labeled image placeholders and layout choices.

## Default visual bias by task type

These are **defaults, not rigid quotas**. The current task can justify more or fewer visuals.

### Collection launch / product launch / seasonal campaign

Default: **visual-forward**.

Normally include 3-6 static image placeholders when useful, for example:
- 1 hero/editorial campaign image;
- 1-4 product/design/detail images or a visual pair/grid;
- 1 lifestyle/detail/closing visual if it strengthens the message.

A launch email should not become several long text sections followed by a CTA if product/collection visuals are central to the decision.

### Product / design spotlight

Default: **1-4 static image placeholders**.

Useful patterns:
- hero product/lifestyle visual;
- embroidery/detail close-up;
- garment styling/detail;
- alternate design or personalization view.

### Story / proof / likeness / preview-approval email

Default: **2-5 static image placeholders** when the evidence exists conceptually.

Useful patterns:
- original pet photo;
- artwork/preview;
- revised artwork;
- embroidery close-up;
- finished piece/customer wear photo.

The visual sequence should carry proof. Do not explain visually provable points only with paragraphs.

### Educational / how-it-works / craftsmanship email

Default: **2-4 static image placeholders** when process visuals can clarify the message.

Use image + concise explanation rather than long instructional copy where possible.

### Lifestyle / brand / retention email

Default: **1-3 static image placeholders** if imagery helps create a fashion/lifestyle feeling.

Prefer one strong image with restrained copy over multiple abstract text blocks.

### Offer / promotion email

Default: **1-3 static image placeholders** unless the task is intentionally ultra-minimal.

The product/visual should remain prominent so the email does not become a coupon card with text around it.

### Checkout / abandonment flows

Use lifecycle intent to control visual density.

- `Resume Checkout` / very close to checkout: keep static imagery minimal or absent. Dynamic line-item product images may be enough.
- `Risk Reversal`: use 1-3 static proof placeholders if a preview, revision, finished embroidery, or testimonial visual materially reduces uncertainty; dynamic checkout items may remain below.
- `Decision / brand reframing`: use 1-2 static lifestyle/product/detail placeholders when they help reframe the item as a wearable piece; dynamic checkout items may remain below.

Do not add decorative imagery that increases friction near checkout.

### Transactional / operational

Default: **0-1 static image placeholder** beyond the logo unless an image is operationally useful. Clarity wins.

## Visual rhythm rules

For marketing/editorial emails:

- Avoid long runs of text-only sections.
- As a default, do not place more than **two substantive text-only sections in a row** when a useful visual could carry the next beat.
- If the email has 3+ substantive content sections, normally create at least one meaningful visual interruption beyond the logo.
- Prefer alternating visual density: hero visual -> concise text -> product/detail visual -> proof/card -> CTA.
- Do not force a repeated alternating pattern if the task needs another composition.
- Visuals must have a job: product discovery, proof, emotion, comparison, detail, styling, process, or decision support.
- Decorative images with no message function are optional and should remain restrained.

## Copy should respond to visuals

When a visual slot exists:

- do not duplicate in prose what the image is meant to show;
- use captions/labels to orient the reader;
- let the copy explain significance, difference, or next action;
- keep adjacent copy shorter than an equivalent text-only section.

Example logic:

`[Original photo placeholder] + [First preview placeholder]`

Then write:
- what changed;
- why the detail mattered;
- how approval works.

Do not write a long paragraph first and then insert the same visual as decoration.

## Placeholder creation policy

If a useful visual is implied by the task but no image asset is supplied:

- create the placeholder automatically;
- give it a precise slot name;
- give a recommended ratio/size when useful;
- include intended alt text in the HTML comment;
- continue execution without asking the user for the image.

Examples:
- `Fall 2026 hero lifestyle image`
- `Brew embroidery close-up`
- `Original pet photo`
- `Approved embroidery artwork`
- `Finished embroidery detail`
- `Lifestyle styling image — scarf`

Do not use vague labels such as `Image 1` unless the role is genuinely unknown.

## Dynamic images

Verified Klaviyo dynamic line-item images are runtime content, not static placeholders.

They can coexist with static placeholders. For example, a Risk Reversal abandoned-checkout email may use:
- static proof placeholders for preview/revision/finished embroidery; and
- dynamic checkout product images in the recovery module.

## Anti-text-wall QA

Before finalizing, ask:

1. Is this email mostly text because the task truly benefits from text, or because no image URLs were supplied?
2. What should the reader visually understand or feel?
3. Could any paragraph be replaced by a product, detail, comparison, process, or lifestyle visual plus shorter copy?
4. Are there 3+ substantive sections but no meaningful visual placeholder beyond the logo?
5. For launch/product/story emails, does the visual density feel like a fashion/ecommerce email rather than a plain newsletter?
6. Did I add images only because a historical example had them, rather than because this task benefits from them?

If the email is unnecessarily text-heavy, reconceive the layout before returning the HTML.
