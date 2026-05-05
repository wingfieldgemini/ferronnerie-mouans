# Ferronnerie Mouansoise — Project Brief

## What This Is

A professional marketing website for **Ferronnerie Mouansoise Hachani**, an artisan ironworking (*ferronnerie d'art*) workshop run by Khemaies Hachani in Mouans-Sartoux, Côte d'Azur, France. The site is entirely in French. Its purpose is to generate quote requests and phone calls from homeowners and architects in the Cannes / Grasse / Antibes basin.

Live URL: `https://ferronnerie-mouansoise.fr`  
Vercel project: `ferronnerie-mouansoise` (org: `wingfieldgemini`)

---

## Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Framework | Next.js App Router | 15.5.15 |
| React | React | 19 |
| Language | TypeScript — strict mode | 5 |
| CSS | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme` block) | 4 |
| Icons | `lucide-react` | latest |
| Fonts | Cormorant Garamond (display) + DM Sans (body) via `next/font/google` | — |
| Deployment | Vercel | — |
| Package manager | npm | — |

No animation library, no state management library, no backend, no database.

---

## File Structure

```
app/
  layout.tsx              — Root layout: fonts, metadata, Header/Footer/JsonLd
  globals.css             — Tailwind import, @theme tokens, base resets, utility classes
  page.tsx                — Home page
  atelier/page.tsx        — About the workshop
  services/page.tsx       — All six services (accordion list)
  services/[slug]/page.tsx — Individual service detail page (SSG via generateStaticParams)
  realisations/page.tsx   — Gallery with category filtering
  contact/page.tsx        — Contact form + map
  mentions-legales/page.tsx — Legal page (required for French businesses)
  sitemap.ts              — Auto-generated sitemap (includes service detail pages)
  robots.ts               — robots.txt

components/
  Header.tsx          — Sticky nav, mobile menu, phone link, "Devis" CTA
  Footer.tsx          — Dark footer, address/hours/nav/mentions légales
  Hero.tsx            — Home hero: headline + hero image + stat strip
  Section.tsx         — Generic section wrapper (tone prop: "light"|"cream"|"dark")
  ServiceCard.tsx     — Service card (not currently used on any page)
  ServicesList.tsx    — Accordion list with CSS-only hover expand + optional links
  CtaButton.tsx       — Link/button with four variants (primary/ghost/outline/text)
  GalleryGrid.tsx     — "use client" — category filter tabs + masonry grid + lightbox
  ContactForm.tsx     — "use client" — mailto: form with status states
  Reveal.tsx          — "use client" — IntersectionObserver scroll-reveal
  JsonLd.tsx          — Schema.org LocalBusiness + Service structured data

lib/
  siteConfig.ts       — Single source of truth for ALL business data

public/assets/
  logo.png            — Circular logo
  og-image.jpeg       — OG share image (1200×630)
  gallery/            — 26 images: 3 named heroes + work-01..23 (jpg/png mix)

_source_assets/       — Raw photos, gitignored, kept locally only
```

---

## The Golden Rule: `lib/siteConfig.ts`

**All business data lives here.** Components never hardcode content. To update the site — business name, phone, address, hours, services, gallery items, testimonials, nav links, service area — edit only `siteConfig.ts`. The rest of the site derives from it automatically.

Key sections in `siteConfig`:
- `name`, `legalName`, `tagline`, `shortDescription`, `longDescription`, `owner`
- `contact` — phone, email, address, geo coordinates
- `hours` — Mon–Fri 08:00–17:00, Sat–Sun closed
- `serviceArea` — 8 Côte d'Azur communes
- `url`, `social`
- `theme.colors` — palette reference (mirrors CSS variables — CSS is the canonical source)
- `services[]` — 6 services, each with `slug`, `category`, `title`, `longDescription`, `summary`, `bullets[]`
- `values[]` — 4 brand commitments used on the Atelier page
- `testimonials[]` — 3 client testimonials used on the Home page
- `gallery[]` — 26 items with `src`, `alt`, `category` — categories match service categories exactly
- `nav[]` — 5 nav links (includes Contact)

The type is exported as `SiteConfig = typeof siteConfig` so components derive prop types from it:
```ts
type Service = (typeof siteConfig)["services"][number];
```

---

## CSS & Design System

### Tailwind v4 `@theme` tokens (in `globals.css`)

Colors:
```
--color-iron          #c9a84c   (warm gold — primary accent)
--color-iron-deep     #a8892a   (hover state for iron)
--color-ember         #dfc06a   (lighter gold, eyebrow labels in dark sections)
--color-parchment     #f5f0e9   (main light background)
--color-cream         #ede7dd   (secondary section background, testimonials)
--color-ink           #0b0a08   (near-black — body, dark section background)
--color-smoke         #5a5047   (body text, secondary)
--color-mist          #8a7f74   (tertiary text, footer)
--color-hairline      #d8cfc0   (borders on light backgrounds)
--color-hairline-dark #1e1c18   (borders on dark backgrounds)
```

Typography:
```
--font-display   Cormorant Garamond (headings, large numbers, italic accents)
--font-sans      DM Sans (body)
--text-display   clamp(4rem, 1rem + 8vw, 9rem)
--text-h1        clamp(2.75rem, 1rem + 5vw, 6.5rem)
--text-h2        clamp(2.125rem, 0.875rem + 3.5vw, 4.5rem)
--text-h3        clamp(1.5rem, 0.875rem + 1.75vw, 2.5rem)
```

Spacing:
```
--space-section  clamp(6rem, 4rem + 8vw, 14rem)
--space-xl       clamp(4rem, 2rem + 5vw, 8rem)
--space-lg       clamp(2.5rem, 1.25rem + 3.5vw, 5rem)
```

Motion:
```
--ease-out-expo   cubic-bezier(0.16, 1, 0.3, 1)
--ease-out-quart  cubic-bezier(0.25, 1, 0.5, 1)
```

### Custom utility classes

- `.container-page` — max-width 1340px, responsive horizontal padding
- `.eyebrow` — small-caps gold label (legacy; prefer `.label` for new)
- `.label` — 0.6875rem / 600 weight / 0.2em tracking / uppercase
- `.reveal` — scroll fade-up via IntersectionObserver + CSS transition
- `.reveal-x` — scroll fade-right variant
- `.text-balance`, `.text-pretty` — wrapping utilities

### Visual direction

**Warm dark luxury with artisanal editorial quality.** Large display type contrasting with fine body text. Warm gold accent on near-black ink with parchment/cream light sections. No gradients, no blobs, no border-radius on CTAs. Designed to feel like a high-end Provençal craft business.

Italic spans in headings rendered in Cormorant Garamond for emotional emphasis:
```tsx
<em className="font-[300] not-italic text-[color:var(--color-ember)]">forgé.</em>
```

---

## Component Patterns

### `<Section>` wrapper

Primary layout primitive for section headers.

```tsx
<Section
  eyebrow="Savoir-faire"
  title="Six métiers, un seul atelier."
  kicker="Supporting paragraph..."
  tone="parchment"   // "light" | "cream" | "dark"
  id="optional-anchor"
>
  {/* content */}
</Section>
```

The header block uses a 12-col grid: title in col-span-7, kicker in col-span-5.

### `<CtaButton>` variants

- `primary` — iron gold background, ink text
- `ghost` — transparent, text changes on dark/light
- `outline` — ring-1, inverts on hover
- `text` — minimal, no padding

`withArrow` (default `true`) adds an animated `ArrowUpRight` icon.

### `<ServicesList>` props

- `tone="dark"|"light"` — controls border and text colors
- `withLinks` — adds "Découvrir ce service →" link inside expanded accordion pointing to `/services/[slug]`

### `<GalleryGrid>` props

- `items` — array from `siteConfig.gallery`
- `showFilters` (default `true`) — shows category filter tabs when there are 3+ categories

### Client components

Only three components are `"use client"`:
- `Header` — scroll state for sticky background
- `ContactForm` — form state, mailto: redirect
- `GalleryGrid` — filter state + lightbox state

---

## Pages

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Hero → manifesto + stats → 6 services accordion → gallery preview → testimonials (3) → CTA |
| `/atelier` | `app/atelier/page.tsx` | Workshop story → 4 brand values grid → CTA |
| `/services` | `app/services/page.tsx` | All 6 service accordion with links → 4-step process → CTA |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | Service hero → long description + bullets → filtered gallery → process → related services → CTA |
| `/realisations` | `app/realisations/page.tsx` | Full gallery with category filters (GalleryGrid) → CTA |
| `/contact` | `app/contact/page.tsx` | ContactForm + aside with contact details/hours → Google Maps embed |
| `/mentions-legales` | `app/mentions-legales/page.tsx` | Full French legal page: éditeur, hébergement, RGPD, cookies, responsabilité |

---

## Gallery Categories

Gallery images are now categorized to enable filtering. Categories map 1:1 to service categories:

| Category | Service slug | Images |
|---|---|---|
| Portails | portails | gate-ornate-traditional.png + work-01 to work-04 (5 images) |
| Garde-corps | garde-corps | railing-terrace-view.png + work-05 to work-09 (6 images) |
| Escaliers | escaliers | staircase-exterior-modern.png + work-10 to work-13 (5 images) |
| Clôtures | clotures | work-14 to work-17 (4 images) |
| Verrières | verandas | work-18 to work-21 (4 images) |
| Structures | structures | work-22, work-23 (2 images) |

**Important**: `siteConfig.gallery[i].category` must exactly match `siteConfig.services[j].category` for the service detail page gallery filtering to work.

---

## Contact Form

The form uses a mailto: pattern — no API route, no server action. On submit it builds a `mailto:` URI and sets `window.location.href`. Users need a local mail client. This was an intentional low-infrastructure choice.

**Fields:** name, email, phone (optional), project type (optional), message (required)

---

## SEO & Structured Data

- `metadata` in `app/layout.tsx` covers title template, description, OG, Twitter, canonical
- Per-page `export const metadata` overrides the title
- `JsonLd.tsx` emits `Schema.org/LocalBusiness` with geo, opening hours, `hasOfferCatalog` (all 6 services with `url` pointing to individual service pages)
- `app/sitemap.ts` generates static routes + all 6 `/services/[slug]` routes with priorities
- `app/robots.ts` generates robots.txt
- Locale is `fr_FR`
- `/mentions-legales` has `robots: { index: false }` — legal pages don't need indexing

---

## Path Aliases

`@/` maps to the project root. Use it for all internal imports:
```ts
import { siteConfig } from "@/lib/siteConfig";
import { Section } from "@/components/Section";
```

---

## Running the Project

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (17 static pages)
npm run start    # serve production build
npm run lint     # ESLint via next lint
```

No test framework is installed. No environment variables are required.

---

## Deployment

Deployed on Vercel via `vercel deploy`. The project is linked via `.vercel/project.json`. Push to `main` triggers automatic deployment.

The custom domain `ferronnerie-mouansoise.fr` is configured in the Vercel dashboard.

---

## What Remains To Do

### High priority
- **Real testimonials**: The 3 current testimonials are placeholders. Replace with verified client quotes from Google reviews or direct feedback.
- **Gallery alt texts**: The `work-NN.jpg` alt texts describe assumed content — verify against actual photos.
- **SIRET number**: Add to Mentions légales once verified.

### Medium priority
- **Contact form backend**: The mailto: approach requires a local mail client. Consider a serverless handler (Resend, Formspree) for better UX.
- **Cookie banner**: A minimal RGPD-compliant banner (already compliant — no tracking cookies, so minimal implementation needed).
- **Individual service photos**: Each `/services/[slug]` page shows gallery photos. Adding a dedicated hero photo per service would improve visual quality.

### Nice to have
- **Analytics**: No analytics installed. Plausible or Umami (privacy-first) would be appropriate.
- **Blog/Actualités**: Content marketing for local SEO.
- **Before/after slider**: Would be very compelling for portfolio pages.
- **Google reviews integration**: Pull live reviews via Google Places API instead of hardcoded testimonials.

---

## Rules for All Future Sessions

1. **Never hardcode colors, spacing, or typography** — always use CSS tokens via `var(--color-*)`, `var(--space-*)`, `var(--text-*)`.
2. **All content changes go through `lib/siteConfig.ts`** — never edit component JSX for business data.
3. **Gallery category = service category** — if you add a service or gallery category, keep them in sync.
4. **Dark/light alternation** — sections alternate: dark (ink) → light (parchment/cream) → dark. Never two consecutive same-tone sections.
5. **Reveal everything** — all new content sections should use `<Reveal>` with staggered delays.
6. **Cormorant Garamond for display only** — headings, large numbers, italic accents. Never body text.
7. **No border-radius on buttons or CTAs** — the design is sharp-edged by intent.
8. **`as const` in siteConfig** — keep this assertion to maintain deep readonly typing.
9. **Service page gallery** — always filter `siteConfig.gallery` by `service.category`, not by index.
10. **French language throughout** — zero English in UI copy, zero Lorem Ipsum.
11. **No test suite** — verify correctness via `npm run build` (type check) and visual inspection.
12. **`withLinks` on ServicesList** — use `withLinks` on the `/services` page, not on the home page preview.
