# Shopify Checkout Started — Verified Core Runtime Map

This reference is for runtime fields only. It is **not** a content or layout template.

## PTW runtime field (use this)

For the Paw to Wear Klaviyo account, real `Checkout Started` event data (confirmed via Preview & test with actual customer events) verified this is the working recovery/checkout URL field:

```django
{{ event.responsive_checkout_url }}
```

This has been used successfully across multiple production email builds (Checkout Resume, Risk Reversal, Decision emails) and verified to render correctly and link to the customer's actual saved checkout.

**Always use `event.responsive_checkout_url` for this account.** Do not use the generic documented fallback below unless a future Preview & test run shows the account-specific value no longer works.

## Source status

The following core field shapes are documented by current Klaviyo Help Center guidance for the Shopify `Checkout Started` metric and may be used as a starting reference without requiring the user to paste Preview & test data first. Account-specific Preview & test data (see above) always takes precedence over these generic values.

## Core fields

Recovery / checkout URL — generic documented fallback/reference only, NOT the PTW runtime field:

```django
{{ event.extra.checkout_url }}
```

Line-item collection:

```django
event.extra.line_items
```

First-item examples documented by Klaviyo:

```django
{{ event.extra.line_items.0.product.title }}
{{ event.extra.line_items.0.product.handle }}
{{ event.extra.line_items.0.product.images.0.src }}
{{ event.extra.line_items.0.line_price }}
{{ event.extra.line_items.0.quantity }}
```

When looping with alias `item`, derive the item-level tags by replacing the collection + numeric index with the alias:

```django
{% for item in event.extra.line_items %}
  {{ item.product.title }}
  {{ item.product.handle }}
  {{ item.product.images.0.src|missing_product_image }}
  {{ item.quantity|floatformat:0 }}
  {% currency_format item.line_price %}
{% endfor %}
```

A Shopify product URL may be composed from the documented handle pattern when needed:

```django
{{ organization.url }}products/{{ item.product.handle }}
```

## Do not assume these optional fields

Do not generate account-specific/optional paths such as the following unless verified in Preview & test:

- `item.variant_title`
- `item.product.variant.images...`
- custom line-item properties
- personalization properties
- sleeve customization values
- custom app metadata

If optional fields are not verified, omit them.

## Preview QA

The generated template should still be previewed in the actual `Checkout Started` flow with a real event before launch. Preview is QA, not a prerequisite for initial generation of the documented core fields.

## Important

Historical Paw to Wear HTML examples are visual/layout references only and are not runtime authority.
