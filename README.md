# AltekNetworks IT Services

**Your Complete IT Infrastructure Partner**

A responsive, static website for AltekNetworks IT Services, prepared for direct deployment to GitHub Pages.

## Included pages

- `index.html` — Home page with the supplied server-room hero image and icon-based services section.
- `services.html` — All 9 services with the supplied service images in a consistent, responsive card layout.
- `about.html` — About and company commitment content.
- `contact.html` — Contact form with the requested service-interest dropdown.
- `assets/logo.png` — Supplied AltekNetworks logo including the tagline.
- `assets/home-hero.png` — Supplied home-page hero image.
- `assets/services/` — Supplied service images.
- `.nojekyll` — GitHub Pages compatibility.
- `.gitignore` — Standard static-site exclusions.

## Services

1. Structural Cabling
2. Networking Solutions
3. Data Center Solutions
4. Security Solutions
5. Enterprise Computing
6. End User Computing
7. CCTV & Surveillance
8. Cloud Infrastructure
9. Annual Maintenance Contracts (AMC)

## Design changes

### Home page
- Uses the supplied server-room image as the main hero visual.
- Uses professional line icons in the **All Services** section instead of service thumbnails.
- Services menu contains text links only; no small images.
- Header uses the supplied AltekNetworks logo with the tagline.

### Services page
- All nine supplied images are used.
- Every service card has the same 16:9 image area.
- Images use `object-fit: cover` and are contained inside the same visual frame.
- Cards are equal-height and aligned in a 3-column desktop grid.
- 2-column tablet and 1-column mobile layouts are included.
- Service icons and text remain below the image, so nothing overlaps.

### Contact page
- Two-column desktop form.
- Full Name, Work Email, Organisation, Service Interest and Requirement fields.
- Service dropdown contains all nine services.
- Links from service cards can pre-select the relevant service.
- The static form opens the visitor's default email client addressed to `support@alteknetworks.com`.

## Content basis

The service terminology and positioning follow the material supplied with the project and the referenced AltekNetworks public website: https://alteknetworks.com/

No external framework or build process is required.

## Deploy to GitHub Pages

### Option 1 — GitHub web interface

1. Create a new GitHub repository.
2. Upload the contents of this folder.
3. Make sure `index.html` is in the repository root.
4. Go to **Settings → Pages**.
5. Select **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save and wait for GitHub Pages to publish.

### Option 2 — Git command line

```bash
git init
git branch -M main
git add .
git commit -m "Deploy AltekNetworks website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

The supplied project is intentionally a static website, so there is no `npm install`, build command, or server-side dependency.
