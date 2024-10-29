// src/counter.js

let counter = 0;

function increment() {
  counter++;
  return counter;
}

function reset() {
  counter = 0;
}

module.exports = { increment, reset };
