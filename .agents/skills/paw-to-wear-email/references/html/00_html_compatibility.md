# Email HTML Compatibility Rules

## Structure

Use:
- complete HTML document;
- table-based layout;
- `role="presentation"` on layout tables;
- width attributes plus inline `width/max-width` where useful;
- simple media queries for mobile adaptations.

Avoid relying on:
- JavaScript;
- forms;
- CSS Grid;
- Flexbox for essential layout;
- CSS custom properties;
- `position: fixed/absolute` for core content;
- hover-only interactions;
- external scripts.

## Base pattern

```html
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
        ...
      </table>
    </td>
  </tr>
</table>
```

## Preheader

Include hidden preview text near the top of `<body>`:

```html
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
  Preheader text
</div>
```

## Images

### Static/editorial images

Do not emit actual static image URLs in newly generated Paw to Wear HTML. Use the email-safe placeholder pattern from `../components/image_placeholder_patterns.md` so the user can insert the real image after importing the HTML into Klaviyo.

Never use:
- copied historical CDN URLs;
- placeholder-image services;
- `src="#"`;
- intentionally broken `<img>` tags;
- local paths such as `C:\...` or `/mnt/data/...`.

### Verified dynamic images

A verified Klaviyo event-driven dynamic product image may use a real dynamic `<img src="{{ ... }}">` expression when that module is meant to populate automatically at send time. This exception does not permit guessed event paths.

## Responsive behavior

Default breakpoint: around 620px.

Common classes:
- `.mobile-padding`
- `.mobile-title`
- `.mobile-body`
- `.mobile-column`
- `.button`

Two-column content should stack cleanly on mobile.

## CSS

Critical styling should be inline. A small `<style>` block is allowed for resets, reusable classes, and media queries.

## Fonts

Use brand font names first with safe fallbacks. Do not make the email depend on successful remote font loading.

## Links

Use full HTTPS URLs unless the value is a verified Klaviyo dynamic tag.

## Accessibility basics

- meaningful alt text for meaningful images;
- empty alt for purely decorative logo/decorative images when appropriate;
- sufficient contrast;
- readable body size;
- descriptive CTA text;
- do not encode essential information only in an image.
