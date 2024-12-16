const axios = require("axios");
const environmentConfig = require("../config");

const apiUrl = environmentConfig.artifactory.url;

async function getAuthToken() {
  const { username, password } = environmentConfig.artifactory;

  try {
    const response = await axios.post(
      `${apiUrl}/api/security/token`,
      {
        username: username,
        password: password,
        scope: "member-of-groups:*",
      },
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${username}:${password}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error fetching auth token:",
      error.response?.data || error.message
    );
    console.error("Request details:", {
      username: username,
      password: password,
      url: `${apiUrl}/api/security/token`,
    });
    process.exit(1);
  }
}

module.exports = { getAuthToken };
