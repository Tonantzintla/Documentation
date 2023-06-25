---
title: Booting the Library
sidebar_position: 2
image: /img/arrayfield/arrayfieldbg.jpg
description: How to boot the ArrayField Library
---

## Loading the ArrayField Library

```lua
local ArrayField = loadstring(game:HttpGet('https://raw.githubusercontent.com/UI-Interface/ArrayField/main/Source.lua'))()
```

### Secure Mode

:::caution Warning
If the game you're trying to run ArrayField Interface Suite on, is detecting or crashing when you use ArrayField Interface Suite, try using Secure Mode:

- Place `getgenv().SecureMode = true` above the initial ArrayField loadstring

:::
ArrayField will now use Secure Mode and attempt to reduce detection
:::note

This may cause some elements of the UI to look lower quality or may increase loading times slightly

:::

### Enabling Configuration Saving

:::tip

1. Enable ConfigurationSaving in the CreateWindow function
2. Choose an appropiate FileName in the CreateWindow function
3. Choose an unique flag identifier for each supported element you create
4. Place `ArrayField:LoadConfiguration()` at the bottom of all your code

:::
ArrayField will now also automatically save and load your configuration
