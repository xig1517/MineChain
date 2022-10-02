import { MinecraftItemTypes } from "mojang-minecraft";

export const ores = [
    {
        ore_block: [
            'minecraft:coal_ore',
            'minecraft:deepslate_coal_ore',
        ],
        level: 0,
        drop: MinecraftItemTypes.coal,
        amount: [1, 1],
        exp: [0, 2]
    },
    {
        ore_block: [
            'minecraft:quartz_ore',
        ],
        level: 0,
        drop: MinecraftItemTypes.quartz,
        amount: [1, 1],
        exp: [2, 5]
    },
    {
        ore_block: [
            'minecraft:nether_gold_ore',
        ],
        level: 0,
        drop: MinecraftItemTypes.goldNugget,
        amount: [2, 6],
        exp: [0, 0]
    },

    {
        ore_block: [
            'minecraft:iron_ore',
            'minecraft:deepslate_iron_ore',
        ],
        level: 1,
        drop: MinecraftItemTypes.rawIron,
        amount: [1, 1],
        exp: [0, 0]
    },
    {
        ore_block: [
            'minecraft:copper_ore',
            'minecraft:deepslate_copper_ore',
        ],
        level: 1,
        drop: MinecraftItemTypes.rawCopper,
        amount: [2, 5],
        exp: [0, 0]
    },
    {
        ore_block: [
            'minecraft:lapis_ore',
            'minecraft:deepslate_lapis_ore',
        ],
        level: 1,
        drop: MinecraftItemTypes.lapisLazuli,
        amount: [4, 9],
        exp: [2, 5]
    },

    {
        ore_block: [
            'minecraft:gold_ore',
            'minecraft:deepslate_gold_ore',
        ],
        level: 2,
        drop: MinecraftItemTypes.rawGold,
        amount: [1, 1],
        exp: [0, 0]
    },
    {
        ore_block: [
            'minecraft:emerald_ore',
            'minecraft:deepslate_emerald_ore',
        ],
        level: 2,
        drop: MinecraftItemTypes.emerald,
        amount: [1, 1],
        exp: [3, 7]
    },
    {
        ore_block: [
            'minecraft:diamond_ore',
            'minecraft:deepslate_diamond_ore',
        ],
        level: 2,
        drop: MinecraftItemTypes.diamond,
        amount: [1, 1],
        exp: [3, 7]
    },
    {
        ore_block: [
            'minecraft:redstone_ore',
            'minecraft:deepslate_redstone_ore',
            'minecraft:lit_redstone_ore',
            'minecraft:lit_deepslate_redstone_ore',
        ],
        level: 2,
        drop: MinecraftItemTypes.redstone,
        amount: [4, 5],
        exp: [1, 5]
    },
]