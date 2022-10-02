import { Player } from "mojang-minecraft"
import { initSetting } from "./_init"

/**
 * @param {Player} player 
*/
export const getSetting = (player, type, identifier) => {
    try {
        if (player.getDynamicProperty(`${type}:${identifier}`) === undefined)
            return initSetting(player, type, identifier)

        return player.getDynamicProperty(`${type}:${identifier}`)
    } catch (e) { console.warn(e); return false; }
}