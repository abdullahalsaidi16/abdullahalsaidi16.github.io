import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abdullahalsaidi16.github.io',
  // One page, one stylesheet — inline it so the trace paints in a single round trip.
  build: { inlineStylesheets: 'always' },
});
