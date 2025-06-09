import hotVibrantTheme from './src/theme/vscodeTheme';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EasyWallet Docs',
  tagline: 'Web3 Authentication made simple',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://easywallet.dev',
  baseUrl: '/',

  organizationName: 'KarimK3',
  projectName: 'easywallet-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/KarimK3/easywallet-docs/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/fonts.css'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EasyWallet',
      logo: {
        alt: 'EasyWallet Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { href: 'https://github.com/KarimK3/easywallet-sdk', label: 'SDK GitHub', position: 'right' },
        { href: 'https://github.com/KarimK3/easywallet-react', label: 'React GitHub', position: 'right' },
        { href: 'https://github.com/KarimK3/easywallet-server', label: 'Server GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'SDKs',
          items: [
            { label: 'Core SDK', href: 'https://github.com/KarimK3/easywallet-sdk' },
            { label: 'React SDK', href: 'https://github.com/KarimK3/easywallet-react' },
            { label: 'Server SDK', href: 'https://github.com/KarimK3/easywallet-server' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/tonserveur' },
            { label: 'Twitter', href: 'https://twitter.com/tonprofil' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Landing Page', href: 'https://easywallet.dev' },
            { label: 'GitHub', href: 'https://github.com/KarimK3' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EasyWallet. Built with Docusaurus.`,
    },
    prism: {
      theme: hotVibrantTheme,
      darkTheme: hotVibrantTheme,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;