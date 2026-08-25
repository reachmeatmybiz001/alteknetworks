# AltekNetworks IT Services Website

A lightweight, responsive, static website for **AltekNetworks IT Services — Your Complete IT Infrastructure Partner**.

## What was changed
- Uses the supplied AltekNetworks logo + tagline in the header.
- Header logo is cropped for clean, larger display without the original image's excess white space.
- Services dropdown is **text-only** — the small thumbnail images have been removed.
- Home page uses professional service icons instead of service thumbnails in the All Services section.
- Services page uses clean professional icons and text cards rather than large service images.
- Responsive mobile navigation and service dropdown.
- Contact page includes the requested service-interest dropdown.
- Footer uses a dark navy banner with a high-contrast white logo treatment.
- No build step and no external framework required.

## Deploy to GitHub Pages
1. Create a GitHub repository, for example `alteknetworks`.
2. Upload all files and folders in this directory.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then Save.
6. GitHub Pages will publish `index.html`.

The repository is intentionally static so it can also be deployed directly to Netlify, Cloudflare Pages, AWS S3/CloudFront, or any normal web server.

## Contact form note
The form currently uses `mailto:support@alteknetworks.com`, which opens the visitor's mail client. For server-side delivery, replace the form action with your preferred mail/API endpoint.
