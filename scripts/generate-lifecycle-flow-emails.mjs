import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputDir = path.join(root, 'outputs', 'email', 'lifecycle-flow');
const footerPath = path.join(root, '.agents', 'skills', 'paw-to-wear-email', 'references', 'components', 'canonical_footer.html');
const footer = fs.readFileSync(footerPath, 'utf8').replace(/\r\n/g, '\n');

const URLS = {
  home: 'https://pawtowear.com/',
  preview: 'https://pawtowear.com/pages/preview-approval',
  sweatshirt: 'https://pawtowear.com/products/custom-full-color-embroidered-pet-portrait-sweatshirt',
};

const ASSETS = {
  logo: 'https://d3k81ch9hvuctc.cloudfront.net/company/RZF6sQ/images/583f3348-0ba3-44b9-982a-a318d352a597.png',
  sleepyhead: 'https://pawtowear.com/cdn/shop/files/1_502bad0c-aac6-463a-b455-af70df14eecb.png?v=1788416395&amp;width=900',
  bold: 'https://pawtowear.com/cdn/shop/files/Frame_6.png?v=1788433035&amp;width=900',
};

const esc = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

const p = (copy, last = false) => `<p class="mobile-body" style="margin:0${last ? '' : ' 0 18px'};font-size:15px;line-height:25px;color:#676767;">${copy}</p>`;

const button = (label, href, marker = '') => `
<a class="button" href="${href}"${marker ? ` data-klaviyo-replace="${marker}"` : ''}>${label}</a>`;

const hero = ({ eyebrow, title, intro, cta, href = URLS.home, marker = '' }) => `
<tr>
  <td class="mobile-padding" align="center" style="padding:58px 48px 56px;background-color:#f4f2ed;border-top:1px solid #eee8e2;">
    <p style="margin:0 0 14px;font-size:11px;line-height:18px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#8f642c;">${eyebrow}</p>
    <h1 class="mobile-title" style="margin:0 0 20px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:42px;line-height:48px;font-weight:400;color:#252321;">${title}</h1>
    <p class="mobile-body" style="margin:0 0 ${cta ? '29' : '0'}px;font-size:17px;line-height:27px;color:#676767;">${intro}</p>
    ${cta ? button(cta, href, marker) : ''}
  </td>
</tr>`;

const copySection = ({ eyebrow = '', title, body, align = 'left', background = '#ffffff', cta = '', href = URLS.home, marker = '' }) => `
<tr>
  <td class="mobile-padding" align="${align}" style="padding:48px;background-color:${background};">
    ${eyebrow ? `<p style="margin:0 0 11px;font-size:11px;line-height:18px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9a8b86;">${eyebrow}</p>` : ''}
    <h2 class="mobile-h2" style="margin:0 0 17px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:30px;line-height:37px;font-weight:400;color:#252321;">${title}</h2>
    ${body.map((item, i) => p(item, i === body.length - 1 && !cta)).join('\n')}
    ${cta ? `<div style="padding-top:11px;">${button(cta, href, marker)}</div>` : ''}
  </td>
</tr>`;

const twoCards = (cards, background = '#ffffff') => `
<tr>
  <td class="mobile-padding" style="padding:0 48px 50px;background-color:${background};">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        ${cards.map((card, i) => `
        <td class="mobile-column ${i === 0 ? 'card-left' : 'card-right'}" width="50%" valign="top" style="width:50%;padding:${i === 0 ? '0 7px 0 0' : '0 0 0 7px'};">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f5;border:1px solid #eee6df;">
            <tr><td style="padding:25px 22px;">
              <p style="margin:0 0 8px;font-size:11px;line-height:17px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8f642c;">${card.label}</p>
              <h3 style="margin:0 0 9px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:22px;line-height:28px;font-weight:400;color:#252321;">${card.title}</h3>
              <p style="margin:0;font-size:14px;line-height:22px;color:#676767;">${card.copy}</p>
            </td></tr>
          </table>
        </td>`).join('')}
      </tr>
    </table>
  </td>
</tr>`;

const imageSection = ({ src, alt, title, copy, href = URLS.home }) => `
<tr>
  <td style="background-color:#ffffff;">
    <a href="${href}" style="text-decoration:none;"><img src="${src}" width="600" alt="${esc(alt)}" style="display:block;width:100%;max-width:600px;height:auto;border:0;"></a>
  </td>
</tr>
${copySection({ eyebrow: 'Made to wear', title, body: [copy], align: 'center' })}`;

const processSteps = (steps) => `
<tr>
  <td class="mobile-padding" style="padding:48px;background-color:#ffffff;">
    <p style="margin:0 0 11px;text-align:center;font-size:11px;line-height:18px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#9a8b86;">From photo to finished piece</p>
    <h2 class="mobile-h2" style="margin:0 0 28px;text-align:center;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:30px;line-height:37px;font-weight:400;color:#252321;">You stay part of the process.</h2>
    ${steps.map((step, i) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${i ? 'border-top:1px solid #eee6df;' : ''}">
      <tr>
        <td width="46" valign="top" style="padding:${i ? '20px' : '0'} 14px 20px 0;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:27px;line-height:31px;color:#ceb134;">${String(i + 1).padStart(2, '0')}</td>
        <td valign="top" style="padding:${i ? '20px' : '0'} 0 20px;">
          <p style="margin:0 0 5px;font-size:15px;line-height:22px;font-weight:700;color:#252321;">${step.title}</p>
          <p style="margin:0;font-size:14px;line-height:22px;color:#676767;">${step.copy}</p>
        </td>
      </tr>
    </table>`).join('')}
  </td>
</tr>`;

const checklist = ({ title, items, background = '#f5eee7' }) => `
<tr>
  <td class="mobile-padding" style="padding:44px 48px;background-color:${background};">
    <h2 class="mobile-h2" style="margin:0 0 22px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:29px;line-height:36px;font-weight:400;color:#252321;">${title}</h2>
    ${items.map((item) => `<p style="margin:0 0 13px;font-size:15px;line-height:23px;color:#252321;"><span style="color:#8f642c;font-weight:700;">&#10003;&nbsp;</span>${item}</p>`).join('')}
  </td>
</tr>`;

const placeholderBlock = ({ label, title, copy }) => `
<!-- ASSET_OR_COPY_NEEDED: ${label} -->
<tr>
  <td class="mobile-padding" style="padding:0 48px 48px;background-color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f5;border:1px dashed #9a8b86;">
      <tr><td align="center" style="padding:32px 26px;">
        <p style="margin:0 0 9px;font-size:11px;line-height:17px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8f642c;">${label}</p>
        <h3 style="margin:0 0 10px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:24px;line-height:31px;font-weight:400;color:#252321;">${title}</h3>
        <p style="margin:0;font-size:14px;line-height:22px;color:#676767;">${copy}</p>
      </td></tr>
    </table>
  </td>
</tr>`;

const dynamicFallback = ({ context, title, copy, cta, marker }) => `
<!-- KLAVIYO_DYNAMIC_BLOCK_NEEDED: ${context}. Replace this fallback with verified Preview & test fields. -->
<tr>
  <td class="mobile-padding" style="padding:0 48px 48px;background-color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f5;border:1px solid #eee6df;">
      <tr><td style="padding:28px 26px;">
        <p style="margin:0 0 8px;font-size:11px;line-height:17px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8f642c;">Your custom piece</p>
        <h3 style="margin:0 0 9px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:24px;line-height:30px;font-weight:400;color:#252321;">${title}</h3>
        <p style="margin:0 0 22px;font-size:14px;line-height:22px;color:#676767;">${copy}</p>
        ${button(cta, URLS.home, marker)}
      </td></tr>
    </table>
  </td>
</tr>`;

const checkoutItems = (cta) => `
<tr>
  <td class="mobile-padding" style="padding:0 48px 48px;background-color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#faf8f5;border:1px solid #eee6df;">
      {% for item in event.extra.line_items %}
      <tr>
        <td style="padding:22px;{% if not forloop.last %}border-bottom:1px solid #eee6df;{% endif %}">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td width="104" valign="top" style="width:104px;padding-right:18px;">
                <img src="{% if item.product.variant.images.0.src %}{{ item.product.variant.images.0.src }}{% else %}{{ item.product.images.0.src|missing_product_image }}{% endif %}" width="104" alt="{{ item.product.title }}" style="display:block;width:104px;max-width:104px;height:auto;border:0;">
              </td>
              <td valign="top">
                <p style="margin:0 0 7px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:21px;line-height:27px;color:#252321;">{{ item.product.title }}</p>
                {% if item.variant_title %}<p style="margin:0 0 5px;font-size:13px;line-height:20px;color:#676767;">{{ item.variant_title }}</p>{% endif %}
                <p style="margin:0 0 5px;font-size:13px;line-height:20px;color:#676767;">Quantity: {{ item.quantity|floatformat:0 }}</p>
                <p style="margin:0;font-size:14px;line-height:21px;font-weight:700;color:#252321;">{% currency_format item.line_price %}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      {% endfor %}
      <tr><td align="center" style="padding:8px 22px 28px;">${button(cta, '{{ event.responsive_checkout_url }}')}</td></tr>
    </table>
  </td>
</tr>`;

const offerCard = () => `
<tr>
  <td class="mobile-padding" style="padding:0 48px 48px;background-color:#ffffff;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5eee7;border:1px solid #eee6df;">
      <tr><td align="center" style="padding:30px 26px;">
        <p style="margin:0 0 9px;font-size:11px;line-height:17px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8f642c;">A little more of their story</p>
        <h2 style="margin:0 0 12px;font-family:'Libre Caslon Text',Georgia,'Times New Roman',serif;font-size:28px;line-height:35px;font-weight:400;color:#252321;">Make it even more theirs.</h2>
        <p style="margin:0 0 23px;font-size:15px;line-height:24px;color:#676767;">Enjoy 10% off with code PERSONAL10.</p>
        ${button('Finish My Piece', '{{ event.responsive_checkout_url }}')}
      </td></tr>
    </table>
  </td>
</tr>`;

const emails = [
  {
    file: '01-welcome-brand-promise.html', flow: 'Lead → Browse', timing: 'Immediately after signup', mode: 'flow_profile_personalized',
    subject: 'More than a photo on a sweatshirt.', preheader: 'Your pet, translated into artwork you can approve—then made to wear.',
    variables: [], assetNeeds: ['Verified original pet photo and matching finished embroidery image.'],
    body: () => [
      hero({ eyebrow: 'Welcome to Paw to Wear', title: 'Wear what matters.', intro: 'We turn the pets who shape your days into wearable pieces made around their face, personality, and story.', cta: 'Explore Custom Pieces' }),
      copySection({ eyebrow: 'From one photo', title: 'Not printed on. Thought through.', body: ['A Paw to Wear piece begins with a photo you chose for a reason—the tilted ear, the familiar expression, the look you know instantly.', 'Our team translates it into custom artwork, shares a preview with you, and only then moves toward embroidery. The result is not generic pet merchandise. It is something recognizably yours.'] }),
      placeholderBlock({ label: 'Photo → finished piece', title: 'One image. One wearable story.', copy: 'Replace this proof slot with one verified original-photo and finished-embroidery pair before sending.' }),
      copySection({ title: 'Made around the one who matters.', body: ['For slow coffee walks, familiar routines, birthdays, gifts, and the memories you want close—start with the pet and the photo that says the most.'], align: 'center', background: '#f5eee7', cta: 'Explore Custom Pieces' }),
    ].join('\n'),
  },
  {
    file: '02-welcome-how-it-works.html', flow: 'Lead → Browse', timing: '+1 day', mode: 'flow_profile_personalized',
    subject: 'See it before we stitch it.', preheader: 'Your photo becomes artwork, then a preview you can review and revise.',
    variables: [], assetNeeds: [],
    body: () => [
      hero({ eyebrow: 'How it works', title: 'You see the artwork first.', intro: 'The most important part of a custom piece is recognizing them in it. That is why you are part of the process before embroidery begins.', cta: 'See How It Works', href: URLS.preview }),
      processSteps([
        { title: 'Choose your photo', copy: 'Pick the expression or moment that feels most like them. A real team member reviews whether it will translate well into embroidery.' },
        { title: 'We create the artwork', copy: 'Your selected photo and customization choices guide the portrait artwork.' },
        { title: 'Review your preview', copy: 'You see the design before production and can describe changes or share reference images.' },
        { title: 'Approve, then stitch', copy: 'Production normally begins after approval, using the artwork you signed off on.' },
      ]),
      checklist({ title: 'Less guessing. More say in the result.', items: ['A human photo-quality review', 'Artwork preview before production', 'Revision requests before approval', 'A finished-piece photo before shipment'] }),
      copySection({ title: 'Your photo starts it. Your approval moves it forward.', body: ['Explore the full preview and approval process whenever you are ready.'], align: 'center', cta: 'See How It Works', href: URLS.preview }),
    ].join('\n'),
  },
  {
    file: '03-welcome-customer-story.html', flow: 'Lead → Browse', timing: '+3 days', mode: 'flow_profile_personalized',
    subject: 'The photo they could not leave behind.', preheader: 'A Paw to Wear story begins with why one image matters.',
    variables: [], assetNeeds: ['Verified customer name/pet name, permissioned story, original photo, and finished-piece image.'],
    body: () => [
      hero({ eyebrow: 'A Paw to Wear story', title: 'Some photos hold more than a face.', intro: 'They hold the Sunday routine, the expression before a walk, or the look that became part of home.', cta: '' }),
      placeholderBlock({ label: 'Verified customer story required', title: '[Pet name] and the photo that mattered', copy: 'Insert a permissioned story here: who the pet is, the specific moment in the selected photo, and why the customer wanted to wear it.' }),
      twoCards([
        { label: 'The photo', title: 'Why this one', copy: 'Replace with the customer’s concrete detail: the pose, expression, ritual, or memory visible in the original image.' },
        { label: 'The finished piece', title: 'What it became', copy: 'Replace with the approved artwork and finished embroidery, plus the customer’s verified reaction.' },
      ]),
      copySection({ eyebrow: 'Your story can start anywhere', title: 'Choose the detail you know by heart.', body: ['A clear portrait matters. So does the reason you chose it. Together, they make a piece that belongs to no one else.'], align: 'center', background: '#f5eee7', cta: 'Create Yours' }),
    ].join('\n'),
  },
  {
    file: '04-welcome-craftsmanship-value.html', flow: 'Lead → Browse', timing: '+5 days', mode: 'flow_profile_personalized',
    subject: 'What goes into every stitch.', preheader: 'Custom artwork, your approval, heavyweight garments, and careful construction.',
    variables: [], assetNeeds: ['Optional verified stitch close-up image.'],
    body: () => [
      hero({ eyebrow: 'Craft and construction', title: 'The value is in what happens before—and after—the first stitch.', intro: 'A Paw to Wear piece brings together portrait work, customer approval, embroidery, and a garment chosen to be part of everyday life.', cta: 'Explore the Details', href: URLS.sweatshirt }),
      imageSection({ src: ASSETS.sleepyhead, alt: 'Paw to Wear custom embroidered Sleepyhead Stitch sweatshirt', title: 'A substantial canvas for their story.', copy: 'Our hoodies and crewneck sweatshirts use 380 GSM heavyweight loopback terry: 56.1% cotton and 43.9% polyester, with set-in sleeves and reinforced topstitching.', href: URLS.sweatshirt }),
      checklist({ title: 'What you are paying for', items: ['Artwork developed from your supplied photo', 'A preview you can review before production', 'Revision requests before approval', 'Embroidery on the selected garment', 'A photograph of the finished piece before shipment'] }),
      copySection({ title: 'Specific choices. Visible proof.', body: ['We would rather show you the process and construction than ask you to take “premium” on faith.'], align: 'center', cta: 'Explore the Details', href: URLS.sweatshirt }),
    ].join('\n'),
  },
  {
    file: '05-welcome-buying-reason.html', flow: 'Lead → Browse', timing: '+7 days', mode: 'flow_profile_personalized',
    subject: 'Who are you making it for?', preheader: 'For your wardrobe, a gift, another pet, or a memory you want close.',
    variables: [], assetNeeds: ['Optional active first-purchase incentive and exact terms.', 'Optional verified Klaviyo preference-link URLs for Myself / Gift / Not sure yet.'],
    body: () => [
      hero({ eyebrow: 'Start with the reason', title: 'One pet. Many reasons to make the piece.', intro: 'The same custom portrait can carry a different meaning depending on who—and what—it is for.', cta: 'Make Something That Matters' }),
      twoCards([
        { label: 'For yourself', title: 'Bring them into your everyday style.', copy: 'A piece made around the face, personality, and details that are already part of your routine.' },
        { label: 'For a gift', title: 'Give them something only they could own.', copy: 'Begin with a pet and a photo that means something specific to the person receiving it.' },
      ]),
      twoCards([
        { label: 'For another pet', title: 'Make room for a different story.', copy: 'A second companion can call for a different photo, design, color, or mood.' },
        { label: 'For remembrance', title: 'Keep a familiar detail close.', copy: 'The ears you always recognized. The expression you still know by heart. Made with restraint and care.' },
      ], '#ffffff'),
      copySection({ title: 'You do not need the whole idea yet.', body: ['Start with the pet. Choose the photo. We will help you see what it can become before it is stitched.'], align: 'center', background: '#f5eee7', cta: 'Make Something That Matters' }),
    ].join('\n'),
  },
  {
    file: '06-browse-viewed-product-reminder.html', flow: 'Browse → Added to Cart', timing: '2–4 hours after Viewed Product', mode: 'flow_event_triggered',
    subject: 'Still picturing them in this?', preheader: 'The piece you viewed starts with their photo—and a preview before embroidery.',
    variables: ['Viewed Product: product title', 'Viewed Product: product image URL', 'Viewed Product: product or customization URL'], assetNeeds: [],
    body: () => [
      hero({ eyebrow: 'The piece you viewed', title: 'Still thinking about turning their photo into this?', intro: 'You can return when you are ready. Your artwork will be shown to you before production, so you will have a chance to see how the portrait is taking shape.', cta: '' }),
      dynamicFallback({ context: 'Viewed Product event', title: 'The design you were exploring', copy: 'Return to keep choosing the garment, color, and details that will make it feel like yours.', cta: 'Continue Customizing', marker: 'viewed-product-url' }),
      checklist({ title: 'What happens after you order', items: ['Your photo is reviewed by a real team member', 'Custom artwork is created from your photo', 'You receive a preview before production', 'You can request changes before approval'] }),
      copySection({ title: 'Your photo. Your choices. Your piece.', body: ['Pick up where you left off and keep shaping something unmistakably theirs.'], align: 'center', cta: 'Continue Customizing', marker: 'viewed-product-url' }),
    ].join('\n'),
  },
  {
    file: '07-browse-objection-killer.html', flow: 'Browse → Added to Cart', timing: '+20–24 hours', mode: 'flow_event_triggered',
    subject: 'Four questions before you make it theirs.', preheader: 'Photo quality, likeness, revisions, and timing—answered clearly.',
    variables: ['Viewed Product: product or customization URL'], assetNeeds: ['Verified customer testimonial about likeness.', 'Verified stitched close-up image.'],
    body: () => [
      hero({ eyebrow: 'Before you decide', title: 'The questions custom pieces should answer.', intro: 'You should not have to guess how your photo becomes embroidery—or whether you will have a say in the result.', cta: '' }),
      copySection({ eyebrow: 'Will it look like them?', title: 'You see the artwork before production.', body: ['The portrait is created from your photo and customization choices. You can review the preview and request changes before approval.'] }),
      twoCards([
        { label: 'Is my photo good enough?', title: 'A person checks it.', copy: 'If your photo will not translate well into embroidery, our team asks for a replacement rather than quietly moving ahead.' },
        { label: 'What if I want changes?', title: 'Tell us what feels off.', copy: 'Share specific feedback or reference images while reviewing your preview. Production normally begins after approval.' },
      ]),
      copySection({ eyebrow: 'How long does it take?', title: 'Artwork first. Production after approval.', body: ['The preview is usually sent within about two business days after order and photo upload. After final approval, U.S. processing takes 2–5 business days; U.S. transit is typically another 2–5 business days.'] }),
      placeholderBlock({ label: 'Verified review required', title: '“[Insert real likeness testimonial]”', copy: 'Add a permissioned review and matching stitched close-up. Do not publish this placeholder.' }),
      copySection({ title: 'Ready to see what yours could become?', body: ['Return to the piece you viewed and continue from there.'], align: 'center', background: '#f5eee7', cta: 'View Your Piece', marker: 'viewed-product-url' }),
    ].join('\n'),
  },
  {
    file: '08-cart-reminder.html', flow: 'Added to Cart → Started Checkout', timing: '+1 hour', mode: 'flow_event_triggered',
    subject: 'Your custom piece is still here.', preheader: 'Return to your cart and continue with the choices you started.',
    variables: ['Added to Cart/Cart event: cart recovery URL', 'Cart item title', 'Variant/color', 'Pet count/customization context if exposed'], assetNeeds: [],
    body: () => [
      hero({ eyebrow: 'Saved for later', title: 'Come back to the piece you started.', intro: 'Your product and customization choices are waiting in your cart. Return when you are ready to continue.', cta: '' }),
      dynamicFallback({ context: 'Added to Cart or Cart event', title: 'Your selected piece', copy: 'Your product and custom choices are waiting where you left them.', cta: 'Return to Cart', marker: 'cart-recovery-url' }),
    ].join('\n'),
  },
  {
    file: '09-cart-customization-reassurance.html', flow: 'Added to Cart → Started Checkout', timing: '+12 hours', mode: 'flow_event_triggered',
    subject: 'You do not have to get every detail perfect now.', preheader: 'A real person reviews your photo, and you see the artwork before production.',
    variables: ['Added to Cart/Cart event: cart recovery URL'], assetNeeds: [],
    body: () => [
      hero({ eyebrow: 'A little less pressure', title: 'You are not making the final stitch today.', intro: 'Choose the piece, add your photo, and complete your order. There is still a human review and artwork-approval process ahead.', cta: 'Finish Your Order', marker: 'cart-recovery-url' }),
      processSteps([
        { title: 'We review the photo', copy: 'If it is not suitable for embroidery, we ask for a better one.' },
        { title: 'We create the artwork', copy: 'The portrait is built from the photo and options you selected.' },
        { title: 'You review the preview', copy: 'You can point out what you want changed and share references.' },
        { title: 'Production normally follows approval', copy: 'The artwork you approve becomes the basis for embroidery.' },
      ]),
      copySection({ title: 'Start the order. Keep your say in the result.', body: ['Return to your cart and finish the choices in front of you. We will guide the artwork stage after that.'], align: 'center', background: '#f5eee7', cta: 'Finish Your Order', marker: 'cart-recovery-url' }),
    ].join('\n'),
  },
  {
    file: '10-cart-final-nudge.html', flow: 'Added to Cart → Started Checkout', timing: '+30–36 hours', mode: 'flow_event_triggered',
    subject: 'Why people come back to finish the piece.', preheader: 'It is the moment the photo starts to feel unmistakably theirs.',
    variables: ['Added to Cart/Cart event: cart recovery URL'], assetNeeds: ['Verified review or customer reaction and matching finished embroidery.'],
    body: () => [
      hero({ eyebrow: 'One last look', title: 'The piece becomes real when it starts to look like them.', intro: 'A familiar expression, translated into artwork you can review, is often what turns an idea into something worth wearing.', cta: '' }),
      imageSection({ src: ASSETS.bold, alt: 'Paw to Wear Bold Stitch custom embroidered pet hoodie', title: 'Made from choices that are yours.', copy: 'The pet, photo, design, garment, and customization all come together in one wearable piece.', href: URLS.home }),
      placeholderBlock({ label: 'Verified customer proof required', title: '“[Insert real customer reaction]”', copy: 'Pair a permissioned review with the corresponding finished embroidery before this email is activated.' }),
      copySection({ title: 'Finish the piece you started.', body: ['Your cart is the shortest way back to your selected product and custom options.'], align: 'center', background: '#f5eee7', cta: 'Complete Your Piece', marker: 'cart-recovery-url' }),
    ].join('\n'),
  },
  {
    file: '11-checkout-resume.html', flow: 'Started Checkout → Purchase', timing: '+3 hours', mode: 'flow_event_triggered',
    subject: 'Your custom piece is waiting.', preheader: 'Your checkout is still open when you are ready to finish.',
    variables: ['event.responsive_checkout_url', 'event.extra.line_items and approved item fields'], assetNeeds: [],
    body: () => [
      hero({ eyebrow: 'Checkout saved', title: 'You are close to making it yours.', intro: 'Your selected piece is still waiting. Return to checkout to finish your order.', cta: 'Return to Your Custom Piece', href: '{{ event.responsive_checkout_url }}' }),
      checkoutItems('Return to Your Custom Piece'),
    ].join('\n'),
  },
  {
    file: '12-checkout-risk-reversal.html', flow: 'Started Checkout → Purchase', timing: '+48 hours', mode: 'flow_event_triggered',
    subject: 'Before we stitch, you get to see it.', preheader: 'Photo review, artwork preview, revisions, and finished-piece proof.',
    variables: ['event.responsive_checkout_url', 'event.extra.line_items and approved item fields'], assetNeeds: ['Verified testimonial about concern over likeness and the final result.'],
    body: () => [
      hero({ eyebrow: 'The risk-reversal email', title: 'A custom piece should not be a blind leap.', intro: 'You will see the artwork before production, and you can ask for changes while reviewing the preview.', cta: 'Continue Your Custom Piece', href: '{{ event.responsive_checkout_url }}' }),
      checklist({ title: 'What sits between checkout and stitching', items: ['A real team member reviews your photo', 'Artwork is created from your photo and selected options', 'A preview is sent before production', 'You can request revisions before approval', 'The completed embroidery is photographed before shipment'] }),
      placeholderBlock({ label: 'Verified testimonial required', title: '“I worried it would not look like them, but…”', copy: 'Replace with a real, permissioned customer quote and corresponding finished piece.' }),
      checkoutItems('Continue Your Custom Piece'),
    ].join('\n'),
  },
  {
    file: '13-checkout-decision.html', flow: 'Started Checkout → Purchase', timing: '+72 hours', mode: 'flow_event_triggered',
    subject: 'Not just customized. Entirely yours.', preheader: 'Their photo, their choices, and 10% off with code PERSONAL10.',
    variables: ['event.responsive_checkout_url', 'event.extra.line_items and approved item fields', 'PERSONAL10 verified as 10% off entire order, no minimum, no stacking'],
    assetNeeds: ['Offer eligibility, start/end dates, stacking rules, and active status.'],
    body: () => [
      hero({ eyebrow: 'Made around them', title: 'This is not just a custom sweatshirt.', intro: 'It is a pet-inspired wearable piece built from your pet, your photo, and the choices that make it feel at home in your wardrobe.', cta: 'Finish My Piece', href: '{{ event.responsive_checkout_url }}' }),
      copySection({ eyebrow: 'A different way to frame it', title: 'Something personal enough to wear often.', body: ['The familiar face is theirs. The selected photo is yours. So are the garment, design, and details that bring the two into everyday life.', 'What you finish today becomes a piece that could only begin with your story.'] }),
      offerCard(),
      checkoutItems('Finish My Piece'),
    ].join('\n'),
  },
];

const shell = (email) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    <title>${esc(email.subject)}</title>
    <style>
      html,body{margin:0!important;padding:0!important;width:100%!important;background:#f4f2ed;}table{border-collapse:collapse!important;border-spacing:0!important;}img{display:block;border:0;outline:none;text-decoration:none;height:auto;}a{color:inherit}.email-container{width:100%;max-width:600px}.button{display:inline-block;padding:16px 30px;border-radius:6px;background:#252321;color:#fff!important;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;font-size:15px;line-height:20px;font-weight:700;letter-spacing:.2px;text-decoration:none}
      @media screen and (max-width:620px){.outer-pad{padding:0!important}.mobile-padding{padding-left:24px!important;padding-right:24px!important}.mobile-title{font-size:34px!important;line-height:40px!important}.mobile-h2{font-size:27px!important;line-height:34px!important}.mobile-body{font-size:16px!important;line-height:25px!important}.mobile-column{display:block!important;width:100%!important;max-width:100%!important}.card-left,.card-right{padding:0 0 14px!important}.button{display:block!important;text-align:center!important}}
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f2ed;font-family:'Plus Jakarta Sans',Arial,Helvetica,sans-serif;color:#252321;">
    <!--
      Subject: ${email.subject}
      Preheader: ${email.preheader}
      Klaviyo context: ${email.flow} / ${email.mode}
      Variables needed: ${email.variables.length ? email.variables.join(' | ') : 'None'}
      Asset/offer needs: ${email.assetNeeds.length ? email.assetNeeds.join(' | ') : 'None'}
    -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">${esc(email.preheader)}</div>
    <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;background-color:#f4f2ed;">
      <tr><td class="outer-pad" align="center" style="padding:24px 12px;">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background-color:#ffffff;">
          <tr><td align="center" style="padding:30px 24px 26px;background-color:#ffffff;"><a href="${URLS.home}" style="text-decoration:none;"><img src="${ASSETS.logo}" width="160" alt="Paw to Wear" style="display:block;width:160px;max-width:160px;height:auto;border:0;"></a></td></tr>
          ${email.body()}
${footer}        </table>
      </td></tr>
    </table>
  </body>
</html>
`;

fs.mkdirSync(outputDir, { recursive: true });

for (const email of emails) {
  fs.writeFileSync(path.join(outputDir, email.file), shell(email), 'utf8');
}

const manifestRows = emails.map((email, index) => `| ${index + 1} | ${email.flow} | ${email.timing} | ${email.subject} | ${email.preheader} | [${email.file}](./${email.file}) |`).join('\n');
const variableRows = emails.filter((email) => email.variables.length || email.assetNeeds.length).map((email) => `### ${email.file}\n\n${email.variables.length ? `Klaviyo variables needed:\n${email.variables.map((item) => `- ${item}`).join('\n')}\n` : ''}${email.assetNeeds.length ? `\nAssets / verification needed:\n${email.assetNeeds.map((item) => `- ${item}`).join('\n')}\n` : ''}`).join('\n');

const readme = `# Paw to Wear — Lead-to-Purchase Lifecycle Flow\n\nThis folder contains 13 English, responsive, Klaviyo custom-HTML emails. Timing follows the supplied lifecycle map.\n\n| # | Flow | Timing | Subject | Preheader | File |\n| ---: | --- | --- | --- | --- | --- |\n${manifestRows}\n\n## Klaviyo implementation notes\n\n- Welcome emails are profile/list-triggered and contain no guessed event fields.\n- Browse and Added-to-Cart event schemas were not supplied. Their HTML uses safe customer-facing fallback blocks and marks the CTA with \`data-klaviyo-replace\`; replace those blocks/URLs only with exact values copied from Klaviyo Preview & test.\n- Shopify Started Checkout uses the approved Paw to Wear paths: \`event.responsive_checkout_url\`, \`event.extra.line_items\`, and the documented item fields used in these templates.\n- Configure flow filters so Browse exits on Added to Cart, cart emails exit on Started Checkout, and every abandonment flow exits on Placed Order.\n- PERSONAL10 is a verified active Shopify discount code: 10% off entire order, no minimum purchase, cannot combine with other discounts. Re-verify current status (active/expired, usage limits) in Shopify admin before each send.\n- Add product-interest profile updates (hoodie / sweatshirt / multi-pet, etc.) in Klaviyo flow actions using verified event values; this is an automation configuration, not an email-template function.\n- The canonical footer is inserted verbatim in every file.\n\n## Variables and assets still needed\n\n${variableRows}\n`;
fs.writeFileSync(path.join(outputDir, 'README.md'), readme, 'utf8');

const brandBrief = `brand_brief:\n  task:\n    deliverable: \"13 responsive Klaviyo lifecycle-flow emails\"\n    channel: \"Klaviyo email\"\n    campaign_or_occasion: \"Lead-to-purchase lifecycle\"\n    business_goal: \"brand education, first conversion, and objection reduction\"\n  subject:\n    garment: \"Custom Paw to Wear apparel; garment-specific claims only where named\"\n  audience_context:\n    audience: \"Style-conscious pet parents and gift buyers\"\n    lifecycle_or_awareness_context: \"Signup, Viewed Product, Added to Cart, Started Checkout\"\n    lifestyle: \"Everyday identity first; gifting and remembrance as secondary motivations\"\n  brand_context:\n    positioning: \"Pet-inspired lifestyle fashion brand\"\n    brand_idea: \"Wear What Matters.\"\n    architecture_lens: \"Pet relationship and identity → wearable object → craft → specification\"\n  message_direction:\n    central_idea: \"A Paw to Wear piece turns a specific pet, photo, and relationship into wearable storytelling with customer visibility before embroidery.\"\n    emotional_register: [\"warm\", \"observant\", \"restrained\", \"fashion-aware\"]\n    relevant_customer_motivation: [\"everyday closeness\", \"personal style\", \"gifting\", \"another pet\", \"remembrance\"]\n  expression:\n    voice: [\"clear\", \"specific\", \"understated\", \"emotionally intelligent\"]\n    preferred_language: [\"recognizably them\", \"made around them\", \"wearable piece\", \"your photo and your choices\"]\n    avoid: [\"fur baby\", \"generic gift-store language\", \"unsupported premium claims\", \"false urgency\", \"tagline stacking\"]\n    cta_family: [\"Create Yours\", \"Explore Custom Pieces\", \"return/continue checkout language\"]\n  approved_product_truth:\n    facts:\n      - \"A real team member reviews photo suitability.\"\n      - \"Artwork is created from the supplied photo and selected customization.\"\n      - \"A preview is presented before production; the customer can request revisions before approval.\"\n      - \"Approval is the normal production gate, with a documented no-response exception.\"\n      - \"Finished embroidery is photographed before shipment.\"\n      - \"Hoodies and crewneck sweatshirts use 380 GSM heavyweight loopback terry, 56.1% cotton / 43.9% polyester.\"\n  constraints:\n    unsupported_claims_to_avoid: [\"unverified review text\", \"unverified event paths\", \"unverified offer activation\", \"380 GSM as a catalog-wide claim\"]\n    verification_needed: [\"Viewed Product schema\", \"Added to Cart/cart schema\", \"permissioned customer stories and reviews\", \"PERSONAL10 discount code current status\"]\n    task_local_facts: [\"Email 13 uses verified PERSONAL10 code: 10% off entire order, no minimum, no stacking (confirmed in Shopify admin)\"]\n  handoff:\n    downstream_skill: \"paw-to-wear-email\"\n    downstream_instruction: \"Use this brief as the factual and expression boundary for all 13 templates.\"\n`;
fs.writeFileSync(path.join(outputDir, 'brand-brief.yaml'), brandBrief, 'utf8');

console.log(`Generated ${emails.length} lifecycle emails in ${outputDir}`);
