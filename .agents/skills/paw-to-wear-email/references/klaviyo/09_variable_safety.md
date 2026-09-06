# Klaviyo Variable Safety Checklist

Before calling dynamic HTML ready:

```yaml
klaviyo_validation:
  email_mode: null
  integration: null
  trigger_metric: null
  schema_source: null
  verified_profile_variables: []
  verified_event_variables: []
  verified_loop_collections: []
  verified_dynamic_urls: []
  verified_coupon_names: []
  unresolved: []
```

## Valid schema sources

Preferred:
- current target flow's `Preview & test` event properties supplied by the user.

Secondary:
- current official Klaviyo documentation for the exact integration + metric, followed by preview testing when the variable is essential.

Not valid:
- historical Paw to Wear email examples;
- memory;
- analogous metrics/integrations;
- plausible-looking field names.

## Blocker rules

A missing cosmetic personalization variable is not necessarily a blocker: omit it or use a safe fallback.

A missing essential event path is a blocker when it controls:
- product list;
- checkout/order URL;
- order status;
- price/value;
- shipment/tracking data;
- coupon code.

Do not use placeholder event paths that look real.

If a path is missing, explicitly state what to copy from `Preview & test`.
