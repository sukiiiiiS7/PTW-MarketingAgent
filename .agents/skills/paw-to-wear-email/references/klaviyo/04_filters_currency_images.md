# Klaviyo Filters, Currency, and Dynamic Images

## Defaults

```django
{{ person.first_name|default:'there' }}
```

Use for optional text values when a sensible fallback exists.

## Quantity formatting

Approved Paw to Wear example:

```django
{{ item.quantity|floatformat:0 }}
```

## Currency

For a verified numeric value:

```django
{% currency_format item.line_price %}
```

Do not use `currency_format` on a string that already includes a currency symbol.

## Missing product image fallback

Klaviyo supports:

```django
{{ event.image_url|missing_product_image }}
```

A custom fallback can use `default` with a verified HTTPS image URL.

Approved Paw to Wear Started Checkout image logic:

```django
{% if item.product.variant.images.0.src %}
  {{ item.product.variant.images.0.src }}
{% else %}
  {{ item.product.images.0.src|missing_product_image }}
{% endif %}
```

Use this only in the matching verified event/item shape.
