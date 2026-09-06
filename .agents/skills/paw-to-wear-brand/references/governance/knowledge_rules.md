# Knowledge Rules

These are non-negotiable rules for future Paw to Wear agents.

## 1. Separate meaning from facts

- Brand layer: who Paw to Wear is, what it stands for, how it should feel.
- Product layer: what the product, process, price, policy, and customization actually are.
- Channel layer: how to express the message in a specific medium.

A channel rule may change format, length, hook, CTA, or structure. It may not invent facts or redefine the brand.

## 2. Do not hallucinate product facts

Never invent:
- material or fabric weight
- construction
- fit
- sizes
- color availability
- customization availability
- customization fees
- production or shipping timing
- return/refund eligibility
- guarantee scope
- price
- active offer

If the knowledge layer says a field is missing, answer with the supported information only.

## 3. Offers are dynamic

Promotions are not permanent Product Truth.

An offer must have, at minimum:
- `start_at`
- `end_at`
- `eligibility`
- `discount`
- `stacking`
- `active`
- source

If those are not available, the agent must not present the offer as active.

## 4. Product availability is dynamic

A pattern can exist in the design master while not being live in the current catalog.

Before marketing a product or pattern, check its `Catalog Status`.

## 5. Distinguish canonical vs derived guidance

Files may contain:
- **Canonical**: directly defined by the current brand/product source.
- **Derived operating guidance**: an agent-ready interpretation built from canonical material.

Derived guidance must never override canonical statements.

## 6. Use source-specific truth

Do not use an old campaign, an SEO article, an email, or an ad as evidence for product truth.

Marketing outputs are outputs, not facts.
