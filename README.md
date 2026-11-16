# MCD ELLIX
MCD ELLIX Massage and Spa — marketing site built with React + Vite.

## Develop

Requires Node 20+ (`nvm use` picks it up from `.nvmrc`).

```bash
npm install
npm run dev
```

## Edit content

Most copy (services, benefits, reviews, hours, contact details, booking link) lives in
[`src/data.js`](src/data.js). Each page section is a component in [`src/components/`](src/components).
To swap a placeholder arch graphic for a real photo, pass `src` to `<Frame>`, e.g.
`<Frame variant="f1" src={photo} alt="…" />` with the image imported from `src/assets/`.

## Deploy (free, GitHub Pages)

Every push to `master` builds and deploys via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup: on GitHub go to **Settings → Pages → Build and deployment → Source** and choose
**GitHub Actions**. The site will be served at `https://<username>.github.io/mcd-ellix/`.
