import { ItemStack, MinecraftEnchantmentTypes, BlockPermutation, BlockLocation, Dimension, MinecraftBlockTypes } from "mojang-minecraft"

import { ores } from "../list/oreList";

/**
 * @param {BlockPermutation} blockPer 
 */
const searchIndex = (blockPer) => {
    for (const oreObjects of ores)
        for (const name of oreObjects.ore_block)
            if (name === blockPer.type.id) return oreObjects;
}

/**
 * @param {ItemStack} tool 
 * @param {BlockPermutation} brokenBlockPer
 */
const detectToolLevel = (tool, brokenBlockPer) => {
    const toolList = {
        level0: [
            'minecraft:golden_pickaxe',
            'minecraft:wooden_pickaxe',
            'minecraft:stone_pickaxe',
            'minecraft:iron_pickaxe',
            'minecraft:diamond_pickaxe',
            'minecraft:netherite_pickaxe'
        ],
        level1: [
            'minecraft:stone_pickaxe',
            'minecraft:iron_pickaxe',
            'minecraft:diamond_pickaxe',
            'minecraft:netherite_pickaxe'
        ],
        level2: [
            'minecraft:iron_pickaxe',
            'minecraft:diamond_pickaxe',
            'minecraft:netherite_pickaxe'
        ]
    }
    if (tool === undefined) return false;
    return toolList[`level${searchIndex(brokenBlockPer).level}`].includes(tool.id);
}

/**
 * @param {ItemStack} tool
 */
const getEnchantment = (tool) => {
    const ench_list = tool.getComponent('minecraft:enchantments').enchantments;
    return [ench_list.hasEnchantment(MinecraftEnchantmentTypes.silkTouch), ench_list.hasEnchantment(MinecraftEnchantmentTypes.fortune)]
}

/**
 * @param {Dimension} dimension
 * @param {BlockLocation} lastLocation 
 * @param {BlockPermutation} blockPer 
 */
const findNearOre = (dimension, lastLocation, blockPer) => {
    let coords = [];
    const locations = [
        lastLocation.offset(1, 0, 0),
        lastLocation.offset(-1, 0, 0),
        lastLocation.offset(0, 1, 0),
        lastLocation.offset(0, -1, 0),
        lastLocation.offset(0, 0, 1),
        lastLocation.offset(0, 0, -1)
    ]
    for (const location of locations)
        if (dimension.getBlock(location).type.id === blockPer.type.id)
            coords.push(location);

    if (coords.length === 0) return false;
    return coords;
}

const fortune = (fortuneLevel) => {
    const r = Math.random();
    let time = 1;
    switch (fortuneLevel) {
        case 0: default: time = 1; break;
        case 1:
            if (r > 0.66) time = 2;
            break;
        case 2:
            if (r > 0.5 && r <= 0.75) time = 2;
            else if (r > 0.75) time = 3;
            break;
        case 3:
            if (r > 0.4 && r <= 0.6) time = 2;
            else if (r > 0.6 && r <= 0.8) time = 3;
            else if (r > 0.8) time = 4;
            break;
    }
    return time;
}
export { searchIndex, detectToolLevel, getEnchantment, findNearOre, fortune }
