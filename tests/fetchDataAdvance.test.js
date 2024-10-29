// tests/fetchData.test.js

const fetchData = require("../src/fetchDataAdvance");
const axios = require("axios");
const logger = require("../src/logger");

jest.mock("axios");
jest.mock("../src/logger"); // Mock the logger module

describe("FetchData Module with Logger", () => {
  test("logs success message on successful fetch", async () => {
    const data = { name: "John Doe" };
    axios.get.mockResolvedValue({ data });

    await fetchData("/api/user");

    expect(logger.log).toHaveBeenCalledWith("Data fetched successfully");
  });

  test("logs error message on failed fetch", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    await expect(fetchData("/api/user")).rejects.toThrow("Network Error");

    expect(logger.error).toHaveBeenCalledWith("Error fetching data");
  });
});
