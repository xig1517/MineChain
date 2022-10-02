import { Player, world } from "mojang-minecraft";
import { ModalFormData } from "mojang-minecraft-ui"
import { lastPage } from "./_handler.js";

const pageId = 'server';

const getProp = (propName) => {
    try { return world.getDynamicProperty(`server:${propName}`); } catch (e) { console.warn(e) }
}
const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

const createPage =
    new ModalFormData()
        .title('Server')
        .toggle('Whether enable this plugin?', getProp('enable'));

const settingMenu = [
    'enable'
]

/**
 * @param {Player} player 
 */
export const server = (player) => {
    createPage.show(player).then(result => {
        for (let i = 0; i < settingMenu.length; i++)
            try { world.setDynamicProperty(`server:${settingMenu[i]}`, result.formValues[i]); } catch (e) { toPlayer(player, e) }

        toPlayer(player, 'Saved.');
        return lastPage(player, pageId);
    })
}