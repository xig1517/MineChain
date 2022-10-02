import { world } from "mojang-minecraft";

let tasks = [];

const startTicking = () => {
    const tick = world.events.tick.subscribe(ev => {
        let index_serial = 0;
        for (const task of tasks) {
            if (task.begin_tick === -1) task.begin_tick = ev.currentTick;
            switch (task.type) {
                case 0: // repeating
                    if ((ev.currentTick - task.begin_tick) % task.counter === 0) task.class.run();
                    break;
                case 1: // delay
                    if (task.counter <= 0) {
                        if (task.class.run())
                            removeTask(index_serial);
                        break;
                    }
                    task.counter--;
                    break;
                case 2: // delay-repeating
                    // counter: delay
                    // counter2: repeating
                    if (task.counter <= 0) {
                        if ((ev.currentTick - task.begin_tick) % task.counter2 === 0) task.class.run();
                        break;
                    }
                    task.counter--;
                    break;
                default:
                    removeTask(index_serial);
            }
            index_serial++;
        }
        if (tasks.length === 0) stopTicking(tick);
    })
}

const stopTicking = (tick) => world.events.tick.unsubscribe(tick);

const addTask = (type, bufferClass, counter, counter2 = -1) => {
    tasks.push({
        'type': type,
        'class': bufferClass,
        'begin_tick': -1,
        'counter': counter,
        'counter2': counter2
    })
    startTicking();
}

const removeTask = (index) => tasks.splice(index, 1);

export { addTask }