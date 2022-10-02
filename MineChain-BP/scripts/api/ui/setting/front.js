import { ActionFormData } from "mojang-minecraft-ui"

import { server } from "./server.js";
import { common } from "./common.js";

const pageId = 'front';

const form = new ActionFormData()
    .title('Setting')
    .button('server')
    .button('common')
    .button('exit')

export const frontPage = (player) => {

    form.show(player).then(result => {
        if (result.isCanceled || result.selection === 1) return;
        [server, common][result.selection](player);
    })

}


