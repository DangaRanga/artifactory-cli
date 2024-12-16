const axios = require("axios");
const { getAuthToken } = require("./auth");
const environmentConfig = require("../config");

const apiUrl = environmentConfig.artifactory.url;

async function getStorageInfo() {
  try {
    const token = await getAuthToken();
    const response = await axios.get(`${apiUrl}/api/storageinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Storage Information:", response.data);
  } catch (error) {
    console.error(
      "Error fetching storage info:",
      error.response?.data || error.message
    );
  }
}

module.exports = { getStorageInfo };
