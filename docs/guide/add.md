---
title: Adding documentation
sidebar_position: 2
description: Adding your project's documentation to the site
---

You've set up your project's documentation in the [previous step](/guide). Now, you need to add your project's documentation to the site.

## Adding content

First create a homepage for your project's documentation. Create a file called `index.md` in the folder you created for your project's documentation. For example, if your project is called `my-project`, you should create a file called `index.md` in the folder `src/pages/community/my-project/`.

That's it! You can now add content to your project's documentation. To learn what kinds of features you can use, check out the [Docusaurus documentation](https://docusaurus.io/docs/markdown-features).  
You can also use other project documentations as reference. For example, check out Rayfield's files to understand how you can format and layout your documentation.

### Adding images to your documentation

If you want to add images to your documentation, you can create a folder in `static/img/` with the same name as you used for your project's documentation folder. For example, if your project is called `my-project`, you should create a folder called `static/img/my-project/`. Then, you can add images to this folder and use them in your documentation.

In this folder, you may structure your images however you want. For example, you can create a folder called `static/img/my-project/png/` and add all your PNG images to this folder, or you can create a folder called `static/img/my-project/jpg/` and add all your JPG images to this folder.
Whatever is easiest for you.

#### Adding other assets to your documentation

If you want to add anything other than images to your documentation, you can create a folder in `static/` with the name of the type of asset you want to add. For example, if you want to add a video file, you can create a folder called `static/video/`. Then, you make another folder inside this folder with the same name as your project's documentation folder. For example, if your project is called `my-project`, you should create a folder called `static/video/my-project/`. You can add your video file to this folder and use it in your documentation.
