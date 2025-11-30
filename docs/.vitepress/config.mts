/// <reference types="node" />  // 👈 add this line if you use TypeScript

import { defineConfig } from 'vitepress'

// VitePress config runs in Node, so process.env is available
const isProd = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
// compute site base for nav links (uses Vite's BASE_URL at build time)
const siteBase = (import.meta as any).env && (import.meta as any).env.BASE_URL
  ? (import.meta as any).env.BASE_URL.replace(/\/$/, '')
  : ''

export default defineConfig({
  title: 'Portfolio',
  description: 'A VitePress Site',

  // ✅ dev: '/', prod (GitHub Pages): '/my-awsome-portfolio/'
  base: isProd ? '/my-awsome-portfolio/' : '/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: siteBase + '/' },
      { text: 'about', link: siteBase + '/about/' },
      { text: 'works', link: siteBase + '/works/' }
    ],
  },

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=IBM+Plex+Serif&display=swap'
      }
    ]
  ]
})
