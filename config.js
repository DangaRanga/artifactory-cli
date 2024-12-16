const dotenv = require("dotenv");

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
  artifactory: {
    url: process.env.ARTIFACTORY_URL,
    username: process.env.ARTIFACTORY_USER,
    password: process.env.ARTIFACTORY_PASSWORD,
  },
};
