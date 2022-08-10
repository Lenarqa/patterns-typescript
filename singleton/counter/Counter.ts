export class Counter {
    static instance:Counter = new Counter();
    private _count: number = 0;

    constructor() {
        if(typeof(Counter.instance) === "object") {
            return Counter.instance;
        }else {
            this._count = 0;
            Counter.instance = this;
            return new Counter();
        }
    }

    get count():number {
        return this._count;
    }

    public increaseCounter() {
        this._count += 1;
    }
} 