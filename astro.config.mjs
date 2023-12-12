import { defineConfig } from 'astro/config';
import basicSsl from '@vitejs/plugin-basic-ssl'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "my"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://zakizakaria-cybersec.github.io',
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/Page',
        config: 'storyblok/Config',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      },
    }),
    tailwind()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  apiOptions: {
    region: "eu",
  },
});