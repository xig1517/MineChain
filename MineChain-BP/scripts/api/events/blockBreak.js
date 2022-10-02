import { world } from "mojang-minecraft"

import { buffer } from "../core/buffer.js"
import { getSetting } from "../setting/_get.js"
import * as scheduler from "../scheduler/scheduler.js";
import { detectToolLevel } from "../core/functions.js";

const isOre = (blockId) => [
    'minecraft:coal_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:quartz_ore',
    'minecraft:nether_gold_ore',

    'minecraft:iron_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:copper_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:lapis_ore',
    'minecraft:deepslate_lapis_ore',

    'minecraft:gold_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:emerald_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:diamond_ore',
    'minecraft:deepslate_diamond_ore',
    'minecraft:redstone_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:lit_redstone_ore',
    'minecraft:lit_deepslate_redstone_ore'

].includes(blockId)

export const blockBreak = () => {

    world.events.blockBreak.subscribe(ev => {
        const brokenBlockId = ev.brokenBlockPermutation.type.id;
        if (!isOre(brokenBlockId)) return;

        const player = ev.player;

        if (getSetting(player, 'common', 'isSneaking'))
            if (!player.isSneaking) return;

        if (!world.getDynamicProperty('server:enable'))
            return;

        const handItem = player.getComponent('inventory').container.getItem(player.selectedSlot);

        if (!detectToolLevel(handItem, ev.brokenBlockPermutation)) return;

        scheduler.addTask(1, new buffer(ev.block.location, ev.dimension, ev.brokenBlockPermutation, handItem), 10);
    })

}