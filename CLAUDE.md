# Counter Brew

> Café drinks you can make on your kitchen counter — no espresso machine.

This file is context for Claude Code. Read it before making changes. It describes an individual, graded, full-stack **front-end** project (Lebanese University, Faculty of Engineering — Full Stack Development Final Project 2026).

---

## Concept

A small, deployed website about café-style coffee drinks that can be made at home **without an espresso machine**. Cheap tools stand in for the machine — moka pot, AeroPress, Vietnamese phin filter, cezve, handheld milk frother. The "no machine" angle is the project's distinctive hook and should show up in the UI and copy, not just the data.

## Architecture — two separate data sources

These are graded on **different** rubric lines and must stay distinct. Do not merge them.

- **Source A — local, student-authored.** A JS array of 15+ drink objects in `data/drinks.js`, shipped in the repo. Powers the **Browse** page. This is the graded "your own content." It is never fetched.
- **Source B — remote API.** The Spoonacular recipe API, called from the browser at runtime. Powers the **Explore** page with search / filter / pagination over the *fetched* data, plus loading/error/empty states. This is the graded "API integration."

## Pages (minimum 3)

- `index.html` — Home: concept intro, the no-machine hook, a featured drink, nav into the two sections.
- `drinks.html` — Browse: render the 15+ curated drinks as cards; client-side **filtering** over the local list (base, milk, hot/iced, sweetness); detail view or modal with the full home method.
- `explore.html` — Explore: search box queries Spoonacular; results render as cards with **pagination**; clicking a result fetches full recipe details.

## Tech requirements (hard constraints)

- Semantic HTML5; hand-written CSS3 in `css/styles.css`, loaded **after** Bootstrap so local rules win on conflict.
- **Bootstrap 5** and **Flexbox** for layout; responsive across mobile / tablet / desktop.
- All JavaScript as **ES6 classes** using modules (`import`/`export`). **No jQuery**, no pre-ES6 syntax.
- Consistent navbar on every page; routing via plain `<a href>` anchors between the three HTML files.
- Live site must load on a phone with **no console errors**. Deploy free on Vercel, Netlify, or GitHub Pages.

## Custom front-end requirement (assigned, graded)

**Sticky footer with social links and contact info.** Sticks to the bottom of the viewport even on short pages, identical on all three pages, built once and reused. Explain it in a code comment and in the README.

## API spec (Explore page)

- **Spoonacular** — requires free registration + API key (satisfies the "key-based public API" rule).
- Must demonstrate: fetch → display in a styled interface → at least one of search/filter/pagination **over fetched data** (target: search + pagination) → proper **loading, error, and empty** states.
- Free tier is limited per day: cache results in memory, avoid redundant calls.
- **Key handling:** read the key from `js/config.js` (gitignored, never committed). A committed `js/config.example.js` documents the shape. On a static deploy the key is visible in the browser — accepted constraint for a backend-less project; disclose it in the README. **Never hardcode the real key in a committed file.**

## ⚠️ Curated content — do NOT generate this

Scaffold the data structure, card rendering, and filter logic. **Do not invent or write the 15+ drink entries.** The assignment requires this content to be the student's own collected work, and the AI-use appendix must match the commit history. Provide an empty array plus **one** clearly-labelled placeholder example; the student fills in real, self-written entries.

### Drink object schema (`data/drinks.js`)

```js
{
  id: "cold-brew",            // unique slug
  name: "Cold brew",
  base: "coarse grounds",     // moka-pot shot / coarse grounds / instant / ...
  milk: "none",               // none / steamed / foamed / condensed / which kind
  temp: "iced",               // hot / iced
  sweetness: "none",          // none / low / sweet   (filterable)
  strength: "medium",         // light / medium / strong
  equipment: ["jar", "filter"],
  method: ["Step 1 ...", "Step 2 ..."],  // ordered home instructions
  notes: ""                   // student's own tasting note / origin (authored)
}
```

Candidate drinks the student may pick ~15 from (no espresso machine): cold brew, Japanese iced (flash-brew), French press, pour-over, AeroPress, moka-pot coffee, café au lait, Spanish café con leche, Vietnamese cà phê sữa đá, Turkish coffee, Greek/Cypriot frappé, Dalgona (whipped) coffee, affogato, home mocha/cortado/cappuccino/flat white/latte, cold-foam coffee, bulletproof coffee.

## Repository structure

```
counter-brew/
├── index.html            Home
├── drinks.html           Browse — curated 15+
├── explore.html          Explore — Spoonacular API
├── css/styles.css        hand-written, loaded after Bootstrap
├── js/
│   ├── main.js           entry; ES6 modules
│   ├── config.example.js committed template
│   └── config.js         real key — GITIGNORED
├── data/drinks.js        student-authored 15+ entries
├── assets/img/
├── .gitignore
└── README.md             includes AI-use appendix
```

## Constraints & gotchas

- **Serve over http, not `file://`.** ES6 modules and `fetch` fail on double-click. Use VS Code Live Server in dev.
- **Commit discipline is graded.** Small, meaningful, descriptive commits across the whole period — never one bulk commit near the deadline.
- **Originality is checked.** Near-identical projects are flagged; keep code and content original.
- **Evidence:** screenshots at mobile, tablet, desktop widths go in the repo.

## How to work in this repo

- Prefer small, single-purpose changes that map to one descriptive commit; suggest a commit message after each.
- Before writing any drink content, stop — that's the student's to author (see warning above).
- When unsure about page names, schema fields, or scope, ask rather than assume.

## Suggested build order

1. Scaffold, `.gitignore`, README skeleton, home page. *(done in setup)*
2. Shared navbar + sticky footer, reused across all pages. *(one commit)*
3. Browse: drink-card class, render the curated list, add filters.
4. Explore: Spoonacular service class, search + render + pagination, loading/error/empty.
5. Responsive polish, screenshots, deploy, finalise README + AI-use appendix.

## Course conventions & chapter routing

Reference material lives in `course-reference/` (gitignored — copyrighted course slides, never published). Follow the conventions taught in the course. Route by task:

- HTML structure, semantic markup, navbar, footer, base CSS → Chapter 1 (HTML & CSS)
- Bootstrap 5 grid, Flexbox layout, responsive breakpoints → Chapter 2 (Flexbox & Bootstrap)
- ES6 classes, fetch, DOM updates, events → Chapter 3 (JavaScript)
- Git workflow and responsive web design → Chapter 4 (Web Design & Version Control)
- Spoonacular API integration on the Explore page → Chapter 5 (APIs)


When a task maps to a chapter, prefer the patterns and naming style from that chapter over generic conventions, so the code matches what the course taught.

## Authoring boundary (reaffirmed)

The 15+ entries in `data/drinks.js` are authored by the student, not generated. Research support (sourced facts, ratios, methods) may be provided for the student to rewrite in their own words and verify. Do not auto-fill `data/drinks.js` with generated descriptions or write the `notes` field. Leave the array empty except for one clearly-labelled placeholder example.

## Build constraints (every task)

- **No console errors.** Every page must load and run with a clean browser console — this is a hard grading line. After any change, the page must produce no errors or uncaught warnings in DevTools.
- **Static front-end only.** The site deploys as static files to Vercel, Netlify, or GitHub Pages. No backend, server, database, build step, or Node runtime. All JS runs in the browser; the API is called client-side.

## Search / filter / pagination split (do not rearrange)

The assignment requires at least one of search/filter/pagination over fetched data. This project's intended design:

- **Browse page (drinks.html)** — client-side **filtering** over the local curated list (`data/drinks.js`): base, milk, hot/iced, sweetness.
- **Explore page (explore.html)** — **search + pagination** over the *fetched* Spoonacular results, with loading/error/empty states.

Keep filtering on Browse and search+pagination on Explore. Do not move the API-driven search to Browse or leave Browse as a plain unfiltered list.