import { worldInitialize } from "./worldInitialize.js";
import { beforeChat } from "./beforeChat.js";
import { blockBreak } from "./blockBreak.js";
import { entityHit } from "./entityhit.js";

const events = [
    worldInitialize,
    beforeChat,
    blockBreak,
    entityHit
]

export const eventHandler = () => events.forEach(event => event());
