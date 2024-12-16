# Compuzing Artifactory CLI

This application provides basic functionality for interacting with the JFrog Artifactory instance via a command line interface

## Commands and API References

### 1. Ping the System
- **Command**: `node index.js ping`
- **Reference**: [System Ping](https://www.jfrog.com/confluence/display/JFROG/System+Health+Ping+and+Version)

### 2. Get System Version
- **Command**: `node index.js version`
- **Reference**: [System Version](https://www.jfrog.com/confluence/display/JFROG/System+Health+Ping+and+Version)

### 3. Create User
- **Command**: `node index.js create-user <username> <email> <password>`
- **Reference**: [Create or Replace User](https://www.jfrog.com/confluence/display/JFROG/Users)

### 4. Delete User
- **Command**: `node index.js delete-user <username>`
- **Reference**: [Delete User](https://www.jfrog.com/confluence/display/JFROG/Users)

### 5. List Repositories
- **Command**: `node index.js list-repos`
- **Reference**: [Repository Configuration](https://www.jfrog.com/confluence/display/JFROG/Repository+Configuration+JSON)

### 6. Get Storage Info
- **Command**: `node index.js storage-info`
- **Reference**: [Storage Summary Information](https://www.jfrog.com/confluence/display/JFROG/Storage+Summary+Information)

### 7. Create Repository
- **Command**: `node index.js create-repo <repo-name>`
- **Reference**: [Create Repository](https://www.jfrog.com/confluence/display/JFROG/Repository+Configuration+JSON)

### 8. Update Repository
- **Command**: `node index.js update-repo <repo-name>`
- **Reference**: [Update Repository](https://www.jfrog.com/confluence/display/JFROG/Repository+Configuration+JSON)

