import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React Ghosta",
  tagline:
    "React popup alerts. Lightweight, customizable and beautiful by default.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://react-ghosta.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "eleviven", // Usually your GitHub org/user name.
  projectName: "react-ghosta", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },

        theme: {
          customCss: [
            "./src/assets/css/global.css",
            "./node_modules/react-ghosta/dist/ghosta.css",
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "React Ghosta",
      logo: {
        alt: "React Ghosta",
        src: "img/logo-dark.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          label: "Documentation",
          href: "/docs/getting-started/introduction",
          position: "left",
        },
        {
          href: "https://github.com/eleviven/react-ghosta",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Documentation",
              to: "/docs/getting-started/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/react-ghosta",
            },
            {
              label: "GitHub",
              href: "https://github.com/eleviven/react-ghosta",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Ghosta by Firuzcan Hacıyev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: ["@docusaurus/theme-live-codeblock"],

  plugins: [
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
};

export default config;
