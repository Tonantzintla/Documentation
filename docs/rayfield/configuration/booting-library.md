---
title: Booting the Library
sidebar_position: 2
image: /img/rayfield/rayfield.png
description: How to boot the Rayfield Library
---

## Loading the Rayfield Library

```lua
local Rayfield = loadstring(game:HttpGet('https://sirius.menu/rayfield'))()
```

### Secure Mode

:::caution Warning
If the game you're trying to run Rayfield Interface Suite on, is detecting or crashing when you use Rayfield Interface Suite, try using Secure Mode:

- Place `getgenv().SecureMode = true` above the initial Rayfield loadstring

:::
Rayfield will now use Secure Mode and attempt to reduce detection
:::note

This may cause some elements of the UI to look lower quality or may increase loading times slightly

:::

### Enabling Configuration Saving

:::tip

1. Enable ConfigurationSaving in the CreateWindow function
2. Choose an appropiate FileName in the CreateWindow function
3. Choose an unique flag identifier for each supported element you create
4. Place `Rayfield:LoadConfiguration()` at the bottom of all your code

:::
Rayfield will now automatically save and load your configuration
