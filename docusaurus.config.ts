import { themes as prismThemes } from 'prism-react-renderer';
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

  organizationName: 'KarimK3', // ton GitHub user
  projectName: 'easywallet-docs', // le nom de ton repo pour la doc

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
        blog: false, // pas de blog pour l’instant
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
        src: 'img/logo.png', // <== Ton logo ici
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
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;