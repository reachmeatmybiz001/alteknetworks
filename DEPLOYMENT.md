# Deployment

## GitHub

From the repository root:

```bash
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

For GitHub Pages, enable **Settings → Pages → Deploy from branch → main / root**.

## Portal

The **Portal Login** button redirects to `https://portal.alteknetworks.com`.

The website itself is static. Customer registration, credential management and ticketing must run on the portal backend. See `docs/PORTAL-INTEGRATION.md`.

## Custom domain

If the website will use `alteknetworks.com` on GitHub Pages, configure the custom domain in GitHub Pages and add the required DNS records at your DNS provider.
