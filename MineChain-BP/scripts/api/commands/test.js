import { world } from "mojang-minecraft"

const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

export const test = (sender, args) => {
    for (const player of world.getPlayers())
        try { toPlayer(player, world.getDynamicProperty('server:enable')); } catch (e) { toPlayer(player, e) }
}