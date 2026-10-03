# HSJ Astro template

Astro conversion of the Home Services Jackpot WordPress theme (Offline Sharks). Content comes from
`src/data/site.json`, `pages.json` and `posts.json` (generated from a WordPress export). Theme CSS and images are in `public/`.

- `npm i && npm run dev`
- GitHub Pages preview: `BASE_PATH=/<repo>/ npm run build`
- Cloudflare Pages: `npm run build`, output `dist`, no BASE_PATH.
- Contact form is static. Set `formAction` in `site.json` to a form service URL.
- Placeholders to replace per client: phone, email, address, logo (`public/images/logo.png`), photos.

Theme is commercial software; check the Offline Sharks terms before redistributing publicly.
