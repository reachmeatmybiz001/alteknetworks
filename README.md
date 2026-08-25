# AltekNetworks IT Services — Complete Deployable Website

**Your Complete IT Infrastructure Partner**

This repository contains the final static corporate website with: 

- Professional AltekNetworks header/logo and tagline
- Home page with the requested server-room hero image
- No service cards on the Home page
- Services dropdown in a clean two-column layout with no thumbnails
- Services landing page with all 9 service images, correctly fitted
- Separate detail page for each service
- Contact page with service-interest dropdown
- Portal Login links pointing to `https://portal.alteknetworks.com`
- Responsive desktop/tablet/mobile layout
- GitHub Pages compatible (`.nojekyll`)

## Nine services

1. Structural Cabling
2. Networking Solutions
3. Data Center Solutions
4. Security Solutions
5. Enterprise Computing
6. End User Computing
7. CCTV & Surveillance
8. Cloud Infrastructure
9. Annual Maintenance Contracts (AMC)

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Deploy AltekNetworks website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Then enable **Settings → Pages → Deploy from branch → main / root**.

## Customer portal

The public site intentionally does not implement authentication. The Portal Login button redirects customers to the separate portal at `https://portal.alteknetworks.com`. See `docs/PORTAL-INTEGRATION.md` for the recommended AWS architecture and the customer/admin workflow.

### Before production

- Replace `portalUrl` in `site-config.js` only if the portal hostname changes.
- Configure the portal backend, customer registration and ticketing workflow on AWS.
- Replace the static `mailto:` contact form with your preferred serverless form endpoint if you need database-backed enquiry capture.
