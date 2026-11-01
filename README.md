# abdullahalsaidi16.github.io

My personal site — [abdullahalsaidi16.github.io](https://abdullahalsaidi16.github.io).

Built with [Astro](https://astro.build), static output, deployed to GitHub Pages by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

## Editing

Everything the page says lives in **[`src/data/profile.ts`](src/data/profile.ts)** — identity,
roles, projects and the stack. Adding a job or a project is one edit in that file; the markup
in [`src/pages/index.astro`](src/pages/index.astro) never needs touching.

The visual system is documented in [`DESIGN.md`](DESIGN.md).

## Running it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```
