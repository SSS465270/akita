import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/akita/',
  title: "RIKO-KEMPO",
  description: "RIKO-KEMPO",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '理工憲法', link: '/code_artifact' },
          { text: '', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'science.rikizap.com' }
    ]
  }
})