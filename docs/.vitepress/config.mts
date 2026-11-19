import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/akita/',
  title: "理工憲法",
  description: "理工憲法",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Contents',
        items: [
          { text: '理工憲法', link: '/code_artifact' },
          { text: '', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SSS465270/akita' }
    ]
    footer: {
      copyright: 'Copyright © 2026 理工憲法 / SSS465270'
    }
  }
})