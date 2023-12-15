import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "my"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://zakizakaria-cybersec.github.io',
  styles: ['/Users/zaki/Desktop/GitPageFolio/zakizakaria/src/styles/global.css'],
  integrations: [tailwind()]
});