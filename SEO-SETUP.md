# Portfolio SEO and analytics setup

## Already included

- Unique page titles and descriptions on core pages.
- Canonical URL and Open Graph setup on the homepage and Now page.
- Person and Website structured data injected site-wide.
- FAQ structured data on case studies where questions are published.
- `sitemap.xml`, `robots.txt`, and a custom `404.html`.
- A Search page that can discover projects, plugins, and articles.

## Add Google Search Console verification

1. Open Google Search Console and add the final custom domain as a **Domain property** where possible.
2. If Google gives an HTML meta-tag token, paste only the token into `site-config.js` under `googleSearchConsoleVerification`.
3. Add the generated verification meta tag to the relevant page `<head>` if you use the HTML-tag method. DNS verification is preferred for a custom domain and does not require source changes.
4. Submit `https://YOUR-DOMAIN/sitemap.xml` in Search Console.

## Add Google Analytics 4

1. Create a GA4 web data stream for the final domain.
2. Copy the Measurement ID in the format `G-XXXXXXXXXX`.
3. Paste it in `site-config.js` under `ga4MeasurementId`.

The included `analytics.js` then tracks WhatsApp clicks, email clicks, project opens, and contact-form submissions. It stays inactive until a real ID is added.

## Where SEO content is managed

- Page title and description: in each page's `<head>`.
- Visible page headings and main copy: in the relevant `.html` page.
- Blog article metadata: in the individual article `.html` files.
- Project scope and delivery details: project case-study pages and `portfolio-upgrades.js`.
- Sitemap: `sitemap.xml`.

Do not add long lists of keywords to visible pages. Use clear page titles, useful headings, real project evidence, internal links, and original content instead.
