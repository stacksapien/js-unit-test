# JS-UNIT-TEST

A comprehensive demo project to showcase various **Jest** functionalities and unit test cases in a Node.js environment. This project includes examples of:

- Basic assertions and matchers
- Testing asynchronous code
- Mock functions and modules
- Mocking function outputs
- Testing exceptions
- Snapshot testing
- Setup and teardown methods (`beforeEach`, `afterEach`, etc.)

---

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Scripts](#scripts)
- [Modules Overview](#modules-overview)
  - [1. Calculator Module](#1-calculator-module)
  - [2. Fetch Data Module](#2-fetch-data-module)
  - [3. User Module](#3-user-module)
  - [4. Counter Module](#4-counter-module)
  - [5. Auth Module](#5-auth-module)
- [Testing Overview](#testing-overview)
  - [1. Testing the Calculator Module](#1-testing-the-calculator-module)
  - [2. Testing Asynchronous Code](#2-testing-asynchronous-code)
  - [3. Snapshot Testing](#3-snapshot-testing)
  - [4. Setup and Teardown](#4-setup-and-teardown)
  - [5. Mocking Function Outputs](#5-mocking-function-outputs)
- [Running the Tests](#running-the-tests)
- [Additional Resources](#additional-resources)
- [License](#license)

---

## Project Structure

```
jest-demo/
├── package.json
├── jest.config.js
├── src/
│ ├── calculator.js
│ ├── fetchData.js
│ ├── user.js
│ ├── counter.js
│ └── auth.js
└── tests/
├── calculator.test.js
├── fetchData.test.js
├── user.test.js
├── counter.test.js
└── auth.test.js
```

---

## Getting Started

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** (v6 or higher)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/jest-demo.git
cd jest-demo
npm install
```

---

## Scripts

- **Run Tests**

  ```bash
  npm test
  ```

- **Run Tests with Coverage**

  ```bash
  npm run test:coverage
  ```

---

## Modules Overview

### 1. Calculator Module

Provides basic arithmetic functions: `add`, `subtract`, `multiply`, `divide`, and `power`.

### 2. Fetch Data Module

An asynchronous function that fetches data from an API using Axios.

### 3. User Module

A function that returns a user object, used for snapshot testing.

### 4. Counter Module

A simple counter with `increment` and `reset` functionalities, demonstrating setup and teardown.

### 5. Auth Module

Simulates an authentication process, demonstrating how to mock function outputs.

---

## Testing Overview

### 1. Testing the Calculator Module

- **File:** `tests/calculator.test.js`
- **Features Demonstrated:**
  - Basic assertions (`toBe`, `toThrow`)
  - Testing exceptions
  - Grouping tests with `describe`

### 2. Testing Asynchronous Code

- **File:** `tests/fetchData.test.js`
- **Features Demonstrated:**
  - Testing asynchronous functions with `async/await`
  - Mocking modules (`jest.mock`)
  - Handling resolved and rejected promises
  - Assertions on mock functions (`toHaveBeenCalledWith`)

### 3. Snapshot Testing

- **File:** `tests/user.test.js`
- **Features Demonstrated:**
  - Snapshot testing with `toMatchSnapshot`

### 4. Setup and Teardown

- **File:** `tests/counter.test.js`
- **Features Demonstrated:**
  - Using `beforeEach`, `afterEach`, `beforeAll`, `afterAll`
  - Ensuring test isolation

### 5. Mocking Function Outputs

- **File:** `tests/auth.test.js`
- **Features Demonstrated:**
  - Mocking internal functions with `jest.spyOn`
  - Mocking return values (`mockReturnValue`)
  - Restoring original implementations (`jest.restoreAllMocks`)
  - Assertions on mocked functions

---

## Running the Tests

To run all tests:

```bash
npm test
```

To run tests with coverage reports:

```bash
npm run test:coverage
```

---

## Additional Resources

- **Jest Documentation:** [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started)
- **Mock Functions:** [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)
- **Asynchronous Testing:** [https://jestjs.io/docs/asynchronous](https://jestjs.io/docs/asynchronous)
- **Snapshot Testing:** [https://jestjs.io/docs/snapshot-testing](https://jestjs.io/docs/snapshot-testing)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
