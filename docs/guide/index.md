---
title: Getting Started
sidebar_position: 1
description: Getting started with adding your project's documentation to the site.
---

## Prerequisites

In order to add your project's documentation to the site, you need to first clone the repository. You can do this by opening [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor) and clicking on the `Clone Git Repository` button in the Welcome screen. Then, enter the URL of the repository: `https://github.com/Tonantzintla/Documentation.git` and press `Enter`.

Make sure you have [Node.js](https://nodejs.org/en/) installed and [pnpm](https://pnpm.io/) installed globally before continuing. You can install pnpm by running `npm install -g pnpm` in your terminal after installing Node.js.

After cloning the repository, open a terminal in the root of the repository and run `pnpm install` to install all dependencies.

:::info

You must also install [Prettier](https://prettier.io/) in your code editor. If you are using Visual Studio Code, you can install the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). Also, make sure to enable the `formatOnSave` option in your code editor's settings.

:::

## Setting up your project's documentation folder

Once you have everything installed, create a new map in the `docs/` directory. The folder should be named after your project. For example, if your project is called `my-project`, you should create a folder called `docs/my-project/`.

In this map all of your documentation should be placed. You can use [Markdown](https://www.markdownguide.org/) to write your documentation. If you are not familiar with Markdown, you can use [this guide](https://www.markdownguide.org/basic-syntax/) to learn the basics.

## Registering your project's documentation to the site

In order for your project's documentation to be generated and added to the site, you need to register it in the `docusaurus.config.js` file. You can do this by adding the following code to the `plugins` array (copy the highlighted code):

```js
[
  // other item in the array
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "fluent",
      path: "docs/fluent",
      routeBasePath: "/fluent",
      sidebarPath: require.resolve("./sidebars.js"),
    },
  ],
  // your project's documentation
  // highlight-start
  [
    "@docusaurus/plugin-content-docs",
    {
      id: "my-project", // this should be the same as the name of your project's documentation folder
      path: "docs/my-project", // this should always start with "docs/" and then the name of your project's documentation folder
      routeBasePath: "/my-project", // this should always start with "/" and then the name of your project's documentation folder, you may customize after that
      sidebarPath: require.resolve("./sidebars.js"), // this should always be the same
      // ... other options
    },
  ],
  // highlight-end
];
```

This makes sure that your project's documentation is accessible via the URL `https://docs.tonantzintla.org/my-project`.

:::tip Note

You can now start writing your documentation. You can see the changes you make by running `pnpm start` (or `pnpm dev`) in your terminal. This will start a local server on `http://localhost:3000/` where you can see your changes every time you save your files.

However, nothing will be visible on your project's url yet, since you haven't added any markdown files yet. We will get to this in the [next step](/guide/add).

:::

### Adding your project's documentation to the navbar

To add your project to the navbar, edit the `docusaurus.config.js` file again. And add the following code to the `navbar` array:

```js
const config = {
  themeConfig: {
    navbar: {
      title: "Documentation",
      style: "dark",
      items: [
        {
          type: "dropdown",
          label: "Projects",
          items: [
            // other items in the dropdown
            {
              to: "/arrayfield",
              label: "Arrayfield",
            },
            // your project's documentation
            // highlight-start
            {
              to: "/my-project", // this should link exactly to the routeBasePath you specified in the previous step
              label: "My Project", // this should be the name of your project
            },
            // highlight-end
          ],
          position: "left",
        },
      ],
    },
  },
};
```

This makes sure that your project is visible in the navbar.

### Adding your project's documentation to the homepage

To add your project to the homepage, edit the `projects.json` file in the `src/json/` directory.

```json
[
  // other projects
  {
    "image": "/arrayfield/arrayfieldbg.jpg",
    "name": "ArrayField",
    "link": "/arrayfield"
  },
  // your project
  // highlight-start
  {
    "image": "/my-project/my-projectbg.jpg", // this should be the path to the background image of your project's documentation and must be located in static/img directory, do not include the /img/ part.
    "name": "My Project", // this should be the name of your project, it's just used for the alt text of the image
    "link": "/my-project" // this should be the same as the routeBasePath you specified in the previous step
  }
  // highlight-end
]
```

This makes sure that your project is visible on the homepage.

:::warning Warning

Without registering your project's documentation to the site, it will not be visible on the site and we won't accept any pull requests to add your project's documentation to the site.

Also make sure to check if the site actually builds with `pnpm build` before making a pull request. If the site doesn't build, we won't accept your pull request.

:::
