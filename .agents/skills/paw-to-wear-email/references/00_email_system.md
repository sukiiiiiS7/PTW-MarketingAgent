# Paw to Wear Email System

## Scope

This skill executes a **specific email task**. It conceives the email around the current objective, writes the copy, creates an appropriate information hierarchy, applies Paw to Wear's visual language, and renders responsive Klaviyo-ready HTML.

It does not own:
- brand positioning;
- product truth;
- campaign/lifecycle strategy unless the user explicitly asks for it;
- unverified Klaviyo event schemas.

## Inputs

Preferred inputs:

```yaml
email_task:
  objective: "..."
  type: campaign | flow | transactional
  audience_or_lifecycle: "..."
  primary_action: "..."
  products_or_collection: []
  assets: []
  urls: []
  klaviyo:
    trigger_metric: null
    integration: null
    personalization_required: false
    dynamic_products_required: false

brand_brief:
  ...
```

The user does not need to provide this YAML literally. Infer only what is supported by the task and upstream Brand Brief.

## Email modes

### Campaign static
Use for launches, editorial campaigns, announcements, collections, seasonal stories, and broadcasts with no event payload.

### Campaign profile-personalized
May use verified `person` variables. Never use `event` variables.

### Flow profile-personalized
Triggered by lifecycle/list behavior but the content only requires profile data.

### Flow event-triggered
Use only when the triggering metric exposes the needed event data. Exact paths are metric/integration specific and must pass the Klaviyo validation gate.

### Transactional / operational
Use verified event/order data and the user's purpose. Do not turn a service email into a promotion unless requested.

## Task-led structure

There is no canonical Paw to Wear content sequence.

For every email, build the structure around:
- the current objective;
- the reader's state/context;
- the Brand Brief's message direction;
- only the proof/content needed to make the primary action sensible.

A useful abstract check is:

`relevance → clear message → necessary support/proof → action`

But this is not a fixed section recipe. Some emails may be very short. Others may need product modules, story, proof, process, comparison, offer, or dynamic content. Use only what the task earns.

Approved historical examples are **visual/layout references only**, never content-structure defaults. See `references/05_task_led_concepting.md`.

## Primary-action discipline

Choose one primary action. Repeat the same primary CTA label only when repetition helps a longer email.

Secondary text links are allowed when they genuinely help the task. Do not add them merely because historical examples contain them.

Do not give multiple competing filled buttons equal visual weight.
