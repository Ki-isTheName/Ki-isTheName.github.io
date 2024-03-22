import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

// import expressiveCode from "astro-expressive-code";

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
  integrations: [tailwind(), svelte({
    preprocess: []
  })],
});