import { Player } from "mojang-minecraft";
import { ModalFormData } from "mojang-minecraft-ui"
import { lastPage } from "./_handler.js";

const pageId = 'common';

const getProp = (player, propName) => player.getDynamicProperty(`common:${propName}`);
const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

const createPage = (player) =>
    new ModalFormData()
        .title('Common')
        .toggle('Only enable when player sneaking?', getProp(player, 'isSneaking'))


const settingMenu = [
    'isSneaking'
]

/**
 * @param {Player} player 
 */
export const common = (player) => {
    const form = createPage(player);
    form.show(player).then(result => {
        for (let i = 0; i < settingMenu.length; i++)
            try { player.setDynamicProperty(`common:${settingMenu[i]}`, result.formValues[i]); } catch (e) { console.warn(e) }

        toPlayer(player, 'Successed.');
        return lastPage(player, pageId)
    })
}