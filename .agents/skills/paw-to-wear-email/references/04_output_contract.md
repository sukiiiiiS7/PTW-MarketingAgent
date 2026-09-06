# Output Contract

## Default response

Return:

```text
Subject: <subject line>
Preheader: <preheader>
```

If Klaviyo personalization/dynamic logic is used, also return a compact runtime summary:

```text
Klaviyo context: Shopify Started Checkout flow
Dynamic data used:
- event.responsive_checkout_url (verified for this account; see klaviyo/08_shopify_started_checkout.md)
- event.extra.line_items
```

If a non-blocking implementation detail remains unresolved, still return the complete HTML document and add a compact note such as:

```text
Implementation notes:
- Insert a verified customer testimonial in the marked placeholder.
- Configure the supplied $10 sleeve-personalization offer before launch; no coupon name was invented.
```

Only use `Klaviyo variables needed` when a truly core runtime field has no verified mapping and no functional fallback.

## HTML contract

The HTML must:
- begin with `<!doctype html>` or equivalent;
- include `<html>`, `<head>`, and `<body>`;
- include viewport metadata;
- include hidden preheader text matching the preheader;
- be table-based for layout;
- include responsive media-query CSS;
- include all required Klaviyo tags literally, not escaped;
- contain no Markdown inside the HTML;
- include `references/components/canonical_footer.html` verbatim as the final footer component; do not rewrite or restyle it;
- represent all static/editorial images as the standardized visible placeholder blocks from `references/components/image_placeholder_patterns.md`;
- never copy static image URLs from historical examples into new output;
- allow verified Klaviyo dynamic image tags only where an event-driven dynamic-product module requires them;
- avoid local file paths.




## Visual composition contract

For marketing/editorial emails, the generated HTML must include task-appropriate visual slots when visuals would materially help the objective, even when the user did not supply final image assets.

Do not treat image placeholders as optional decoration added after all copy is written. They should be part of the section architecture.

Defaults:
- collection/product/seasonal campaign: normally 3-6 useful static placeholders;
- product spotlight: normally 1-4;
- story/proof/likeness: normally 2-5;
- lifestyle/brand/retention: normally 1-3;
- checkout +3h / operational: may use 0 static placeholders beyond the logo when dynamic items or clarity are sufficient.

These are directional defaults, not hard quotas. Task fit always wins.

If no final asset is available, create the labeled placeholder automatically and continue; do not ask the user to supply an image before producing the HTML.

## Static image placeholder contract

For every non-dynamic image slot, emit both:

1. an HTML comment that names the slot and intended alt text; and
2. a visible email-safe placeholder block that the user can locate and replace inside Klaviyo.

Example:

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

Do not use placeholder image services, fake CDN URLs, `src="#"`, local paths, or intentionally broken `<img>` tags.

## File output in Codex

When the user asks to create/save the email as a file, use:

`outputs/email/<descriptive-slug>.html`

unless the user gives another destination.

Do not silently create multiple alternative HTML files. Put alternatives (e.g. subject lines) in the response unless the user asks for multiple templates.

## Optional QA note

Keep QA notes out of the customer-facing HTML. If important, list only material unresolved items after the HTML or in `Klaviyo variables needed`.
