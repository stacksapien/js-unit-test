// tests/user.test.js

const getUser = require("../src/user");

describe("User Module", () => {
  test("returns the correct user object", () => {
    const user = getUser();
    expect(user).toMatchSnapshot();
  });
});
