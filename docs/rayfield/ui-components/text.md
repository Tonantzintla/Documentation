---
title: Textual elements
sidebar_position: 1
image: /img/rayfield/rayfield.png
description: How to create textual elements
---

# Textual elements in Rayfield

## Creating a Label

```lua
local Label = Tab:CreateLabel("Label Example")
```

### Updating a Label

```lua
Label:Set("Label Example")
```

## Creating a Paragraph

```lua
local Paragraph = Tab:CreateParagraph({Title = "Paragraph Example", Content = "Paragraph Example"})
```

### Updating a Paragraph

```lua
Paragraph:Set({Title = "Paragraph Example", Content = "Paragraph Example"})
```
