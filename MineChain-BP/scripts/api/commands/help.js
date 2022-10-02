const toPlayer = (player, message) => player.runCommand(`tellraw @s {"rawtext":[{"text":"${message}"}]}`)

const helpMessage =
    [
        '> -- AutoSwitch --',
        '> !as help --- Get help about AutoSwitch',
        '> !as setting --- Open setting page',
        '> ---',
    ]

export const help = (sender, args) => helpMessage.forEach(msg => toPlayer(sender, msg))
