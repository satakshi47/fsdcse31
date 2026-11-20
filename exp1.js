// console.log("1.program started")

// setTimeout(() => {
//     console.log("2.setTimeout executed")
// }, 4000);

// setImmediate(() => {
//     console.log("3.setImmediate executed")
// });

// process.nextTick(() => {
//     console.log("4.Process nextTick executed")
// });

// console.log("5.finished");

// const EventEmitter = require("events");

// class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();

// // Listener for greet event
// myEmitter.on("greet", (name) => {
//     console.log(`Hello, ${name}!`);
// });

// // Listener for exit event
// myEmitter.on("exit", () => {
//     console.log("Exit event triggered.");
// });

// // Trigger events
// myEmitter.emit("greet", "Student");
// myEmitter.emit("exit");


const EventEmitter = require("events");

const button = new EventEmitter();

// Click event listener
button.on("click", () => {
    console.log("Button was clicked!");
});

// Mouseover event listener
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// Another click event listener
button.on("click", () => {
    console.log("Performing another click action...");
});

// Simulate events
console.log("Simulating click...");
button.emit("click");

console.log("Simulating mouseover...");
button.emit("mouseover");