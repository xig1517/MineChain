import { world } from "mojang-minecraft"
import { setListener } from "../ui/_listener"

export const entityHit = () => {
    world.events.entityHit.subscribe(ev => {
        setListener(ev.entity);
    })
}