# Aditya Gupta: personal site

The hub for everything I build and learn, built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321
```

## Make it yours

Almost everything lives in `src/consts.ts`:

- `SITE`: name, headline, intro, role, location, links
- `TOPICS`: the four themes visitors can filter by
- `PROJECTS`: every project; `featured: true` puts it in the big cards
- `METHOD`: the "How I learn" loop on the home page
- `NOW`: what you're doing now
- `EXPERIENCE` / `EDUCATION`: shown on /about/ once filled in

Pages: home (`src/pages/index.astro`), `/projects/`, `/about/`, `/community/`, `/blog/`.
To show a résumé button, add `public/resume.pdf` and set `resume: '/resume.pdf'`.

## Write a post

```sh
npm run new -- "My post title" experiment   # or post, thought
```

This creates a draft in `src/content/blog/`. Write in Markdown, set `draft: false`, then commit and push.
GitHub Actions builds and deploys it automatically.

Each post's front matter:

```yaml
title: My post
description: One line shown in lists and link previews.
date: 2026-10-17
kind: post        # post | thought | experiment
tags: [design, code]
draft: false
```

## Deploy

In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Every push to `main` deploys. Host it in a repo named `GuptaAditya95.github.io` so it lives at https://guptaaditya95.github.io/.

## Custom domain

1. Buy a domain (Cloudflare, Porkbun, Namecheap…).
2. In GitHub: **Settings → Pages → Custom domain**, enter it, and tick **Enforce HTTPS** once it verifies.
3. At your registrar, point DNS at GitHub Pages:
   - Apex (`example.com`): four `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` to `<username>.github.io`
4. Add `public/CNAME` containing just your domain, and update `site` in `astro.config.mjs`.
