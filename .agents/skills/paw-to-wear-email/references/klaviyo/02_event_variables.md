# Klaviyo Event Variables

Event tags reference the event that triggered a compatible event/metric-triggered flow.

## Source of truth

For a production email, the preferred source of truth is the **actual target flow's Klaviyo Preview & test event properties**.

Current official Klaviyo documentation may be used to understand syntax and common integration shapes, but exact properties can differ by integration, metric, event version, or account context.

Historical Paw to Wear email examples are **not** a source of truth for event-variable paths.

## Rule

Before using an event tag that is essential to the email, confirm the exact property from:

1. current user-supplied Klaviyo `Preview & test` event properties for the target flow; or
2. current official Klaviyo documentation explicitly showing the exact path for the same integration + metric, with a clear note that deployment should still be preview-tested when the path is essential.

Event variables are case-sensitive.

## Unknown event schema

If the required path controls products, checkout/order URL, amount, shipment/tracking, or another core dynamic module and the target event schema is not verified:

- do not invent the path;
- do not copy it from an approved visual example;
- render the surrounding static structure if useful;
- return `klaviyo_variables_needed` with the exact fields that must be copied from Preview & test.

Never convert a plausible guess into production-ready HTML.
