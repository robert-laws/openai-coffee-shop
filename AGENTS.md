# AGENTS.md

## Project Summary

This repository contains a single-page coffee landing page built with React, Vite, and plain CSS.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Important Files

- `src/App.jsx`: page structure
- `src/siteContent.js`: copy, image paths, and content data
- `src/styles.css`: all styling
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment

## Working Notes

- Keep the site compatible with GitHub Pages subpath deploys.
- Do not replace the `BASE_URL` image path normalization in `src/siteContent.js` unless you keep equivalent behavior.
- Production images live in `public/images/coffee/`.
- Generated artifacts like `dist/`, `output/`, and local virtual environments should stay untracked.
- Run `npm run build` after code changes that affect the site.

## Design Notes

- Preserve the existing bright, editorial craft-coffee aesthetic unless a task explicitly changes the direction.
- The hero image and the story-side image rely on container-based image fill behavior in CSS; keep those media wrappers aligned with the current `.frame` pattern.
