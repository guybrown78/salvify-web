# TODO: root layout structure & 404 handling

Deferred cleanup identified while fixing SEO metadata quick wins (Sep 2026). None of
this is broken enough to block launch, but it should be done deliberately before the
version 2 multi-page site goes live.

---

## 1. Nested `<html>` / `<body>` — invalid markup

### Current state

Three layouts each render their own `<html>` and `<body>`:

- `src/app/layout.tsx` — the required App Router root layout
- `src/app/(site)/layout.jsx` — site chrome (Header/Footer/fonts/analytics)
- `src/app/(studio)/layout.tsx` — Sanity Studio shell
- `src/app/(studio)/admin/layout.tsx` — a **third** nested `<html>`/`<body>` on the
  `/admin` route specifically

Because `app/layout.tsx` already provides `<html>`/`<body>`, the route-group layouts
nest a second (and on `/admin`, third) `<html>` inside the first. The page still
renders, but the output is invalid HTML and React logs hydration warnings. The
outer root element is the one that "wins" for document-level attributes, so the
`lang`, font `className`s and `bg-white antialiased` classes set on the `(site)`
`<html>` are not actually applied to the real `<html>` element.

### Target

Use the Next.js **"multiple root layouts"** pattern:

1. **Delete `src/app/layout.tsx`.** With no file at `app/layout.tsx`, each top-level
   route group becomes its own root layout.
2. `src/app/(site)/layout.jsx` keeps its `<html>`/`<body>` and becomes the root
   layout for the marketing site. Move the shared/default `metadata` (currently in
   the deleted root: `metadataBase`, `title.default` + `title.template`, `robots`)
   into it, merged with what it already exports. Keep `title` as `{ absolute: ... }`
   only if we still want the homepage title to skip the `%s | Salvify` template —
   otherwise switch the homepage `page.tsx` to set its own title and let the
   template apply.
3. `src/app/(studio)/layout.tsx` keeps its `<html>`/`<body>` and becomes the root
   layout for the studio. Keep `robots: { index: false, follow: false }`.
4. **Delete `src/app/(studio)/admin/layout.tsx`** (the nested third `<html>`) and
   fold anything it needs into `(studio)/layout.tsx`.

### Gotchas

- Every route must live inside exactly one root-layout group. Confirm `src/app/api/*`
  is fine (route handlers don't use layouts) and that nothing sits directly under
  `src/app/` without a group.
- `favicon.ico` / `favicon.png` currently sit at `src/app/` root. With no root
  layout they may need to move into each group, or into `public/`.
- Re-check `metadataBase` resolves on both groups after the move.
- Verify with a build: view source on `/`, `/product/platform`, `/admin` and
  confirm exactly one `<html>` / `<body>` each, with the expected `lang` + classes.

### Reference

Next.js docs — "Creating multiple root layouts" (App Router / project organisation).

---

## 2. Branded 404 page

### Current state

`src/app/(site)/not-found.jsx` exists and is styled (SlimLayout, logo, "Go back
home"). It only handles `notFound()` calls and unmatched routes **inside the
`(site)` group**.

Anything that misses the App Router entirely falls back to Next's built-in Pages
Router 404, which renders the bare text `404: This page could not be found` with no
branding. Confirmed in the build output as `○ /404 (pages)`.

### Target

Add `src/app/not-found.tsx` (root-level) so all unmatched routes get a branded
page. If task 1 is done first and `app/layout.tsx` is removed, put the root
`not-found` inside the `(site)` group instead, or wherever the catch-all ends up —
the current `(site)/not-found.jsx` can likely just be promoted/renamed.

Keep it a Server Component. Reuse the existing markup from
`src/app/(site)/not-found.jsx`.

### Verify

After building, hit a nonsense URL (e.g. `/this-does-not-exist`) and confirm the
branded page renders, not the plain-text fallback.
