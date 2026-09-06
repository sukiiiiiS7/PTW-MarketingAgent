# Source Priority

## Global precedence

When two sources disagree, use this order unless a narrower domain rule below explicitly applies.

### P0A — Current Brand Book
Canonical for:
- brand positioning
- brand promise
- mission
- vision
- content pillars
- key brand words
- visual identity

The current image-based Brand Book is the highest-priority source for what Paw to Wear is.

### P0B — Current Brand Expression Rules
Canonical for:
- brand-language hard rules
- approved and disfavored expression patterns
- emotional register
- CTA preferences
- discount/promotion tone
- memorial-language guardrails
- usage rules for words such as `keepsake`, `best friend`, `pet parent`, and `fur baby`
- clarity and tagline hierarchy

These rules operationalize the Brand Book. If a wording example conflicts with a hard rule, the hard rule wins. If a hard rule appears to redefine positioning, the Brand Book wins on positioning.

### P1 — Product Truth Workbook
Canonical structured source for:
- garments
- materials
- construction
- sizes
- current catalog status
- pattern facts
- customization availability
- custom process
- policy facts
- current base pricing
- identified data gaps

### P2 — Brand White Paper
Strategic context for:
- category strategy
- audience
- lifestyle architecture
- brand architecture
- growth logic
- long-term direction

If its wording conflicts with the current Brand Book or Brand Expression Rules, the P0 source wins.

### P3 — Campaign / Channel Knowledge
Future modules for:
- campaign messaging
- offers
- SEO rules
- email rules
- paid social rules
- Pinterest / YouTube / Reddit rules

These can shape execution, but cannot redefine Brand Truth or Product Truth.

---

## Domain-specific precedence inside Product Truth

Use the most authoritative source for the specific field:

1. Official customer-facing policy pages → shipping, approval, cancellation, returns/refunds.
2. Shopify product/catalog data → live products, base prices, variants, material metafields.
3. Pattern master → design intent, pet support, story type, pattern-specific customization.
4. Order Progress workflow → journey states and touchpoints.
5. Live storefront copy/UI → presentation aid only; validate before promoting to permanent truth.

## Current-task facts

If the user supplies a new fact explicitly in the current task, it may be used as task-local context. Do not silently promote it into persistent Product Truth or Brand Truth unless the knowledge base is intentionally updated.

## Conflict rule

Never silently merge conflicting facts.

If a task depends on a conflict:
1. use the higher-priority source;
2. preserve the lower-priority version as historical/strategic context if useful;
3. flag unresolved operational conflicts when they affect customer promises.
