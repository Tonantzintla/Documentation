---
title: Windows
sidebar_position: 3
image: /img/arrayfield/arrayfieldb.jpg
description: How to create a window
---

# Windows in ArrayField

## Creating a Window

```lua
local Window = ArrayField:CreateWindow({
   Name = "ArrayField Example Window",
   LoadingTitle = "ArrayField Interface Suite",
   LoadingSubtitle = "by Arrays",
   ConfigurationSaving = {
      Enabled = true,
      FolderName = nil, -- Create a custom folder for your hub/game
      FileName = "ArrayField"
   },
   Discord = {
      Enabled = false,
      Invite = "noinvitelink", -- The Discord invite code, do not include discord.gg/. E.g. discord.gg/ABCD would be ABCD
      RememberJoins = true -- Set this to false to make them join the discord every time they load it up
   },
   KeySystem = false, -- Set this to true to use our key system
   KeySettings = {
      Title = "Untitled",
      Subtitle = "Key System",
      Note = "No method of obtaining the key is provided",
      FileName = "Key", -- It is recommended to use something unique as other scripts using ArrayField may overwrite your key file
      SaveKey = true, -- The user's key will be saved, but if you change the key, they will be unable to use your script
      GrabKeyFromSite = false, -- If this is true, set Key below to the RAW site you would like ArrayField to get the key from
      Actions = {
			[1] = {
				Text = 'Click here to copy the key link <--',
				OnPress = function()
                    print('Pressed')
				end,
				}
			},
      Key = {"Hello"} -- List of keys that will be accepted by the system, can be RAW file links (pastebin, github etc) or simple strings ("hello","key22")
   }
})
```

## Prompting the Window

```lua
Window:Prompt({
	Title = 'Interface Prompt',
	SubTitle = 'SubTitle',
	Content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	Actions = {
		Accept = {
			Name = 'Accept',
			Callback = function()
				print('Pressed')
			end,
		}
	}
})
```

:::note
This is subject to change due to being buggy and having a bad design.
:::

## Creating a Tab

```lua
local Tab = Window:CreateTab("Tab Example", 4483362458) -- Title, Image
```

## Creating a Section

```lua
local Section = Tab:CreateSection("Section Example",false) -- The 2nd argument is to tell if its only a Title and doesnt contain element
```

### Updating a Section

```lua
Section:Set("Section Example")

-- Coming soon
Section:Destroy()
Section:Lock()
Section:Unlock()
```

## Destroying the Interface

```lua
ArrayField:Destroy()
```
