import { Counter } from "./counter/Counter";

let counter1: Counter = new Counter();
let counter2: Counter = new Counter();

counter1.increaseCounter();
counter1.increaseCounter();
counter2.increaseCounter();
counter2.increaseCounter();

console.log(`Count from counter1 = ${counter1.count}`);
console.log(`Count from counter2 = ${counter2.count}`);