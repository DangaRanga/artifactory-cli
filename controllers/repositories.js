const { getAuthToken } = require("./auth");
const axios = require("axios");
const environmentConfig = require("../config");

const apiUrl = environmentConfig.artifactory.url;

async function listRepositories() {
  try {
    const token = await getAuthToken();
    const response = await axios.get(`${apiUrl}/api/repositories`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Repositories:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

module.exports = { listRepositories };
