---
title: Elements
sidebar_position: 1
image: /img/arrayfield/arrayfieldbg.jpg
description: How to create interactive elements
---

# Adding interactive elements

If you find any bugs you can contact Arrays by Joining the discord server ([discord.gg/sirius](https://discord.gg/sirius)) and head to the forum called ArrayField.

- Suggest things to add!
- You can help me fix bugs!
- and you can help me optimizing the script!
- You can be credited on the website.

## Notifying the user

```lua title="A new notification system is coming soon"
ArrayField:Notify({
   Title = "Notification Title",
   Content = "Notification Content",
   Duration = 6.5,
   Image = 4483362458,
   Actions = { -- Notification Buttons
      Ignore = {
         Name = "Okay!",
         Callback = function()
         print("The user tapped Okay!")
      end
   },
 },
})
```

## Creating a Button

```lua
local Button = Tab:CreateButton({
   Name = "Button Example",
   Interact = 'Click',
   Callback = function()
   -- The function that takes place when the button is pressed
   end,
})
```

### Updating a Button

```lua
Button:Set("Button Example","Interact")
```

## Creating a Toggle

```lua
local Toggle = Tab:CreateToggle({
   Name = "Toggle Example",
   CurrentValue = false,
   Flag = "Toggle1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the toggle is pressed
   -- The variable (Value) is a boolean on whether the toggle is true or false
   end,
})
```

### Updating a Toggle

```lua
Toggle:Set(false)
```

## Creating a Color Picker

```lua
local ColorPicker = Tab:CreateColorPicker({
    Name = "Color Picker",
    Color = Color3.fromRGB(255,255,255),
    Flag = "ColorPicker1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
    Callback = function(Value)
        -- The function that takes place every time the color picker is moved/changed
        -- The variable (Value) is a Color3fromRGB value based on which color is selected
    end
})
```

### Updating a Color Picker

```lua
ColorPicker:Set(Color3.fromRGB(255,255,255))
```

## Creating a Slider

```lua
local Slider = Tab:CreateSlider({
   Name = "Slider Example",
   Range = {0, 100},
   Increment = 10,
   Suffix = "Bananas",
   CurrentValue = 10,
   Flag = "Slider1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Value)
   -- The function that takes place when the slider changes
   -- The variable (Value) is a number which correlates to the value the slider is currently at
   end,
})
```

### Updating a Slider

```lua
Slider:Set(10) -- The new slider integer value
```

## Creating an Adaptive Input (TextBox)

```lua
local Input = Tab:CreateInput({
   Name = "Input Example",
   PlaceholderText = "Input Placeholder",
   NumbersOnly = true, -- If the user can only type numbers. Remove or set to false if none.
   CharacterLimit = 15, --max character limit. Remove or set to false
   OnEnter = true, -- Will callback only if the user pressed ENTER while being focused on the the box.
   RemoveTextAfterFocusLost = false, -- Speaks for itself.
   Callback = function(Text)
   -- The function that takes place when the input is changed
   -- The variable (Text) is a string for the value in the text box
   end,
})
```

## Creating a Dropdown menu

```lua
local Dropdown = Tab:CreateDropdown({
   Name = "Dropdown Example",
   Options = {"Option 1","Option 2"},
   CurrentOption = "Option 1" or {"Option 1","Option 3"},
   MultiSelection = true, -- If MultiSelections is allowed
   Flag = "Dropdown1", -- A flag is the identifier for the configuration file, make sure every element has a different flag if you're using configuration saving to ensure no overlaps
   Callback = function(Option)
   -- The function that takes place when the selected option is changed
   -- The variable (Option) is a string for the value that the dropdown was changed to
   end,
})
```

### Updating a Dropdown

```lua
Dropdown:Set("Option 2" or <table>) -- The new option value

Dropdown:Refresh({<table>},<selecteds>)

Dropdown:Add('test')
Dropdown:Remove('test')
```

## General Settings

`For every element you can add these. (Optional)`

```lua
local ElementExample
ElementExample = Tab:Create______({

Info = {
   Image = '1234567890',
   Text = 'Description for the prompt'
},
SectionParent = Section -- Section it's parented to

})
```

## Updating an existing element

```lua
Element:Destroy() -- Destroy

Element:Visible(<bool>)

Element:Lock(Reason:<string>) -- Lock
Element:Unlock()  -- Unlock
```

## Check the value of an existing element

To check the current value of an existing element, using the variable, you can do `ElementName.CurrentValue`, if it's a keybind or dropdown, you will need to use `KeybindName.CurrentKeybind` or `DropdownName.CurrentOption`
You can also check it via the flags from You can also check it via the flags from `ArrayField.Flags`
