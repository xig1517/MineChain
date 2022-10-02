import * as func from "./functions.js";
import * as scheduler from "../scheduler/scheduler.js"
import { BlockLocation, ItemStack, BlockPermutation, Dimension, world, MinecraftBlockTypes } from "mojang-minecraft";

class buffer {

    /**
    * 
    * @param {BlockLocation} blockLocation 
    * @param {Dimension} dimension 
    * @param {BlockPermutation} blockPermutation 
    * @param {ItemStack} tool 
    */
    constructor(blockLocation, dimension, blockPermutation, tool) {
        this.dimension = dimension;
        this.blockLoc = blockLocation;
        this.blockPer = blockPermutation;
        this.tool = tool;
    }

    run() {
        const enchantLevel = func.getEnchantment(this.tool);
        const [silkTouch, fortuneLevel] = [enchantLevel[0] === 1 ? true : false, enchantLevel[1]];

        if (silkTouch) return true;

        const coords = func.findNearOre(this.dimension, this.blockLoc, this.blockPer);
        if (!coords) return true;

        const oreInfo = func.searchIndex(this.blockPer);
        const dropItem = oreInfo.drop;

        for (const location of coords) {
            const dropAmount = func.fortune(fortuneLevel, Math.floor(Math.random() * (oreInfo.amount[1] - oreInfo.amount[0] + 1)) + oreInfo.amount[0]);
            const dropExp = Math.floor(Math.random() * (oreInfo.exp[1] - oreInfo.exp[0] + 1)) + oreInfo.exp[0];

            this.dimension.getBlock(location).setType(MinecraftBlockTypes.air)
            this.dimension.spawnItem(new ItemStack(dropItem, dropAmount), location)
            for (let i = 0; i < dropExp; i++) this.dimension.spawnEntity('minecraft:xp_orb', location);

            scheduler.addTask(1, new buffer(location, this.dimension, this.blockPer, this.tool), 10);
        }
        return true;
    }
}
export { buffer };