# Project Name

A Node.js API backend using MySQL and Sequelize with a user management system API.

## Prerequisites

- Node.js v14 or later
- MySQL v8 or later
- Serverless Framework

## Getting Started

1. Clone the repository:
```
git clone https://github.com/aeroneeee/sls-user-management.git
```

2. Install the dependencies:
```
cd sls-user-management
npm install
```

3. Run the migration to create the database tables:
```
npx sequelize-cli db:migrate
```

4. Seed the database with sample data:
```
npx sequelize-cli db:seed:all
```

5. Start the API:
```
npm start
```

This will start the API on `http://localhost:3000`.

6. Test the API by making HTTP requests to the API endpoints using a tool like Postman or curl.

## API Endpoints

### Users

- GET `/api/users`: Get all users.
- GET `/api/users/:id`: Get a user by ID.
- POST `/api/users`: Add a new user.
- PUT `/api/users/:id`: Update a user by ID.
- DELETE `/api/users/:id`: Delete a user by ID.
- DELETE `/api/users`: Delete all users by ID.


## Running Tests

To run the tests, use the following command:
```
npm test
```

## 🚧 Deployment

To deploy the API to a production environment, follow these steps:

1. Configure the environment variables for the production environment.

2. Run the migration and seed the database on the production server:
```
npx sequelize-cli db:migrate --env production
npx sequelize-cli db:seed:all --env production
```

3. Build the API:
```
npm run build
```

4. Deploy the API using the Serverless Framework:
```
serverless deploy
```
This will deploy the API to your production environment.

Note: You may need to configure the Serverless Framework for your specific production environment. See the Serverless Framework documentation for more information.
