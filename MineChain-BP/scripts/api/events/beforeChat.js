import { world } from "mojang-minecraft";
import { commandHandler } from "../commands/_handler";

const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

export const beforeChat = () => {

    world.events.beforeChat.subscribe(ev => {
        const [sender, message] = [ev.sender, ev.message];

        if (!message.startsWith('!')) return;

        ev.cancel = true;
        try { commandHandler(sender, message) }
        catch (e) { toPlayer(sender, e); }
    })

}