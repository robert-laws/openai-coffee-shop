# Luma Coffee

A small React + Vite marketing site for a fictional craft coffee brand.

Live site: [https://robert-laws.github.io/openai-coffee-shop/](https://robert-laws.github.io/openai-coffee-shop/)

## Stack

- React 19
- Vite 7
- Plain CSS
- GitHub Pages via GitHub Actions

## Local Development

```sh
npm install
npm run dev
```

The default Vite dev server will print the local URL in the terminal.

## Build

```sh
npm run build
npm run preview
```

## Project Structure

```text
src/App.jsx            Main page layout
src/siteContent.js     Copy and image references
src/styles.css         Site styling
public/images/coffee/  Production image assets
.github/workflows/     GitHub Pages deployment workflow
```

## Deployment

This repo deploys to GitHub Pages from the `main` branch using the workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Important detail: the site must continue to work under a GitHub Pages base path such as `/openai-coffee-shop/`. Image paths are normalized in [`src/siteContent.js`](src/siteContent.js) for that reason.

## Images

The site photography was generated for this project and committed under [`public/images/coffee`](public/images/coffee). Intermediate generation outputs are kept out of git.

## Repo Notes

- [`AGENTS.md`](AGENTS.md) contains repo guidance for coding agents that read AGENTS files.
- [`CLAUDE.md`](CLAUDE.md) contains the equivalent repo guide for Claude Code.
