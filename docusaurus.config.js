// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs",
  tagline: "Documentation for all projects",
  favicon: "/assets/favicons/favicon.ico?v=5",

  // GitHub pages deployment config.
  url: "https://docs.tonantzintla.org",
  baseUrl: "/",
  organizationName: "Tonantzintla",
  projectName: "Documentation",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

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
          path: "docs/guide",
          routeBasePath: "/guide",
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
        id: "arrayfield",
        path: "docs/arrayfield",
        routeBasePath: "/arrayfield",
        sidebarPath: require.resolve("./sidebars.js"),
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
      metadata: [
        { name: "theme-color", content: "#2B2D31" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: "https://docs.tonantzintla.org" },
        { property: "og:locale", content: "en" },
        { property: "og:site_name", content: "TON" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      image: "img/banner.png",
      navbar: {
        title: "Documentation",
        logo: {
          alt: "TON Logo",
          src: "img/logo.svg",
        },
        style: "dark",
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            to: "/guide",
            position: "left",
            label: "Get Started",
          },
          {
            type: "dropdown",
            label: "Projects",
            items: [
              // Add your project under the last item
              {
                to: "/arrayfield",
                label: "Arrayfield",
              },
            ],
            position: "left",
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
        indexName: "tonantzintla",
        appId: "AZKUWVWV9U",
        apiKey: "361d02d439684347da425d2e8a5a8da7",
        contextualSearch: false,
      },
      footer: {
        copyright: `Powered by TON`,
      },
    }),
};

module.exports = config;
