# CLAUDE.md

Handoff context for Claude Code. Read this before doing anything else.

## What this is

Personal portfolio for **Saurabh Jingade** — senior network systems engineer based in Bengaluru. Currently at **Catalina Systems** (Feb 2026–present) on SmartNIC validation and RDMA performance. Career so far: TCS → MS at University of Alberta → Fortinet (FortiOS benchmark team in Burnaby) → Isha Foundation (16-month volunteer block, sep 2023–oct 2024) → Motorola Solutions (VMware→KVM migration) → Catalina.

Audience: **hiring managers at NIC vendors, hypervisor companies, networking infrastructure** — NVIDIA Mellanox, Broadcom, Pensando, Fortinet, Palo Alto, VMware, Red Hat. Not generic tech recruiters. Substance > glassmorphism.

## Design language (locked, do not re-litigate)

- **Dark mode only** in v1. The audience expects dark. No light mode.
- **Editorial, calm, technical** — references are Cloudflare blog, fly.io, Tailscale. NOT cinematic/marketing.
- **Mono-typography heavy** for technical labels (JetBrains Mono). Inter for prose.
- **One accent color**: blue `#4A8EFF`. Defined in `app/globals.css` `@theme`.
- **Network-engineer aesthetic** — terminal blocks, subtle network-topology background, hex-numbered section headers (`// 0x01`), bracket-style links (`[all_work →]`).
- **Subtle motion only**. Animated topology dots, pulsing status dot, blinking cursor — that's it. No scroll-jacking, no Framer Motion theatrics.

## Stack

- **Next.js 15** (App Router), **TypeScript** strict, **Tailwind v4** (uses `@theme` directive in `globals.css`, no `tailwind.config.ts`)
- **MDX** ready via `@next/mdx` (no posts yet — pulling from Notion is the plan, see below)
- **next/font** for Inter + JetBrains Mono — fetched at build time, no external CDN at runtime
- **Framer Motion** installed but unused. Current animations are CSS-only.
- **No** shadcn/ui, no Radix, no UI library. Clean primitives.

## Content architecture

**`/data` is the CMS.** All content updates happen in `/data/*.ts`:

- `data/site.ts` — name, email, social links, availability, location
- `data/projects.ts` — case studies with `featured` flag (home page shows featured only)
- `data/experience.ts` — career timeline
- `data/capabilities.ts` — skills, certifications, education, **published research**

To update content, edit `/data` only. Don't touch components for content changes. If a change requires touching a component, that's a signal we missed a data field — add it to the type and refactor.

## What's built

- **Home page** (`app/page.tsx`) — hero with terminal block, companies strip, 3 featured projects, published research card, about with portrait, writing teaser
- **About page** (`app/about/page.tsx`) — full bio, capabilities table, **full experience timeline** (all 8 entries including TCS sub-roles), education, certifications
- **Work list** (`app/work/page.tsx`) — all projects
- **Project detail** (`app/work/[slug]/page.tsx`) — **STUB**, the most important thing to build out next
- **Writing index** (`app/writing/page.tsx`) — links to Medium; no MDX posts yet
- **GitHub API route** (`app/api/github/route.ts`) — fetches profile + repos, cached 1h. **No UI component renders this yet** — that's a v1 add-on to build.
- **SEO**: sitemap, robots, structured data (Person schema in layout)

## What's deferred (do not build without asking)

- **AI chatbot trained on portfolio** — disproportionate effort vs. value. Defer.
- **Live personal-brand dashboard** — static metrics are enough until there's new content to surface.
- **LinkedIn / Naukri integrations** — no usable APIs; static links only.

## What we know about Notion (important)

Saurabh has a substantial Notion workspace with real engineering writing — deep-dives on Layer 2/3 protocols, NVMe vs NVMe-OF (directly tied to Catalina work), Ethernet 802.3, STP, VLAN, NAT, Wi-Fi, Docker projects, VM networking. This content is the genuine "Writing" section — the Medium link is a placeholder until we wire this in.

**Three integration options** (decision still open):
1. **Notion as live CMS** — site pulls pages through Notion API. Best long-term, matches where Saurabh already writes.
2. **One-time MDX export** — pull selected pages into `content/writing/`. Simpler, fully self-contained.
3. **Curated link list** — just feature the 4–5 strongest pages, no real integration.

Recommended: option 1, with a curated `published: true` filter on the Notion side so we only surface a chosen subset, not the whole workspace.

## Current state

- **GitHub repo**: https://github.com/saurabhsjingade/my_portfolio (public, main branch)
- **Domain**: `saurabhjingade.com` (owned, not yet pointed at Vercel)
- **Vercel**: First deployment succeeded (commit `40d31cb`). A subsequent deployment failure was reported — error details not yet captured. **Highest-priority debug task** if it's still broken.
- **Resume**: `public/resume.pdf` is the real CV (3-page, converted from DOCX)
- **Portrait**: `public/portrait.jpg` is the real headshot (600×600)
- **Naukri URL in `data/site.ts`**: a guessed placeholder — needs Saurabh's actual public Naukri URL.

## Active known issues / staleness

- **`components/terminal.tsx`** has the line `"4 months at catalina · 9 years in networking"` — hardcoded, will go stale. Worth refactoring to compute from start dates in `data/site.ts`.
- **README "next steps" list** is outdated — items 1 and 3 are already done (resume swapped, but Naukri URL still placeholder).

## Priority order for next work

1. **Resolve the Vercel deployment failure** if still broken. Ask Saurabh for the failed deployment log.
2. **Build `<GithubFeed />` component** that consumes `/api/github` and renders pinned/recent repos on the home or about page. The endpoint exists; the UI doesn't.
3. **Decide on the Notion integration approach** and wire it up. The content is genuinely good and is the v1 portfolio's biggest unfilled credibility surface.
4. **Fill in case-study detail pages** (`app/work/[slug]/page.tsx`). Currently stubs. Each needs: context, approach, technical decisions, results. This is the deepest signal-to-effort ratio on the whole site.
5. **Generate proper OG image** (1200×630). `app/layout.tsx` references `/og.png` which doesn't exist yet.
6. **Refactor hardcoded dates** in terminal.tsx to compute from a start date.

## Style for code changes

- Match the existing inline-style + CSS-variable pattern in components. Don't refactor to Tailwind classes wholesale — the design tokens are CSS variables and that's intentional.
- TypeScript strict — keep it strict.
- Server components by default. Only use `'use client'` when actually needed (interactivity, hooks).
- Component file naming: kebab-case (`work-card.tsx`).
- Keep dependencies minimal. Don't add UI libraries without justification.

## Tone for visible copy

Voice is **direct, technical, calm, slightly dry**. Do not write marketing copy. Do not add emoji to user-facing content. The tagline reads "I work close to the wire" — that's the register. If a phrase sounds like it'd fit on a SaaS landing page, rewrite it.
