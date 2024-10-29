// tests/counter.test.js

const { increment, reset } = require("../src/counter");

describe("Counter Module", () => {
  beforeAll(() => {
    console.log("Starting Counter Module Tests");
  });

  afterAll(() => {
    console.log("Completed Counter Module Tests");
  });

  beforeEach(() => {
    reset();
  });

  test("counter starts at zero", () => {
    expect(increment()).toBe(1);
  });

  test("counter increments correctly", () => {
    increment();
    expect(increment()).toBe(2);
  });

  test("counter is reset before each test", () => {
    expect(increment()).toBe(1);
  });
});
