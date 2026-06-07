# Content map

Where to look when you want to change something on the site.

## TL;DR — almost everything lives in `src/data/site.ts`

All page copy (name, hero statement, about paragraphs, skills, projects, CV entries) is exported from a single file: **`src/data/site.ts`**. Edit there and every component picks it up. The Astro components themselves only do layout — you rarely need to touch them unless you want to change *how* something is rendered, not *what* it says.

Run `npm run dev` after edits to preview at <http://localhost:4321>.

---

## "I want to change X" → go here

### Identity / header / contact

| What | File | Export / field |
|---|---|---|
| Your name (full) | `src/data/site.ts` | `profile.name` |
| Short name (top nav) | `src/data/site.ts` | `profile.shortName` |
| Subtitle under name | `src/data/site.ts` | `profile.title` |
| Identity tagline (mono, teal, above name in hero) | `src/data/site.ts` | `profile.identity` |
| Location | `src/data/site.ts` | `profile.location` |
| Email | `src/data/site.ts` | `profile.email` |
| Phone | `src/data/site.ts` | `profile.phone` |
| LinkedIn URL | `src/data/site.ts` | `profile.linkedin` |
| GitHub URL | `src/data/site.ts` | `profile.github` |

### Hero (the big landing screen)

| What | File | Where |
|---|---|---|
| The bold one-liner statement | `src/data/site.ts` | `heroStatement` |
| Nav link labels / order | `src/data/site.ts` | `navItems` |
| Hero layout (spacing, scroll-down arrow, etc.) | `src/components/Hero.astro` | inline JSX |

### About

| What | File | Where |
|---|---|---|
| Each paragraph of the About section | `src/data/site.ts` | `aboutParagraphs` (array of strings) |
| About section heading style | `src/components/About.astro` | inline JSX |

### Skills

| What | File | Where |
|---|---|---|
| Skill categories + items | `src/data/site.ts` | `skillGroups` |
| Skill chip styling, grid columns | `src/components/Skills.astro` | inline JSX |

### Projects

| What | File | Where |
|---|---|---|
| All project cards (title, description, metric, stack, image, github, demo, slug) | `src/data/site.ts` | `projects` array |
| Card layout / hover behavior | `src/components/Projects.astro` | inline JSX |
| Project **detail page** layout (`/projects/<slug>/`) | `src/pages/projects/[slug].astro` | inline JSX |
| The placeholder text on detail pages ("Detailed write-up coming soon.") | `src/pages/projects/[slug].astro` | look for the `<p>` near the bottom |

To add a new project: append an object to `projects` in `site.ts`. Required fields: `slug`, `title`, `description`, `metric`, `stack`, `image`, `imageAlt`. Optional: `metricLabel`, `github`, `demo`, `highlight`.

To make the GitHub "Code" button appear on a card: set `github` to a real URL (not `'#'`).
To add a "Live demo" button: add a `demo: 'https://…'` field.

### CV

| What | File | Where |
|---|---|---|
| Education rows | `src/data/site.ts` | `education` array |
| Experience rows + bullets | `src/data/site.ts` | `experience` array |
| Activities rows + bullets | `src/data/site.ts` | `activities` array |
| Certifications | `src/data/site.ts` | `certifications` array |
| Timeline row layout (logo / text / date columns) | `src/components/CV.astro` | inline JSX |

Each row needs a `logo` field pointing to a file under `/assets/logos/`. See **Assets** below.

---

## Assets

| Type | Folder | Notes |
|---|---|---|
| Project card images | `public/assets/projects/` | Referenced as `/assets/projects/<file>` in `site.ts` `image:` fields. SVG/PNG/JPG/WebP all work. Aspect ratio 8:5 looks best (800×500). |
| Institution logos | `public/assets/logos/` | Referenced as `/assets/logos/<file>` in `site.ts` `logo:` fields on education/experience/activity entries. Currently SVGs (except `bilkent.png`). |
| Favicon | `public/favicon.svg` | The little browser-tab icon. |

To replace an asset, drop a new file with the **same filename** and it picks up automatically. To use a new filename, also update the path in `site.ts`.

---

## Styling tokens (colors, fonts)

| What | File | Where |
|---|---|---|
| Background / text / accent colors | `src/styles/global.css` | `@theme { ... }` block — `--color-bg`, `--color-accent`, etc. |
| Fonts | `src/styles/global.css` + `src/layouts/Layout.astro` | tokens in CSS; Google Fonts link in `<head>` |

Changing `--color-accent` recolors every teal element on the page in one shot.

---

## Layout / structural files (you rarely touch these)

| File | Purpose |
|---|---|
| `src/layouts/Layout.astro` | HTML shell, `<head>`, fonts, body wrapper |
| `src/pages/index.astro` | Composes the homepage; contains the scroll observers for sticky nav + active link highlighting |
| `src/pages/projects/[slug].astro` | Dynamic route — generates one HTML page per project from the `projects` array |
| `src/components/TopNav.astro` | The sticky top header that appears after the hero scrolls out |
| `src/components/Hero.astro` | The full-screen landing hero |
| `src/components/Section.astro` | The `01.` `02.` numbered section heading with the horizontal accent line |
| `src/components/SocialLinks.astro` | Shared GitHub/LinkedIn icon set used in hero + top nav |

---

## Build & deploy

| Command | What it does |
|---|---|
| `npm run dev` | Local preview at <http://localhost:4321> (or `4322` if `4321` is busy) |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the built `dist/` for a final check |

| What | File |
|---|---|
| GitHub Pages site URL (set before deploy) | `astro.config.mjs` — `site:` field |
| CI deploy workflow | `.github/workflows/deploy.yml` |
