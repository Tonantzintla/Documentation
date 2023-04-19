// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sirius Docs",
  tagline: "Documentation for all Sirius related projects",
  favicon: "img/favicon.ico",

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
        {
          name: "description",
          content: "Documentation for all Sirius related projects",
        },
        { property: "og:title", content: "Sirius Docs" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://docs.sirius.menu" },
        { property: "og:locale", content: "en" },
        { property: "og:image", content: "img/Docs.png" },
        { property: "og:image:alt", content: "Sirius Docs" },
        {
          name: "description",
          property: "og:description",
          content: "Documentation for all Sirius related projects",
        },
        { property: "og:site_name", content: "Sirius Docs" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@SiriusMenu" },
        { name: "twitter:title", content: "Sirius Docs" },
        {
          name: "twitter:description",
          content: "Documentation for all Sirius related projects",
        },
        { name: "twitter:image", content: "img/Docs.png" },
        { name: "twitter:image:alt", content: "Sirius Docs" },
      ],
      // Replace with your project's social card
      image: "img/Docs.png",
      announcementBar: {
        id: "beta",
        content: "This new documentation website is still in beta. Expect unmatching styling and other bugs. If you find any or have any suggestions, please report them to <a href='https://discord.com/users/389759544776982528'>Gigi</a> in the <a href='https://discord.gg/sirius'>Sirius Discord</a>.",
        backgroundColor: "#fff",
        textColor: "#000",
        isCloseable: false,
      },
      navbar: {
        title: "Sirius Docs",
        logo: {
          alt: "Sirius",
          src: "img/logo.svg",
        },
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
        apiKey: "23dce9cc88cb86b13abd821958b35469",
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Sirius Docs.`,
      },
    }),
};

module.exports = config;
