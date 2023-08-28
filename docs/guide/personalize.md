---
title: Personalize your documentation
sidebar_position: 3
description: Personalize your project's documentation
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

You can personalize different aspects of your project's documentation, such as the site's title, the site's favicon, etc.

## Changing the metadata

You can change the metadata of your project's documentation files by editing the frontmatter of the markdown files. For example, you can change the embed image and description of a page by adding the `image` and `description` field in the frontmatter of the markdown file.

```md {4-5}
---
title: Introduction
sidebar_position: 1
image: /img/my-project/my-projectbg.jpg
description: My Project is a project skidded by me.
---
```

:::note

Unfortunately, Docusaurus does not support setting the metadata property of a whole folder. This means that you will have to add the personalizing metadata tags like image and description to every markdown file in your project's documentation.

:::

To see what things you can change, check out the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features/head-metadata).

:::warning Warning

We allow you to change basically everything in the frontmatter of the markdown files, but we will not accept any pull requests that changes the `og:site_name` metadata property.

:::

:::tip Tip

Use the [Discord Embeds](https://chrome.google.com/webstore/detail/discord-embeds/faeojpkidgnhcochgodeklokfimbencc) extension to see how your embeds will look like inside discord.

You can also use Discord's [Embed Debugger](https://discord.com/developers/embeds), however, for this to work your documentation must be live.

:::

## Disabling search functionality

If you do not want your project's documentation to be searchable, you can configure your documentation to not be crawled by Algolia. Change the `robots.txt` file in the `static/` folder to the following:

```txt {2-3}
User-agent: *
Disallow: /my-project
Disallow: /my-project/
```

:::note

We have configured the Algolia Crawler to crawl the whole website (while ignoring the links in `robots.txt`) every Wednesday and Sunday at 12:00 AM UTC.  
So if you add new content to your project's documentation, it will be searchable on the next Wednesday or Sunday.

You may request a manual crawl by contacting us on our [Discord server](https://discord.tonantzintla.org).

_This is subject to change. As we're open to increase the frequency of crawling._

:::

## Custom components

If you know what you're doing, you may create custom MDX components to use in your project's documentation. Please make the appropriate folders in the `src/` folder and add the components there.

:::caution

We check if the custom components are safe to use. If we find any malicious code in the custom components, we will remove the custom components and blacklist you from our documentation.

:::
