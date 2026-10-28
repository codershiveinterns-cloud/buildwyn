# buildwyn.com

Website for **Buildwyn LLC** (Wyoming, USA).

Built with Next.js (App Router). Every page is prerendered to static HTML at build time; moving between pages happens in the browser without a full reload, and linked pages are prefetched. Deployed on Vercel from this repository.

Pages: Home, Services, How we work, Products, About, FAQ, Contact, Privacy Policy, Terms of Service, 404.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` followed by `npm start` runs the production build locally.

## Layout

- `app/` one folder per page (`page.jsx`), plus `layout.jsx` (shared head, header, footer), `not-found.jsx` and `globals.css`
- `components/` header, footer, logo, contact form and the scroll-reveal effect
- `lib/metadata.js` title, description, canonical and social tags for each page
- `public/` images, favicon, `robots.txt`, `sitemap.xml`
