import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require('C:\\Users\\孙匡正\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\playwright');

const root = process.cwd();
const sourceDir = path.join(root, 'outputs', 'email', 'lifecycle-flow');
const renderDir = path.join(sourceDir, 'qa-renders');
const footer = fs.readFileSync(path.join(root, '.agents', 'skills', 'paw-to-wear-email', 'references', 'components', 'canonical_footer.html'), 'utf8').replace(/\r\n/g, '\n');
const files = fs.readdirSync(sourceDir).filter((name) => /^\d{2}-.*\.html$/.test(name)).sort();

if (files.length !== 13) throw new Error(`Expected 13 email files, found ${files.length}`);

const errors = [];
const warnings = [];
const count = (haystack, needle) => haystack.split(needle).length - 1;

for (const file of files) {
  const html = fs.readFileSync(path.join(sourceDir, file), 'utf8').replace(/\r\n/g, '\n');
  const checks = [
    ['doctype', html.toLowerCase().startsWith('<!doctype html>')],
    ['html element', /<html\b[\s\S]*<\/html>\s*$/i.test(html)],
    ['head element', /<head\b[\s\S]*<\/head>/i.test(html)],
    ['body element', /<body\b[\s\S]*<\/body>/i.test(html)],
    ['viewport meta', /name="viewport"/i.test(html)],
    ['hidden preheader', /display:none;max-height:0;overflow:hidden;opacity:0/i.test(html)],
    ['presentation table', /role="presentation"/i.test(html)],
    ['600px container', /max-width:600px/i.test(html)],
    ['canonical footer verbatim', html.includes(footer)],
    ['unsubscribe tag', html.includes('<a href="{% unsubscribe_link %}"')],
    ['no javascript', !/<script\b/i.test(html)],
    ['no forms', !/<form\b/i.test(html)],
    ['no local asset paths', !/(?:src|href)="(?:[A-Za-z]:\\|\/mnt\/|file:\/\/)/i.test(html)],
  ];
  for (const [label, pass] of checks) if (!pass) errors.push(`${file}: failed ${label}`);
  if (count(html, '{% if ') !== count(html, '{% endif %}')) errors.push(`${file}: unbalanced if/endif tags`);
  if (count(html, '{% for ') !== count(html, '{% endfor %}')) errors.push(`${file}: unbalanced for/endfor tags`);
  if (/data-klaviyo-replace=/.test(html)) warnings.push(`${file}: event URL/block still requires Klaviyo Preview & test mapping`);
  if (/ASSET_OR_COPY_NEEDED/.test(html)) warnings.push(`${file}: verified asset or customer proof still required`);
}

if (errors.length) throw new Error(`Static QA failed:\n${errors.join('\n')}`);

const renderable = (html) => html
  .replaceAll('{% unsubscribe_link %}', '#unsubscribe')
  .replaceAll('{{ event.responsive_checkout_url }}', 'https://pawtowear.com/')
  .replaceAll('{{ item.product.title }}', 'Custom Pet Embroidered Sweatshirt')
  .replaceAll('{{ item.variant_title }}', 'Crewneck · Light Apricot')
  .replaceAll('{{ item.quantity|floatformat:0 }}', '1')
  .replaceAll('{% currency_format item.line_price %}', '$169.00')
  .replaceAll('{{ item.product.images.0.src|missing_product_image }}', 'https://pawtowear.com/cdn/shop/files/1_502bad0c-aac6-463a-b455-af70df14eecb.png?v=1788416395&amp;width=900')
  .replace(/\{% if item\.product\.variant\.images\.0\.src %\}[\s\S]*?\{% endif %\}/g, 'https://pawtowear.com/cdn/shop/files/1_502bad0c-aac6-463a-b455-af70df14eecb.png?v=1788416395&amp;width=900')
  .replace(/\{% if not forloop\.last %\}[\s\S]*?\{% endif %\}/g, '')
  .replace(/\{%\s*(?:for item in event\.extra\.line_items|endfor|if item\.variant_title|endif)\s*%\}/g, '');

fs.mkdirSync(renderDir, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
});
const viewportResults = [];

try {
  for (const file of files) {
    const source = fs.readFileSync(path.join(sourceDir, file), 'utf8');
    const html = renderable(source);
    for (const viewport of [
      { name: 'desktop', width: 760, height: 900 },
      { name: 'mobile', width: 390, height: 844 },
    ]) {
      const page = await browser.newPage({ viewport: { width: viewport.width, height: viewport.height }, deviceScaleFactor: 1 });
      await page.setContent(html, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(250);
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
        bodyTextLength: document.body.innerText.trim().length,
        buttonCount: document.querySelectorAll('a.button').length,
        brokenImageCount: [...document.images].filter((img) => img.complete && img.naturalWidth === 0).length,
      }));
      if (metrics.scrollWidth > metrics.clientWidth + 1) errors.push(`${file} (${viewport.name}): horizontal overflow ${metrics.scrollWidth}px > ${metrics.clientWidth}px`);
      if (metrics.bodyTextLength < 120) errors.push(`${file} (${viewport.name}): unexpectedly little rendered text`);
      await page.screenshot({ path: path.join(renderDir, `${path.basename(file, '.html')}-${viewport.name}.png`), fullPage: true });
      viewportResults.push({ file, viewport: viewport.name, ...metrics });
      await page.close();
    }
  }
} finally {
  await browser.close();
}

const report = {
  generatedAt: new Date().toISOString(),
  emailCount: files.length,
  renderCount: viewportResults.length,
  staticErrors: errors,
  expectedWarnings: [...new Set(warnings)],
  viewportResults,
};
fs.writeFileSync(path.join(sourceDir, 'qa-report.json'), `${JSON.stringify(report, null, 2)}\n`, 'utf8');

if (errors.length) throw new Error(`Render QA failed:\n${errors.join('\n')}`);
console.log(`QA passed: ${files.length} emails, ${viewportResults.length} desktop/mobile renders.`);
console.log(`Expected pre-launch warnings: ${report.expectedWarnings.length}`);
