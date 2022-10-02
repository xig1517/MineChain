import { frontPage } from "./setting/front";

export const setListener = (player) => {
    if (!player.hasTag('openSetting')) return;
    frontPage(player)
    player.removeTag('openSetting')
    return true;
}   