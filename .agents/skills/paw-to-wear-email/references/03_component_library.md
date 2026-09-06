# Email Visual Component Library

These are **visual primitives**, not content recipes and not mandatory blocks.

Choose components only after the email concept has been created from the current task and Brand Brief. Never select a component because it appeared in an approved example.

For marketing/editorial tasks, actively use these primitives to avoid text-wall emails. When the task can benefit from product, detail, lifestyle, comparison, or proof imagery, choose appropriate visual primitives and render static image slots as placeholders even when no final assets were supplied.

## 01. Logo Header

Visual role: calm branded entry point.

Typical treatment:
- centered logo image placeholder;
- roughly 150-160px intended logo width;
- restrained vertical padding;
- optional subtle bottom rule.

Do not copy historical logo CDN URLs.

## 02. Editorial Text Block

Visual treatment for a key message:
- optional eyebrow;
- serif H1/H2;
- concise supporting copy;
- optional CTA.

This does **not** imply that every email needs an editorial hero.

## 03. Tinted Information Card

Warm, low-contrast card that can contain whatever the current task needs: offer, fact, quote, proof, note, or product detail.

Do not assume it should contain a promotion.

## 04. Single Image Block

Labeled static image placeholder with optional caption. Use when one visual carries the point.

## 05. Two-Column Visual Pair

Two columns desktop; stacked mobile. Can support comparison, two products, two details, or any other task-specific pair.

Do not assume the pair must be `before/after`.

## 06. Detail / Quote Callout

Warm tinted or bordered block for one short high-signal item: customer quote, recognizable detail, factual proof, note, or key message.

## 07. Numbered List

1/2/3/... structure with concise title + explanation. Use only when sequence/order actually matters.

## 08. Image + Text Sequence

Repeated image placeholder + copy rows for tasks that genuinely benefit from staged visual explanation.

## 09. Fact / Proof List

Short factual list. Use only when multiple verified points help the decision.

## 10. Product / Collection Cards

1- or 2-column product/collection layout as appropriate. Static images remain labeled placeholders. Stack on mobile.

Do not default to a grid for every launch.

## 11. Dynamic Line-Item Module

Visual pattern only: compact item rows/cards for verified event-driven product data.

The data paths are **not defined by this component**. The Klaviyo runtime schema must be verified separately before rendering dynamic tags.

## 12. Primary CTA

One filled button with current task-specific label.

## 13. Secondary Text Link

Underlined, low visual weight. Use only when a supporting action is genuinely useful.

## 14. Optional Closing Block

Serif line + short supporting text if the current concept benefits from a closing beat. Not mandatory.

## 15. Dark Footer — locked

Insert `references/components/canonical_footer.html` verbatim. It is fixed and is not a concepting input.

## 16. Split Image + Copy Block

A task-specific two-column block with one image placeholder and one concise copy column; stack on mobile. Useful for product spotlight, detail explanation, lifestyle framing, proof, or offer support.

Do not use it just because it is visually available. Use when one image and one focused explanation should be understood together.
