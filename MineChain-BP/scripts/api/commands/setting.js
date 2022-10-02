const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

export const setting = (sender, args) => {
    sender.addTag('openSetting');
    toPlayer(sender, 'Touch anywhere to open the setting menu')
}