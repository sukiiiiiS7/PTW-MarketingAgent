# Klaviyo Conditionals and Loops

## Conditional

```django
{% if item.variant_title %}
  {{ item.variant_title }}
{% endif %}
```

## Else

```django
{% if person.first_name %}
  {{ person.first_name }}
{% else %}
  there
{% endif %}
```

## Loop

```django
{% for item in event.extra.line_items %}
  ...
{% endfor %}
```

Only use a loop when the collection path is verified.

## Loop metadata

Approved examples use `forloop.last`, for example to omit the last divider:

```django
{% if not forloop.last %}
border-bottom:1px solid #EEE6DF;
{% endif %}
```

## QA

Before completion:
- every opening block has a closing block;
- no curly/smart quotes appear in tag syntax;
- HTML tags remain balanced across conditions;
- optional values are guarded when empty output would break layout or copy.
