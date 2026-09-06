---
name: paw-to-wear-brand
description: Build a task-specific Paw to Wear Brand Brief from canonical brand and product knowledge. Use for Paw to Wear marketing planning, copy, creative briefs, landing pages, email/lifecycle, SEO, social, campaigns, or reviews that must follow current brand voice and product truth; hand the brief to downstream strategy or channel skills for final execution.
---

# Paw to Wear Brand Skill

## Purpose

Build a compact, reliable **Brand Brief** for a specific Paw to Wear marketing task. Use the brief as the brand and factual boundary for downstream strategy or channel execution.

Do not write channel mechanics here. This skill determines the relevant brand frame, audience/lifestyle context, product truths, expression boundaries, proof, and unresolved facts.

## References

Read only what the task requires.

### Governance
- `references/governance/source_priority.md` — read whenever sources could conflict or freshness matters.
- `references/governance/knowledge_rules.md` — read for source-of-truth and anti-hallucination rules.

### Brand
- `references/brand/01_brand_core.md` — read for every customer-facing marketing task.
- `references/brand/06_brand_expression_rules.md` — read for every customer-facing marketing task.
- `references/brand/02_brand_voice.md` — read when tone or wording nuance matters.
- `references/brand/03_audience.md` — read when audience, lifecycle, gifting, memorial, or lifestyle targeting matters.
- `references/brand/04_content_system.md` — read for campaign, editorial, content planning, and pillar selection.
- `references/brand/05_visual_identity.md` — read for visual, design, HTML, image, or UI-facing tasks.
- `references/brand/00_brand_index.md` — use as a navigation aid when the relevant brand file is unclear.

### Product
- `references/product/00_product_index.md` — use as a navigation aid when product facts are needed.
- Load only the specific product reference files needed for the task.

## Source precedence

Follow `references/governance/source_priority.md`.

Preserve these invariants:
1. Current Brand Book defines brand identity and positioning.
2. Current Brand Expression Rules define writing behavior and hard expression rules.
3. Product Truth defines what can be claimed about products, process, pricing, customization, policies, and availability.
4. Brand White Paper is strategic context, not the highest-priority wording source.
5. Historical marketing copy is never product truth.

If sources conflict, use the higher-priority source. Do not merge conflicting statements into a new claim. Surface unresolved conflicts only when they materially affect the task.

## Retrieval policy

Keep retrieval minimal.

For customer-facing marketing tasks, always read:
- `references/brand/01_brand_core.md`
- `references/brand/06_brand_expression_rules.md`

Then load only the context that changes the brief.

Examples:
- Audience or lifestyle task → `03_audience.md`
- Campaign/editorial planning → `04_content_system.md`
- Visual/HTML/image task → `05_visual_identity.md`
- Product/pattern campaign → relevant garment + pattern references
- Customization message → relevant pattern + customization references
- Process/transparency message → process + applicable policy references
- Price/offer copy → pricing + current task-local offer source, if supplied
- Guarantee/shipping/returns → policy truth

Do not load the entire product knowledge base merely because a product is mentioned.

## Core brand frame

Unless the task explicitly requires a narrower factual/category explanation, preserve this hierarchy:

1. Pet relationship / identity / story
2. Fashion / wearable object
3. Craft / customization
4. Product specification

Treat customization as a product mechanism, not automatically as the brand's highest-level value proposition.

Default frame:
- Pet-Inspired Lifestyle Fashion Brand
- `Wear What Matters.`
- wearable storytelling
- the bond, identity, rituals, memories, personality, and recognizable details connected to a specific pet

Avoid reducing Paw to Wear to a generic personalization store, gift shop, embroidery supplier, or novelty pet-merch brand.

## Expression rules

Apply `references/brand/06_brand_expression_rules.md` as operating guidance. Preserve especially:
- Everyday voice: warm, observant, restrained.
- Memorial may be more emotional, intimate, and reflective while remaining specific and restrained.
- Specific memory/detail > generic sadness.
- Specific relationship > generic relationship label.
- Show the relationship; do not merely label the emotion.
- Clarity > cleverness.
- One clear message hierarchy > repeated tagline invention.
- Use concrete product proof instead of unsupported `premium`, `high quality`, or `best` claims.
- Let discount support value/product/proof rather than dominate the brand voice.

Language defaults:
- `keepsake`: allowed, especially in memorial/gifting/long-form emotional contexts; do not make it the default brand descriptor.
- `fur baby`, `doggo`, `pupper`, `pawrent`: avoid in official brand voice unless quoting UGC/creator/community language.
- `pet parent`: allowed, but do not over-label the audience.
- `best friend`: allowed when grounded in a concrete relationship/story; not a default core brand phrase.

CTA defaults when the task context already calls for one:
- Product creation → `Create Yours`
- Collection/editorial → `Explore the Collection`, `Explore the Designs`, or `Discover the Collection`
- Clear commerce intent → `Shop the Collection` or `Shop [Product]`
- `Shop Now` → allowed for promotion, retargeting, paid social, and high-intent commerce; not the universal brand CTA

## Product-fact firewall

Never invent or infer unsupported customer-facing facts, including:
- material composition or GSM
- construction
- fit
- sizes or colors
- live pattern/product availability
- customization options or fees
- production or shipping time
- returns/refunds
- Happiness Guarantee scope
- prices
- active discounts/offers

If a needed fact is missing or marked as a data gap:
- add it to `verification_needed`;
- do not turn the gap into polished copy;
- continue building the rest of the Brand Brief when possible.

A fact explicitly supplied by the user in the current task may be used for that task. Label it `task_local` when it is not present in the canonical references.

## Workflow

1. **Parse the task.** Identify deliverable, channel, campaign/occasion, product/garment/pattern, customer/lifecycle context, explicit business goal, and task-local facts.
2. **Select references.** Read the minimum brand/product files needed.
3. **Resolve truth.** Separate canonical brand truth, canonical product truth, strategic context, derived brand guidance, task-local facts, and unresolved gaps.
4. **Choose the brand lens.** Select only the relevant architecture lens, lifestyle segment, content pillar, pattern story, or customer motivation.
5. **Define expression direction.** Specify the central idea, emotional register, voice, preferred language territory, avoidances, approved proof, and CTA family only when already implied by the task.
6. **Run the quality gate.** Correct generic, over-sentimental, over-promotional, unclear, unsupported, or tagline-heavy framing before returning the brief.

Do not invent missing campaign strategy or channel rules. Brand Skill prepares context; downstream skills decide channel execution.

## Quality gate

Before returning the brief, verify:
1. Would this framing work unchanged for any personalized pet gift store? If yes, make it more Paw to Wear-specific.
2. Is it over-dependent on cute/gift/keepsake language? If yes, rebalance.
3. When emotion matters, is there a concrete personality, story, relationship, ritual, or recognizable detail?
4. Does the tone retain fashion/lifestyle restraint?
5. Is the core message immediately understandable?
6. Are all product claims supported by Product Truth or explicit task-local facts?
7. Is the message creating unnecessary taglines?
8. If a CTA is suggested, does it fit the user stage and task?

## Output contract

Return a concise YAML-compatible structure. Omit empty optional fields rather than filling them with guesses.

```yaml
brand_brief:
  task:
    deliverable: null
    channel: null
    campaign_or_occasion: null
    business_goal: null

  subject:
    garment: null
    pattern: null
    collection: null

  audience_context:
    audience: null
    lifecycle_or_awareness_context: null
    lifestyle: null

  brand_context:
    positioning: null
    brand_idea: null
    architecture_lens: null
    content_pillar: null

  message_direction:
    central_idea: null
    relationship_or_story: null
    emotional_register: []
    relevant_customer_motivation: []

  expression:
    voice: []
    preferred_language: []
    avoid: []
    cta_family: []

  approved_product_truth:
    facts: []
    proof_points: []

  constraints:
    unsupported_claims_to_avoid: []
    verification_needed: []
    task_local_facts: []

  handoff:
    downstream_skill: null
    downstream_instruction: null
```

## Handoff

Do not independently decide final SEO structure, email sequence logic, Meta hook format, Pinterest title syntax, YouTube metadata, or other channel mechanics.

When a downstream skill is known, make the boundary explicit. Example:

```yaml
handoff:
  downstream_skill: email
  downstream_instruction: >-
    Use this Brand Brief as the brand boundary. Apply lifecycle/email rules next.
    Preserve the central idea and proof constraints while adapting hierarchy, length,
    subject line, CTA placement, and conversion structure to email.
```

If the user asks only for a Brand Brief, stop after the brief.

## Do not

Do not:
- write a complete final marketing asset unless the user explicitly requests final copy and no downstream skill is available;
- create channel best practices from memory as if they were brand rules;
- invent offers or infer missing product facts;
- turn historical campaign wording into permanent brand truth;
- use every brand keyword in one piece;
- force `Wear What Matters.` into every output;
- generate a fresh slogan for every section;
- optimize cleverness at the expense of comprehension.

## Completion standard

Return a brief that is small enough for another skill to consume without re-reading the full knowledge base, but complete enough to keep downstream work recognizably Paw to Wear and factually bounded.
