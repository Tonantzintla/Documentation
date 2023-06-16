// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sirius Documentation",
  tagline: "Documentation for all Sirius related projects",
  favicon: "https://cdn.sirius.menu/assets/favicons/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.sirius.menu",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SiriusDevelopmentGroup", // Usually your GitHub org/user name.
  projectName: "Sirius-Docs", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: {
          id: "default",
          path: "docs/rayfield",
          routeBasePath: "/rayfield",
          sidebarPath: require.resolve("./sidebars.js"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 70,
        sizes: [320, 640, 960, 1280, 1600, 1920],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sense",
        path: "docs/sense",
        routeBasePath: "/sense",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "staff",
        path: "docs/staff",
        routeBasePath: "/staff",
        sidebarPath: require.resolve("./sidebars.js"),
        // ... other options
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // You can configure additional HTML metadata (and override existing ones).
      metadata: [
        { name: "theme-color", content: "#2B2D31" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://docs.sirius.menu" },
        { property: "og:locale", content: "en" },
        { property: "og:site_name", content: "Sirius Documentation" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      // Replace with your project's social card
      image: "img/Docs.png",
      navbar: {
        title: "Documentation",
        style: "dark",
        items: [
          {
            to: "/rayfield",
            label: "Rayfield",
            position: "left",
          },
          {
            to: "/sense",
            label: "Sense",
            position: "left",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      prism: {
        additionalLanguages: ["lua"],
        defaultLanguage: "lua",
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        indexName: "rayfield",
        appId: "Y1DPKMTCPW",
        apiKey: "7b017cc6ab9d1a413284733c14c2c42b",
        contextualSearch: false,
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Sirius`,
      },
    }),
};

module.exports = config;
