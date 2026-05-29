# Saurabh Jingade — Portfolio

Production-ready Next.js 15 portfolio. Dark mode, terminal-aesthetic design, MDX-ready writing section, GitHub API integration, SEO + sitemap + structured data baked in.

---

## Stack

- **Next.js 15** with App Router and server components
- **TypeScript** (strict mode)
- **Tailwind CSS v4** using the `@theme` directive — design tokens live in `app/globals.css`
- **Framer Motion** available for advanced animation (not wired by default — current animations are CSS-only)
- **MDX** ready for the writing section via `@next/mdx`
- **next/font** for Inter (sans) + JetBrains Mono (mono) — no external CDN
- **next/image** for portrait optimization

Total dependencies are intentionally minimal. No shadcn CLI, no Radix, no UI library — just clean primitives. Add them when you have a reason to.

---

## Quick start

```bash
# 1. Install
npm install

# 2. Copy env vars (GitHub token is optional — public endpoints work without it)
cp .env.example .env.local

# 3. Run dev
npm run dev

# 4. Open http://localhost:3000
```

That's it. There's no database, no auth, no build step beyond Next's own.

---

## Project structure

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout — fonts, metadata, structured data
│   ├── page.tsx                  # Home page (Hero, Companies, Work, Research, About, Writing)
│   ├── globals.css               # Design tokens (Tailwind v4 @theme) + utilities
│   ├── about/page.tsx            # Full About + Experience timeline + Education
│   ├── work/page.tsx             # All-projects list
│   ├── work/[slug]/page.tsx      # Project detail (stub — fill with case study)
│   ├── writing/page.tsx          # Writing index (Medium link until MDX posts exist)
│   ├── api/github/route.ts       # GitHub API integration (cached 1h)
│   ├── sitemap.ts                # /sitemap.xml
│   └── robots.ts                 # /robots.txt
│
├── components/                   # All UI components
│   ├── background.tsx            # Ambient mesh + grid + topology SVG
│   ├── nav.tsx                   # Sticky top nav
│   ├── hero.tsx                  # Name, tagline, terminal, CTAs
│   ├── terminal.tsx              # Animated terminal block
│   ├── companies-strip.tsx       # 4-cell company strip
│   ├── section-header.tsx        # Reusable section header
│   ├── work-card.tsx             # Project case-study card
│   ├── research-card.tsx         # Published paper card
│   ├── about.tsx                 # Portrait + bio + capabilities table
│   ├── writing-section.tsx       # Home page writing teaser
│   └── footer.tsx                # Contact rows + copyright
│
├── data/                         # Single source of truth for content
│   ├── site.ts                   # Site metadata, contact links
│   ├── projects.ts               # Featured projects + full project list
│   ├── experience.ts             # Career timeline entries
│   └── capabilities.ts           # Capabilities, certifications, research, education
│
├── lib/
│   ├── fonts.ts                  # next/font config
│   └── utils.ts                  # cn() helper
│
├── public/
│   ├── portrait.jpg              # Optimized 600×600 portrait
│   ├── resume.pdf                # Placeholder — REPLACE with your real resume
│   └── favicon.svg               # Logo-derived favicon
│
└── content/writing/              # MDX posts (empty for now)
```

---

## How to update content

**All copy lives in `/data`.** You shouldn't need to touch components to update content — that's the whole point of the file structure.

### Add or edit a project
Edit `data/projects.ts`. Each project needs a slug, company, role, date range, summary, metrics, stack, and a `featured` boolean (controls home-page visibility).

### Add an experience entry
Edit `data/experience.ts`. Sorted newest first.

### Update contact / social links
Edit `data/site.ts`.

### Add a certification or research paper
Edit `data/capabilities.ts`.

### Change the hero one-liner
Edit `components/hero.tsx` — the tagline `<p>` element.

### Change the terminal block content
Edit `components/terminal.tsx` — the `lines` array at the top.

---

## GitHub integration

`/api/github` returns a JSON payload with your profile stats and recent repos. Cached for 1 hour. Works without a token (60 req/hr from your server's IP) but add `GITHUB_TOKEN` to `.env.local` for 5000 req/hr.

Test in dev: `curl http://localhost:3000/api/github`

To display this data on the site, fetch it from a server component (recommended) or wire up a client component. The endpoint is ready; the UI surface for it is the next thing to build.

---

## Deployment to Vercel + saurabhjingade.com

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — accept defaults
4. Add env vars in the Vercel dashboard (only `GITHUB_TOKEN` is needed; everything else is hardcoded for v1)
5. Connect your domain:
   - In Vercel: Settings → Domains → Add `saurabhjingade.com` and `www.saurabhjingade.com`
   - At your registrar: add the DNS records Vercel shows you (usually an A record `76.76.21.21` for the apex and a CNAME for www)
   - Vercel will issue an SSL cert automatically once DNS propagates

Build time should be under 30s. First deploy should be live in 2 minutes.

---

## What's NOT in v1 (intentionally deferred)

These were in the master prompt but make more sense as v2:

- **AI chatbot trained on portfolio content.** Real engineering effort (embeddings, vector store, eval). Most recruiters won't use it. Defer.
- **Daily activity aggregator** pulling from GitHub + Notion + LinkedIn. LinkedIn has no API for this. Reframe as a focused "GitHub feed" using the existing API route.
- **Live personal-brand dashboard.** Static metrics on Home already convey enough. A live dashboard needs new content to be worth it.
- **Notion as CMS.** MDX in this repo is faster to iterate on. Migrate later if writing in Markdown becomes friction.
- **LinkedIn / Naukri scraping.** Both are ToS gray-zones. Static link from data/site.ts is the right answer.

---

## What to do next

In order of impact:

1. **Replace `public/resume.pdf`** with your actual current resume PDF.
2. **Replace `public/og.png`** — generate a 1200×630 social card. Quick option: use [og-image.vercel.app](https://og-image.vercel.app) or build one with @vercel/og.
3. **Update `data/site.ts`** with your actual public Naukri profile URL (currently a placeholder).
4. **Test the GitHub API:** `curl http://localhost:3000/api/github` and verify your repos come back. Then build a small `<GithubFeed />` component to render them on the Home or About page.
5. **Fill in case-study detail pages.** Each `app/work/[slug]/page.tsx` is currently a stub. Write the full write-up per project (context, approach, decisions, results).
6. **Write your first Medium-style post** in `content/writing/`. Once you have one, build the MDX loader using `next-mdx-remote` (already in deps) and wire up `app/writing/[slug]/page.tsx`.
7. **Add analytics** — Plausible or Vercel Analytics. Both have first-party Next.js integration and zero config.

---

## Design system

Design tokens live in `app/globals.css` under the `@theme` block. To change the accent color, edit `--color-accent` and `--color-accent-2`. Everything else flows from CSS variables.

The aesthetic is deliberately:
- **Dark by default** (no light mode in v1 — the audience expects dark)
- **Mono-typography heavy** for technical labels and metadata
- **Editorial** rather than marketing-y
- **Subtle motion** (CSS animations only — Framer Motion is installed but not used)

If you want to add a light mode later: add CSS variables for both modes inside `@theme` and a small toggle. Don't do this in v1 — the dark aesthetic is core to the brand.

---

## License

This is a personal portfolio. Copy structure and approach freely; the content and branding are mine.
# my_portfolio
