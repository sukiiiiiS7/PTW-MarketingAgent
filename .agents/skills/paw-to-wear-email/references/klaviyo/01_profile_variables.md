# Klaviyo Profile Variables

## Simple profile field

```django
{{ person.first_name }}
```

## With fallback

```django
{{ person.first_name|default:'there' }}
```

Use fallbacks when an empty value would make the message awkward.

## Property names with spaces or special characters

Use lookup syntax:

```django
{{ person|lookup:'Favorite Color' }}
```

Do not guess custom profile property names. Use only names supplied by the user/account data.

## Conditional greeting

```django
{% if person.first_name %}
Hi {{ person.first_name }},
{% else %}
Hi there,
{% endif %}
```

Use personalization only when it improves the email. Paw to Wear does not need first-name personalization in every campaign.
