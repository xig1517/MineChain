import { Player } from "mojang-minecraft"
import { settingList } from "./_list"

/**
 * @param {Player} player 
 */
export const initSetting = (player, type, identifier) => {
    player.setDynamicProperty(`${type}:${identifier}`, settingList[type][identifier].initValue)
    return settingList[type][identifier].initValue;
}