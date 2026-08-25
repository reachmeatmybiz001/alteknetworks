# AltekNetworks IT Services — GitHub Pages Ready

A responsive static website for **AltekNetworks IT Services — Your Complete IT Infrastructure Partner**.

## Navigation

- **Home:** Corporate hero, positioning, and contact CTA. The Home page does **not** display a services listing.
- **Services:** The header Services button opens a two-column menu containing all nine services.
- **Individual service pages:** Every service in the Services menu opens a dedicated HTML page with service explanation, image, key capabilities, and a contact CTA.
- **About:** Company overview.
- **Contact:** Enquiry form with service selection.

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

## GitHub Pages deployment

1. Create or open the GitHub repository.
2. Upload/push the contents of this folder, including `.nojekyll`.
3. Keep the repository branch on `main`.
4. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`.
5. Save and open the generated GitHub Pages URL.

The repository already contains a Git history and can be pushed directly with Git.

## Latest header and service-menu update

- Header logo is sized to keep the full **AltekNetworks IT Services** name and tagline visible.
- The Services dropdown is anchored to the right side of the header so it does not cover the service page content.
- Services are displayed in two columns with all nine services as direct links to their separate pages.
- Service-page images use a 16:9 presentation matching the supplied 1200×675 assets, avoiding unwanted cropping.
- **Portal Login** is available in the header and opens `https://portal.alteknetworks.com` in a new tab.

## Customer Portal — Coming Soon

The `portal/` directory contains the temporary customer portal landing page. The main website's **Portal Login** button already opens `https://portal.alteknetworks.com` in a new tab.

To publish the portal on `portal.alteknetworks.com` using GitHub Pages, deploy the contents of `portal/` as a separate GitHub Pages repository/site and keep the included `portal/CNAME` file. Configure the DNS for `portal.alteknetworks.com` according to GitHub Pages' custom-domain instructions.

The portal page currently displays a branded **Coming Soon...** message. Customer registration, authentication and ticketing will be added in the next phase with a secure backend/database.
