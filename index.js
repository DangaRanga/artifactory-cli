const { program } = require("commander");
const { systemPing, systemVersion } = require("./controllers/system");
const { createUser, deleteUser } = require("./controllers/users");
const { listRepositories } = require("./controllers/repositories");
const { getStorageInfo } = require("./controllers/storage");

program
  .command("ping")
  .description("Ping the Artifactory system")
  .action(systemPing);

program
  .command("version")
  .description("Get Artifactory system version")
  .action(systemVersion);

program
  .command("create-user <username> <email> <password>")
  .description("Create a new Artifactory user")
  .action(createUser);

program
  .command("delete-user <username>")
  .description("Delete an Artifactory user")
  .action(deleteUser);

program
  .command("list-repos")
  .description("List all repositories")
  .action(listRepositories);

program
  .command("storage-info")
  .description("Get storage information from Artifactory")
  .action(getStorageInfo);

program.parse(process.argv);
