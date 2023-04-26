---
title: Game Functions
sidebar_position: 1
image: /img/sense/SenseBanner.png
description: How to create game specific functions
---

These are our game specific functions, you're required to modify these for games that use custom replication systems such as Phantom Forces.

```lua
function EspInterface.getWeapon(player)
    return "Unknown";
end

function EspInterface.isFriendly(player)
    return player.Team and player.Team == localPlayer.Team;
end

function EspInterface.getTeamColor(player)
    return player.Team and player.Team.TeamColor and player.Team.TeamColor.Color;
end

function EspInterface.getCharacter(player)
    return player.Character;
end

function EspInterface.getHealth(player)
    local character = player and EspInterface.getCharacter(player);
    local humanoid = character and findFirstChildOfClass(character, "Humanoid");
    if humanoid then
        return humanoid.Health, humanoid.MaxHealth;
    end
    return 100, 100;
end
```
