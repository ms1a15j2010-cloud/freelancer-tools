import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://freelancer-tools-one.vercel.app',
  integrations: [sitemap()]
});