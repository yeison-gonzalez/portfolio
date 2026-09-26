# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight:

- **International recruiters and hiring managers** at remote-first companies, screening frontend candidates quickly and deciding whether to reach out.
- **Freelance clients** (people and small businesses) looking for a developer to build a concrete product.

Both arrive from a link (CV, LinkedIn, GitHub, a message) and give the site a short window before deciding whether to contact.

## Product Purpose

Personal, bilingual (ES/EN) portfolio of Yeison Gonzalez, React Engineer and Senior Frontend Developer based in Bogotá. It exists to get him contacted (WhatsApp, email, LinkedIn) for remote roles and freelance work.

Success: the visitor leaves with a strong impression of the site itself, is curious about the person behind it, and reaches out.

## Positioning

The portfolio is itself the proof of craft: a frontend developer whose own site is memorable and striking enough that visitors want to know who built it. Backed by 7+ years of experience, growth from Junior to Frontend Architect at one company, a microfrontend architecture that improved performance by 90%, and leading a team of 3 frontend developers.

## Operating Context

- Static site deployed to GitHub Pages under `/portfolio`, built with Astro 7, React 19 islands and Tailwind CSS 4.
- All content lives in `src/data/*.ts` and `src/i18n/ui.ts`, every string localized ES/EN; Spanish is the default locale.
- Visitors reach contact through WhatsApp, email, LinkedIn and GitHub links.

## Capabilities and Constraints

- Sections: hero, about, tech stack, experience + education, projects, contact, footer, 404.
- Single visual world, no light/dark theme toggle (removed at the user's request).
- The CSS 3D rotating laptop (`src/components/Laptop3D.astro`) must survive the redesign.
- Projects are all AI products in progress (`status: 'building'`) with concept art; they gain screenshots and links when shipped.

## Brand Commitments

- Name: Yeison Gonzalez (full name Yeison David Gonzalez Loaiza), initials YG.
- The 3D laptop is a confirmed keeper. No other visual element of the previous site is binding.
- Pinned world (user request, 2026-09-24, replacing the earlier "category standard" preference): the whole portfolio looks and behaves like a Game Boy console game, rendered as the pixel LCD. Every section owns its own color field instead of one all-dark ground, and sections should feel interactive and game-like rather than flat. No light/dark theme toggle.

## Evidence on Hand

- CV-derived content in `src/data`: experience (CCxC 2020–present across four roles, Imaginamos 2018–2019), education, skills, stats (7 years, +90% performance, team of 3).
- Tech logos from devicon plus local icons in `src/assets/icons`.
- No personal photo. Do not design around a portrait.
- Screenshots of CCxC and diggi pymes work exist in git history but must **not** be used.
- No testimonials, clients, or shipped side projects yet. Do not fabricate any.

## Product Principles

1. The site is the portfolio piece: craft and memorability are the argument.
2. Make the person visible through voice, trajectory and details, not a photo.
3. Contact is always one obvious step away.
4. Every claim comes from the CV; demonstration material is labeled as concept.
5. Bilingual parity: nothing exists in only one language.
