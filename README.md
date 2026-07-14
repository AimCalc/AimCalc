# aimcalc.com

Marketing and support site for **AimCalc**, a ballistic calculator for
iPhone and Apple Watch.

© 2026 AimCalc. All rights reserved.

This repository is public so it can be served as a static website. The
source is visible for that purpose only, no license is granted to copy,
modify, or republish its contents, design, artwork, or text.

## Layout

- `index.html`, landing page
- `glossary.html`, how-to, glossary, diagrams, and field tips (mirrors the in-app content)
- `support.html`, App Store support URL target
- `privacy.html`, App Store privacy policy URL target
- `terms.html`, Terms of Use (mirrors the in-app first-launch agreement)
- `styles.css`, `favicon.svg`, shared assets
- `img/`, app screenshots used on the landing page
- `CNAME`, custom domain for GitHub Pages (delete if hosting elsewhere)

## Deploying

**GitHub Pages:** Settings → Pages → deploy from branch, root folder. Point
aimcalc.com's DNS at GitHub Pages (A records 185.199.108–111.153, plus a
`www` CNAME to `<username>.github.io`).

**Cloudflare Pages / Netlify:** connect the repo (may be private on these
hosts) or upload the folder directly; attach the aimcalc.com domain in
their dashboard. Delete `CNAME` first.
