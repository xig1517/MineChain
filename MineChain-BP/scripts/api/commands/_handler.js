/*------------------------[command]----------------------- */
import { help } from './help.js';
import { setting } from './setting.js';
import { test } from './test.js';
/*-------------------------------------------------------- */

const commands = { // 指令集
    'setting': setting,
    'help': help,
    'test': test
}

export const commandHandler = (sender, message) => {

    const args = message.split(/\s+/); // 切割空格
    if (args[0] !== '!mc') throw `Get MineChain help: !mc help`;

    args.shift();
    const cmd = args[0];// 取得指令名
    if (cmd === undefined) throw `Please type a command behind !mc`
    if (!(cmd in commands)) throw `Cannot find command: ${cmd}`;

    commands[cmd](sender, args);
}