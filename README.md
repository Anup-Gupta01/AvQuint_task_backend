# Task Management App - Backend

## Overview

This is the backend service for the Task Management Application built with Node.js, Express.js, and MongoDB. It provides secure authentication and task management APIs.

## Features

* User Authentication using JWT
* Protected Routes
* Task CRUD Operations
* MongoDB Database Integration
* Error Handling Middleware
* Secure Password Hashing using bcrypt

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors

## Project Structure

```bash
backend/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── .env
```

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to backend folder

```bash
cd backend
```

3. Install dependencies

```bash
npm install
```

4. Create a .env file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the server

```bash
npm run dev
```

## API Endpoints

### Authentication

#### Register User

```http
POST /api/auth/register
```

#### Login User

```http
POST /api/auth/login
```

### Tasks

#### Get All Tasks

```http
GET /api/tasks
```

#### Create Task

```http
POST /api/tasks
```

#### Update Task

```http
PUT /api/tasks/:id
```

#### Delete Task

```http
DELETE /api/tasks/:id
```

#### Toggle Task Status

```http
PATCH /api/tasks/:id/status
```

## Database Schemas

### User

```javascript
{
  name: String,
  email: String,
  password: String
}
```

### Task

```javascript
{
  title: String,
  description: String,
  status: String,
  userId: ObjectId
}
```


