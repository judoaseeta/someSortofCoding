import { EventEmitter } from "events";

class Counter extends EventEmitter {
    count = 0;
    private static instance: Counter;
    constructor(initNum: number = 0) {
        super();
        this.count = initNum;
        this.addListener('increment', (ar) => {
            this.count += ar;
            console.log(this.count);
        })
        this.on('sitka', () => {
            console.log('sitka!');
        })
    }

    public increment() {
        this.emit('increment', 1);
    }
    public trigger() {
        this.emit('sitka');
    }
}
