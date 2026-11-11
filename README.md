# WHITESTONE — landing page concept

Next.js (App Router), TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev
```

## Before going live

- `lib/site.ts` — replace the bracketed placeholders (WhatsApp number, email, location, hours).
- `components/Founder.tsx` — replace the `[FOUNDER NOTE …]` placeholder with Rebecca's own words.
- `NEXT_PUBLIC_FORM_ENDPOINT` — set to a URL that accepts a JSON `POST`. **Until it is set, the enquiry form shows its confirmation state without sending anything.**
- `NEXT_PUBLIC_SITE_URL` — the production URL, used for Open Graph metadata.
- The four service categories and all body copy are drafts to confirm.

## Structure

- `app/` — layout (fonts, metadata, `lang`/`dir`), page, global styles and design tokens.
- `components/` — one component per section; `Header`, `Services` and `Contact` are client components.
- `public/images/` — photography and logo artwork.
