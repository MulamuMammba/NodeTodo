# Todo List Project

This is a simple Todo List API built with Node.js and Express. The API allows users to create, read, update, and delete tasks. Users can also mark tasks as completed or important.

![Screenshot 2024-11-08 113837](https://github.com/user-attachments/assets/a6722def-b3b9-4c6b-bce1-8a2a96661a82)



## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)

## Project Overview
This project provides a backend for managing a todo list. It includes endpoints to create, retrieve, update, and delete todos, as well as mark them as completed or important.

## Tech Stack
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web framework for handling routes and requests
- **JavaScript (ES6+ syntax)**

## Features
- **Add Tasks**: Create a new task.
- **View All Tasks**: Retrieve a list of all tasks.
- **Delete Tasks**: Delete a specific task by ID.
- **Toggle Task Completion**: Mark tasks as completed or not.
- **Toggle Task Importance**: Mark tasks as important or not.

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/MulamuMammba/todo-list.git
    cd todo-list
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the Project
1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser or API client (e.g., Postman) and go to:
    ```
    http://localhost:3000
    ```

## API Endpoints
Here's a list of available API endpoints:

- **GET /todos**: Retrieve all todos.
    ```bash
    curl http://localhost:3000/todos
    ```

- **POST /todos**: Create a new todo.
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"task": "New Task"}' http://localhost:3000/todos
    ```

- **DELETE /todos/:id**: Delete a todo by ID.
    ```bash
    curl -X DELETE http://localhost:3000/todos/1
    ```

- **PATCH /todos/:id/complete**: Toggle the completion status of a todo.
    ```bash
    curl -X PATCH http://localhost:3000/todos/1/complete
    ```

- **PATCH /todos/:id/important**: Toggle the importance status of a todo.
    ```bash
    curl -X PATCH http://localhost:3000/todos/1/important
    ```

