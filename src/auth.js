// src/auth.js

function validateUser(username, password) {
  // Simulate a database call
  if (username === "admin" && password === "password") {
    return true;
  }
  return false;
}

function getUserPermissions(username) {
  // Simulate fetching user permissions
  if (username === "admin") {
    return ["read", "write", "delete"];
  }
  return ["read"];
}

function login(username, password) {
  if (validateUser(username, password)) {
    const permissions = getUserPermissions(username);
    return { username, permissions };
  } else {
    throw new Error("Invalid credentials");
  }
}

module.exports = { login, validateUser, getUserPermissions };
