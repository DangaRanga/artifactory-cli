const axios = require("axios");
const { getAuthToken } = require("./auth");
const environmentConfig = require("../config");

const apiUrl = environmentConfig.artifactory.url;

async function systemPing() {
  try {
    const token = await getAuthToken();
    const response = await axios.get(`${artifactoryUrl}/api/system/ping`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Ping Response:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

async function systemVersion() {
  try {
    const token = await getAuthToken();
    const response = await axios.get(`${artifactoryUrl}/api/system/version`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Version Info:", response.data);
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

module.exports = { systemPing, systemVersion };
