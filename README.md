
Built by https://www.blackbox.ai

---

```markdown
# Fringe Backend

## Project Overview

Fringe Backend is a Node.js application powered by Express and Sequelize that serves as the backend for the Fringe platform. It provides user management functionalities such as user registration, login, and fetching user details via RESTful API endpoints.

## Installation

To install the application, ensure you have [Node.js](https://nodejs.org/) installed. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fringe-backend.git
   cd fringe-backend
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Make sure to set up your database and run migrations if necessary.

## Usage

To start the application, run the following command:

```bash
npm start
```

Once the server is running, you can access it at `http://localhost:5006`.

### API Endpoints

- **Get all users**:  
  `GET /api/users`  
  Retrieves a list of all registered users.

- **Create a new user**:  
  `POST /api/users`  
  Payload:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
  Creates a new user account.

- **User login**:  
  `POST /api/login`  
  Payload:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
  Authenticates a user.

## Features

- User registration with password hashing
- User authentication
- Fetch all users
- CORS enabled for front-end integration
- Fallback routing for single-page applications

## Dependencies

The application uses the following key dependencies:

- `express`: Web framework for Node.js.
- `sequelize`: Promise-based Node.js ORM for MySQL, PostgreSQL, and SQLite.
- `cors`: Middleware to enable CORS for specified routes.
- `bcrypt`: Library to hash passwords for secure user storage.
- `mysql2`: MySQL and MariaDB client for Node.js.
- `axios`: Promise-based HTTP client for the browser and Node.js.

For a complete list, check the `package.json`.

## Project Structure

The project follows a structured approach that separates concerns effectively. Below is the high-level project structure:

```
fringe-backend/
├── models/
│   ├── User.js
│   └── sequelize.js
├── public/
│   ├── login.html
│   └── (other static files)
├── server.js
├── package.json
└── package-lock.json
```

- **models/**: Contains the database models and Sequelize setup.
- **public/**: Contains static files like HTML for the front end.
- **server.js**: The main entry point to start the Express server.
- **package.json** & **package-lock.json**: Dependency management files.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to contribute to this project, report issues, or open pull requests!
```