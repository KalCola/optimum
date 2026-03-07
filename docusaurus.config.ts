import type * as Preset from '@docusaurus/preset-classic'
import type { Config } from '@docusaurus/types'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'OptimAI Network Docs',
  tagline: 'Mine Data. Fuel AI. Get Rewards.',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https:/docs.optimai.network/',
  baseUrl: '/',

  organizationName: 'OptimaiNetwork',
  projectName: 'OptimAI Network Docs',

  onBrokenLinks: 'throw',
  // removed top-level onBrokenMarkdownLinks from here

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      // Migrate deprecated top-level option here:
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-E46T1HJVX5',
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WZVXXH7L',
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/optimainetwork/docs/tree/main/',
        },
        theme: {
          customCss: './src/styles/index.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    algolia: {
      appId: '21H8NIK27E',
      apiKey: '2764b00b42701493a032fe50aab6c8f4',
      indexName: 'optimai',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      searchParameters: {},
      searchPagePath: 'search',
      insights: false,
    },

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      logo: {
        alt: 'OptimAI Network Logo',
        src: 'img/branding/optimai-documentation-logo.svg',
      },
      items: [
        {
          href: 'https://github.com/optimainetwork/docs',
          label: 'GitHub',
          position: 'right',
          className: 'navbar__item--github',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/branding/optimai-documentation-logo.svg',
        alt: 'OptimAI Network Logo',
        href: 'https://optimai.network',
      },
      links: [
        {
          title: 'OptimAI Network',
          items: [
            {
              label: 'Website',
              href: 'https://optimai.network/',
            },
            {
              label: 'Whitepaper',
              href: 'https://optimai.network/files/OptimAI-Whitepaper-v1.pdf',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/OptimAINetwork',
            },
            {
              label: 'X',
              href: 'https://x.com/OptimaiNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://optimai.network/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/optimainetwork/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OptimAI Network.`,
    },
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'OptimAI Network Docs' },
      { name: 'twitter:description', content: 'Official documentation for the OptimAI Network.' },
      { name: 'twitter:image', content: 'https://docs.optimai.network/img/social-card.png' },

      { property: 'og:title', content: 'OptimAI Network Docs' },
      { property: 'og:description', content: 'Official documentation for the OptimAI Network.' },
      { property: 'og:image', content: 'https://docs.optimai.network/img/social-card.png' },
      { property: 'og:url', content: 'https://docs.optimai.network' },
    ],
  } satisfies Preset.ThemeConfig,
}

export default config
