// tests/auth.test.js

const auth = require("../src/auth");

describe("Auth Module", () => {
  // Mock the validateUser and getUserPermissions functions
  beforeEach(() => {
    jest.spyOn(auth, "validateUser");
    jest.spyOn(auth, "getUserPermissions");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("login succeeds with valid credentials", () => {
    // Mock validateUser to return true regardless of input
    auth.validateUser.mockReturnValue(true);
    auth.getUserPermissions.mockReturnValue(["read", "write", "delete"]);

    const result = auth.login("admin", "password");
    expect(result).toEqual({
      username: "admin",
      permissions: ["read", "write", "delete"],
    });
  });

  test("login fails with invalid credentials", () => {
    // Mock validateUser to return false
    auth.validateUser.mockReturnValue(false);

    expect(() => auth.login("anyUser", "anyPassword")).toThrow(
      "Invalid credentials"
    );
  });
});
