# CLAUDE.md

## Overview

This repo is a static marketing site for Luma Coffee, built with React and Vite and deployed to GitHub Pages.

## Common Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Implementation Notes

- Main layout: `src/App.jsx`
- Content and image references: `src/siteContent.js`
- Styling: `src/styles.css`
- Deployment workflow: `.github/workflows/deploy-pages.yml`

## GitHub Pages Constraint

This project is deployed under the repo subpath `/openai-coffee-shop/`, not the domain root. Keep asset URLs compatible with `import.meta.env.BASE_URL`, including the existing trailing-slash normalization in `src/siteContent.js`.

## Asset Notes

- Final site images are committed in `public/images/coffee/`.
- Local generation output is not part of the committed site build.

## Before Finishing Changes

Run:

```sh
npm run build
```

If a change affects the deployed site, push to `main` so the GitHub Pages workflow can publish it.
