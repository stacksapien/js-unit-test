// tests/fetchData.test.js

const fetchData = require("../src/fetchData");
const axios = require("axios");

jest.mock("axios");

describe("FetchData Module", () => {
  test("fetches data successfully", async () => {
    const data = { name: "John Doe" };
    axios.get.mockResolvedValue({ data });

    const result = await fetchData("/api/user");
    expect(result).toEqual(data);
    expect(axios.get).toHaveBeenCalledWith("/api/user");
  });

  test("handles fetch error", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchData("/api/user")).rejects.toThrow(errorMessage);
  });
});
