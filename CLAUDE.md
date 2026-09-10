# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The Salvify marketing website (salvify.co.uk) — Salvify is medicine / medical inventory management software for healthcare providers, with a particular focus on **pre-hospital care (EMS / ambulance services)** and **controlled drug (CD) management**. Next.js 13 App Router + React 18 + TypeScript (non-strict) + Tailwind CSS 3, with an embedded Sanity Studio for content and Airtable as the form backend.

## Purpose & positioning

This is the primary commercial site. Every page should serve these goals, in priority order:
1. **Rank highly in organic search** for medicine-management terms — "medicine management", "medicine management for pre-hospital care", "EMS medicine management", "ambulance medicine management", "controlled drug register", "controlled drug management", "controlled drugs pre-hospital care", and related long-tail. Metadata (`title`, `description`, `keywords`, `openGraph`, `alternates.canonical`), heading hierarchy, structured content, and internal linking all matter; don't regress them.
2. **Educate** visitors on the problems of medicine management in pre-hospital healthcare, and on what the Salvify platform does about them. The site should stand on its own as a credible resource someone would bookmark and return to.
3. **Convert** — push interested readers toward more information, and push buyers (CEOs, senior leadership, operations/clinical governance leads) toward requesting a demo (`/contact/book-a-demo`, `BookDemoButton`).

Tone/craft bar: highly polished, razor-focused, premium-branded, authoritative. Prefer precise clinical/operational language over generic SaaS copy. When editing content, keep it tight and specific to pre-hospital medicine management rather than broadening to generic "inventory".

## Commands

```bash
npm run dev      # dev server on http://localhost:3000 (Studio at /admin)
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint (eslint-config-next / core-web-vitals)
```

There is no test suite. Prettier is configured (`singleQuote`, no semicolons, `prettier-plugin-tailwindcss` sorts class names) but not wired to a script — run your editor's Prettier or `npx prettier`.

## Environment

`.env.local` holds (values are gitignored):
- `AIRTABLE_PERSONAL_ACCESS_TOKEN`, `AIRTABLE_BASE` — form submissions. Without them the form API routes throw; comment out the `base(...).create(...)` call to fake it.
- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION` — Sanity client (used both server-side and in the browser Studio).
- `SANITY_SECRET_TOKEN` — shared secret checked by `/api/revalidate`.
- `NEXT_PUBLIC_SIGN_IN_URL` — external app login link.

## Architecture

### Route groups (`src/app`)
- `(site)/` — the public marketing site. Its `layout.jsx` sets global SEO metadata, loads `next/font` (Poppins + Nunito), and wraps pages in `Header` / `Footer` / `CookieBanner` / `GoogleAnalytics`.
- `(studio)/admin/[[...index]]/` — the Sanity Studio, mounted client-side via `NextStudio` using the root `sanity.config.ts`. Has its own minimal `layout.tsx` (no site chrome).
- `api/` — `contact-request` and `demo-request` POST validated payloads (Zod schemas in `src/lib/validation/`) to Airtable tables; `revalidate` is the Sanity webhook that calls `revalidatePath` for a given `_type`.

Pages are React Server Components that `await` GROQ queries directly. Most set `export const revalidate = 60` (ISR); content edits also propagate on-demand through the revalidate webhook.

### Content / Sanity
- All read queries live in `src/sanity/sanity-utils.ts` as `groq` template strings + `getX()` helpers using `createClient(clientConfig)` (`src/sanity/config/client-config.ts`, `useCdn: false`).
- Schemas: `src/sanity/schemas/*-schema.ts`, aggregated in `src/sanity/schemas/index.ts`. Add a new schema in both places.
- TypeScript shapes for query results are hand-maintained in `src/types/`; keep them in sync with the GROQ projections.
- Key document types: `feature`, `useCase`, `industry-solution` (each drives a dynamic detail page), plus `insightArticle`, `category`, `tag`, `author`, `benefit`, `testimonial`, `faq`, `policyPage`, `page`, `project`.

### Template + component-key pattern (features / use cases / industry solutions)
Detail pages pick a layout from the document's `template` field via a lookup object, e.g. in `product/features/[feature]/page.tsx`:
`const templates = { standard: TemplateA, accent: TemplateB, premium: TemplateA }`.
Within a template, section content can select a specific visual component by string key (`heroComponentKey`, `problemComponentKey`, …) resolved against a registry map (e.g. `featureHeroMap` in `src/components/features/heroVisuals`). To add a variant, add the component to the registry — do not branch in the template.

### Icons
Sanity stores icon names as strings. `src/utils/iconMap.ts` maps those strings to `react-icons` components: per-domain maps (`benefitIconMap`, `featureIconMap`, `useCaseIconMap`, `industryIconMap`) each `satisfies Record<...IconKey, IconType>` against key unions in `src/sanity/shared/*-icons.ts`. `NavItemIconMap` is composed from several maps via `mergeIconMaps` (`src/utils/MergeIconMaps.ts`). When you add an icon option: add the key to the `*-icons.ts` union AND the component to the map, or the `satisfies` check fails the build.

### Styling / design system
- Palette is defined once as CSS custom properties in `src/styles/tailwind.css` (`--color-brand-500`, `--color-ink`, semantic roles `--color-bg/-fg/-card/-cta/-border/...`, plus a `.dark` / `[data-theme="dark"]` override block).
- `tailwind.config.ts` exposes those vars as Tailwind color utilities through a `withAlpha` helper that emits `oklch(from var(--x) ...)`, so `bg-cta/80` etc. work. Prefer these semantic classes over raw hex or `slate-*`.
- Fonts: `font-sans` → Poppins (`--font-poppins`, body default), `font-brand` → Nunito (`--font-nunito`, headings; `@layer base` forces `h1–h4` to `font-brand font-extrabold`).
- `Button` (`src/components/Button.tsx`) takes `variant` (`solid` | `outline`) + `color` (e.g. `ink`, `brand`, `white`); renders `<Link>` when `href` is passed, else `<button>`. It's untyped (`props: any`).

### Conventions to be aware of
- Files are a mix of `.tsx` and `.jsx`; `tsconfig` has `strict: false` and `allowJs`. New code should be `.tsx`.
- Import alias `@/*` → `src/*`.
- Components prefixed `OP` (e.g. `OPHomepageHero`, `OPDesktopNav`) are the current redesign versions. The homepage (`(site)/page.tsx`) and `nav.ts` keep the older versions commented out alongside — leave both unless asked to clean up.
- **Current state:** the live site is effectively a one-pager (homepage + anchor-link nav; `nav.ts` `buildSections()` returns only homepage anchors, full nav commented out). The other `(site)/` routes are a "version 2" multi-page plan that exists on `main` but is WIP — not linked from nav, needs copy editing plus illustration/design work before launch. Treat those pages as drafts to polish, not live pages.
- `next.config.js`: images are `unoptimized`; remote images allowed only from `cdn.sanity.io`.
