// const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// myEmitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`);
// });

// myEmitter.on("exit", () => {
//     console.log("Exit event triggered");
// });

// myEmitter.emit("greet", "student");
// myEmitter.emit("exit");

// const EventEmitter = require("events");
// const button = new EventEmitter();
// button.on("click", () => {
//     console.log("Button was clicked!");
// });
// button.on("mouseover", () => {
//     console.log("Mouse is over the button!");
// });
// button.on("click", () => {
//     console.log("Performing another click action...");
// });
// console.log("Simulating click...");
// button.emit("click");
// console.log("Simulating mouseover...");
// button.emit("mouseover");

console.log("1. Program started");
setTimeout(() => {
    console.log("2. setTimeout executed");
}, 4000);
setImmediate(() => {
    console.log("3. setImmediate executed");
});
process.nextTick(() => {
    console.log("4. Process nextTick executed");
});
console.log("5. Finished");