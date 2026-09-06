# Paw to Wear Static Image Placeholder Patterns

## Purpose

The user imports generated HTML into Klaviyo and inserts final images manually. Therefore every newly generated **static/editorial** image must be represented by an obvious, email-safe placeholder rather than an actual image URL.

This rule covers logo, hero, campaign product photography, customer photos, detail images, before/after images, process visuals, and decorative images.

Verified event-driven **dynamic product images** are a separate runtime feature and may remain dynamic when required.

## Required anatomy

Every static image slot must have:

1. a machine-readable HTML comment immediately before the placeholder;
2. a visible table-based placeholder block;
3. a short slot label;
4. recommended size/aspect ratio when useful;
5. intended alt text in the comment.

Comment format:

```html
<!-- PTW_IMAGE_PLACEHOLDER: <slot> | recommended=<size-or-ratio> | alt="<intended alt text>" -->
```

## Standard full-width placeholder

```html
<!-- PTW_IMAGE_PLACEHOLDER: hero | recommended=1200x800 | alt="Fall 2026 collection" -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="padding:52px 24px;background-color:#F5F5F5;border:1px dashed #CCCCCC;">
      <p style="margin:0 0 6px;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#676767;">Image Placeholder</p>
      <p style="margin:0;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;color:#999999;">Hero image · Recommended 1200 × 800</p>
    </td>
  </tr>
</table>
```

## Compact card placeholder

Use inside product/story cards:

```html
<!-- PTW_IMAGE_PLACEHOLDER: product-1 | recommended=1:1 | alt="Brew embroidery design" -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td align="center" style="padding:40px 16px;background-color:#F5F5F5;border:1px dashed #CCCCCC;">
      <p style="margin:0 0 5px;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;font-size:11px;line-height:17px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#676767;">Image Placeholder</p>
      <p style="margin:0;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#999999;">Product 1 · 1:1</p>
    </td>
  </tr>
</table>
```

## Comparison placeholders

For before/after, photo/preview, or artwork/finished-piece comparisons:
- keep both placeholder frames visually equal;
- use precise labels such as `Original photo`, `First preview`, `Final artwork`, `Finished embroidery`;
- stack the columns on mobile using the normal email responsive rules.

## Logo placeholder

The header logo is also a static image by default. Reserve the approved visual space, but do not copy the logo URL from historical examples. Label it `Logo` and note intended width around 150–160px.

## Do not

Do not:
- embed old CloudFront/Klaviyo image URLs from examples;
- use lorem-picsum or other placeholder-image services;
- create `src="IMAGE_HERE"` or broken image tags;
- use local paths;
- omit the slot label when multiple images appear in one email.
