# Klaviyo Links and Compliance Tags

## Unsubscribe

For custom link styling:

```html
<a href="{% unsubscribe_link %}">Unsubscribe</a>
```

Klaviyo also supports `{% unsubscribe %}` to render a complete linked unsubscribe phrase.

Paw to Wear custom HTML emails must use the unsubscribe implementation from `../components/canonical_footer.html` via the locked footer. Do not create an alternate footer or unsubscribe treatment unless the user explicitly requests it.

## Manage preferences

Text-rendering tag:

```django
{% manage_preferences %}
```

URL-only tag for custom link/button markup:

```html
<a href="{% manage_preferences_link %}">Manage preferences</a>
```

## Web view

Text-rendering tag:

```django
{% web_view %}
```

URL-only tag:

```html
<a href="{% web_view_link %}">View in browser</a>
```

Do not add manage-preferences or web-view links to the Paw to Wear footer by default. The footer is locked to the canonical example. Use these tags elsewhere only when the user explicitly requests them for the email task.

## Dynamic links

For event-based buttons, the event URL path must be verified. Example for the approved Paw to Wear Started Checkout context:

```html
<a href="{{ event.responsive_checkout_url }}">Continue Your Custom Piece</a>
```
