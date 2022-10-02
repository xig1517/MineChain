import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "mojang-minecraft"
import { settingList } from "../setting/_list";

export const worldInitialize = () => {

    world.events.worldInitialize.subscribe(ev => {

        const register = (registerType, type, identifier, dataType) => {
            const definition = new DynamicPropertiesDefinition();
            switch (dataType) {
                case 'string': definition.defineString(`${type}:${identifier}`, 128); break;
                case 'number': definition.defineNumber(`${type}:${identifier}`); break;
                case 'boolean': definition.defineBoolean(`${type}:${identifier}`); break;
            }
            registerType === 'world'
                ? ev.propertyRegistry.registerWorldDynamicProperties(definition)
                : ev.propertyRegistry.registerEntityTypeDynamicProperties(definition, MinecraftEntityTypes[registerType]);
        }

        const initWorldProp = () => {
            const worldDefaultProp = {
                server: {
                    'enable': true,
                }
            }
            for (const type in worldDefaultProp)
                for (const [identifier, value] of Object.entries(worldDefaultProp[type]))
                    if (world.getDynamicProperty(`${type}:${identifier}`) === undefined) world.setDynamicProperty(`${type}:${identifier}`, value);
        }

        for (const type in settingList)
            for (const [identifier, info] of Object.entries(settingList[type]))
                register('player', type, identifier, info.type);

        try { world.getDynamicProperty(`server:enable`); } catch { register('world', 'server', 'enable', 'boolean'); }

        initWorldProp();
    })

}