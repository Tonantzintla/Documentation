---
title: Instance ESP
sidebar_position: 1
image: /img/sense/SenseBanner.png
description: How to create an ESP object for instances
---

You can create an ESP object for instances by doing to following:

```lua
local object = Sense.AddInstance(workspace.Part, {
    --enabled = false,
    text = "{name}", -- Placeholders: {name}, {distance}, {position}
    textColor = { Color3.new(1,1,1), 1 },
    textOutline = true,
    textOutlineColor = Color3.new(),
    textSize = 13,
    textFont = 2,
    limitDistance = false,
    maxDistance = 150
})

object.options.enabled = false
```
