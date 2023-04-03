---
title: Booting the Library
sidebar_position: 2
---

Loading the Sense ESP Library

```lua
-- 1. Load the library
local Sense = loadstring(game:HttpGet('https://raw.githubusercontent.com/shlexware/Sirius/request/library/sense/source.lua'))()

-- 2. Change the configuration.
Sense.teamSettings.enemy.enabled = true
Sense.teamSettings.enemy.box = true
Sense.teamSettings.enemy.boxColor[1] = Color3.new(0, 0.25, 0.75)

-- 3. Load the esp. It doesn't really matter where you put this, but it's recommended you put it at the end of your script.
Sense.Load()

-- 4. Unload the esp. When you unload Sense, it will clean up every drawing object and instance it has made.
--Sense.Unload()
```
