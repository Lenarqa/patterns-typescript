import { Counter } from "./counter/Counter";
import { increaseCounter4times } from "./testInAnotherFile";

increaseCounter4times();

let counter1: Counter = new Counter();
counter1.increaseCounter();

console.log(`it will be 5 = ${counter1.count}`);