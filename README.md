# Microservice Directory Structure Template

This repository contains a Dummy microservice with a structured directory layout. Below is an overview of the directory structure and a brief description of each component.

## Directory Structure
```
controllers/
    dummyController.js
    index.js
middlewares/
    authMiddleware.js
    index.js
routes/
    dummyRoutes.js
    index.js
services/
    dummyService.js
    index.js
utils/
    index.js
    responseUtils.js
.env
.gitignore
.gitkeep
package.json
README.md
requirements.txt
server.js
```

## Description

### Root Files
- **.env**: Environment variables configuration file.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **.gitkeep**: Placeholder file to ensure empty directories are tracked by Git.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: This file.
- **requirements.txt**: Lists the dependencies required for the project (note: this is typically used for Python projects, but here it lists Node.js dependencies for reference).

### Directories

#### controllers/
Contains the controller files that handle incoming requests and return responses.

- **dummyController.js**: Example controller with dummy functions.
- **index.js**: Aggregates and exports all controllers.

#### middlewares/
Contains calls to the middleware functions that process requests before they reach the controllers.

- **authMiddleware.js**: Middleware for authentication.
- **index.js**: Aggregates and exports all middleware functions.

#### routes/
Contains route definitions for the application.

- **dummyRoutes.js**: Example routes using the dummy controller.
- **index.js**: Aggregates and exports all routes.

#### services/
Contains service files that handle business logic and database operations.

- **dummyService.js**: Example service with CRUD operations for dummy data.
- **index.js**: Aggregates and exports all services.

#### utils/
Contains utility functions that can be used across the application.

- **responseUtils.js**: Utility functions for handling responses.
- **index.js**: Aggregates and exports all utility functions.

### server.js
The main entry point of the application. Sets up the Express server, middleware, and routes.

## Usage

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>

2. Install Dependencies
    ```sh
    npm i


3. Create a .env file in the root directory and add your environment variables:
    ```
    PORT=3001\
    DB_MICROSERVICE_URL=https://https://user-microservice.com # dummy for now
    USER_MICROSERVICE_URL=https://db-microservice.com
    ```

### Running the Application

#### Start the server

```sh
nodemon server.js
```
The server will run on the port specified in the .env file (default is 3001).

### API Endpoints

#### Dummy Routes
- **GET /dummy**: Fetches dummy data.
- **GET /dummy/:id**: Fetches dummy data by ID.
- **POST /dummy**: Creates new dummy data.
- **PUT /dummy**: Updates existing dummy data.
- **DELETE /dummy**: Deletes dummy data.

#### Middleware

- **authMiddleware.verifyToken**: Verifies the authentication token.
- **authMiddleware.verifyFarmer**: Verifies if the user is a farmer.

#### Utilities
- **responseUtils**: Utility functions for handling responses, including success, bad request, unauthorized, forbidden, not found, and internal server error responses.

### Main FLow

- **Request**: The client sends a request to the "/dummy" endpoint.
- **Routing**: The request is routed to dummyRoutes.js.
- **Middleware**: Middleware functions (e.g., authMiddleware.verifyToken) process the request.
- **Controller**: The request reaches the controller function dummyController.dummyFunction.
- **Service**: The controller function calls the database service functions (e.g., dummyService.getDummyData).
- **Response Handling**: The controller function uses utility functions to handle the response and send it back to the client.

### Notes

- **CommonJS**: This project uses CommonJS modules (require and module.exports) instead of ES6 modules (import and export).
- **Axios**: This project uses axios instead of fetch etc (will have to change if you want to use fetch etc)
- **Request Headers**: Depending on how we cater tokens, we will have to set the headers accordingly.