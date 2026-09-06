# Klaviyo Runtime Rules

Verified against Klaviyo Help Center guidance available in 2026.

Official references:
- https://help.klaviyo.com/hc/en-us/articles/4408802648731
- https://help.klaviyo.com/hc/en-us/articles/115002779071
- https://help.klaviyo.com/hc/en-us/articles/4408802597659
- https://help.klaviyo.com/hc/en-us/articles/4408810769307
- https://help.klaviyo.com/hc/en-us/articles/115005254068

## Core model

Klaviyo email templates can use:
- profile personalization (`person`);
- organization fields (`organization`);
- event properties (`event`) in metric-triggered contexts;
- template control tags (`{% ... %}`);
- filters (`|default`, `|floatformat`, `|missing_product_image`, etc.);
- link/compliance tags;
- coupon tags.

## Non-negotiable safety rule

**Never invent an event property path.**

Event data depends on the integration and triggering metric. Event paths are case-sensitive. For an unfamiliar metric, obtain the exact tag from Klaviyo `Preview & test → All properties / Event properties`.

## Campaign vs event flow

- Campaigns may use profile variables but do not have a trigger-event payload.
- Metric-triggered flow emails may use event variables from that trigger.
- Do not paste an event variable from one metric/integration into another and assume it works.

## Syntax hygiene

- Use straight ASCII quotes inside tags.
- Balance all `{% if %}` / `{% endif %}` and `{% for %}` / `{% endfor %}` blocks.
- Avoid introducing HTML formatting inside a Klaviyo variable/tag.
- Do not HTML-escape the braces or percent delimiters.
