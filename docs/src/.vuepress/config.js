const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'PMPRO Society',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'PMPROLogo.png',
    repo: 'pmprosociety/docs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'The Cookbook',
        link: '/cookbook/',
      },
      {
        text: 'Contribute',
        link: '/contribute/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Latest Submissions',
        link: '/latest/'
      },
    ],
    sidebar: {
      '/cookbook/': [{
        title: '📚The Cookbook',
        collapsable: false,
        children: [
          'featurespec.md',
          'upstream.md',
          'prioritizing.md',
          'datadriven.md',
          'stages.md',
          'sprintlog.md',
          'scopeofwork.md',
          'onboarding.md',
          'productonepager.md',
        ]
      }],
      '/contribute/': [{
        title: 'Contribute',
        collapsable: false,
        children: [
           'welcome/getstarted.md',
           'welcome/gettinghelp.md',
           'welcome/codeofconduct.md',
           'welcome/running.md',

        ]
      }]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
