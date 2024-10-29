// src/fetchData.js

const axios = require("axios");
const logger = require("./logger"); // External module

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    logger.log("Data fetched successfully");
    return response.data;
  } catch (error) {
    logger.error("Error fetching data");
    throw error;
  }
}

module.exports = fetchData;
