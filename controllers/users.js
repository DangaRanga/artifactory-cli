const { getAuthToken } = require("./auth");
const axios = require("axios");
const environmentConfig = require("../config");

const apiUrl = environmentConfig.artifactory.url;

async function createUser(username, email, password) {
  try {
    const token = await getAuthToken();
    const user = { email, password, admin: false };
    await axios.put(`${apiUrl}/api/security/users/${username}`, user, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User created successfully.");
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

async function deleteUser(username) {
  try {
    const token = await getAuthToken();
    await axios.delete(`${apiUrl}/api/security/users/${username}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User deleted successfully.");
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
  }
}

module.exports = { createUser, deleteUser };
