// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'sudoSignals Docs',
  tagline: 'The dashboard for all your installations.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.sudosignals.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SudoMagic', // Usually your GitHub org/user name.
  projectName: 'sudoSignals', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '<b>🎉️ sudoSignals v2 is in Beta Early Access <a target="_blank" rel="noopener noreferrer" href="/v2">check out the docs here!</a> 📝</b>',
        backgroundColor: '#DFF50D',
        textColor: '#181818',
        isCloseable: false,
      },

      // Replace with your project's social card
      image: 'img/signals-sharing-card-01.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/v1', label: 'v1', position: 'left' },
          { to: '/v2', label: 'v2', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: '✨ Request Features',
                to: 'https://github.com/SudoMagicCode/SudoSignals/discussions',
              },
              {
                label: '🪲 Report a Bug',
                to: 'https://forms.clickup.com/f/16ky7-1036/3TNCU1Q2JMMEZ5XS43',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SudoMagic, LLC.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'glsl'],
      },
    }),
};

export default config;
