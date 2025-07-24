# 🧑‍💻 SDE Intern Assignment – Task Management API

Welcome to the Task Management API — a backend service built using **Node.js** and **Express.js (JavaScript)** as part of an SDE Intern assignment.

This simple REST API allows you to manage tasks — create, read, update, and delete — with optional filters and pagination. The project is designed to showcase core backend skills like clean code structure, RESTful routing, and in-memory data handling.

---

## 📦 Tech Stack

- Node.js
- Express.js
- JavaScript (ES6+)
- UUID (for unique task IDs)
- In-memory array as data store

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Anish2025/SDE-Intern-Assignment.git
cd SDE-Intern-Assignment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

> Server will start at: **http://localhost:3000**

---

## 📬 API Endpoints

Base URL: `http://localhost:3000/api`

### ➕ Create Task  
**POST** `/tasks`

Create a new task.

**Request Body:**
```json
{
  "title": "Study DSA",
  "description": "Practice trees and graphs",
  "status": "PENDING"
}
```

**Response:**
```json
{
  "id": "uuid",
  "title": "Study DSA",
  "description": "Practice trees and graphs",
  "status": "PENDING",
  "createdAt": "2025-07-24T12:34:56.789Z",
  "updatedAt": "2025-07-24T12:34:56.789Z"
}
```

---

### 📄 Get All Tasks  
**GET** `/tasks`

Retrieve all tasks. Supports optional filtering and pagination.

**Query Parameters (optional):**
- `status=PENDING|IN_PROGRESS|COMPLETED`
- `title=search_text`
- `page=1`
- `limit=5`

**Sample Response:**
```json
[
  {
    "id": "uuid",
    "title": "Study DSA",
    "status": "PENDING"
  }
]
```

---

### 🔍 Get Task by ID  
**GET** `/tasks/:id`

Retrieve a specific task by its ID.

**Sample Response:**
```json
{
  "id": "uuid",
  "title": "Study DSA",
  "status": "PENDING"
}
```

---

### ✏️ Update Task  
**PUT** `/tasks/:id`

Update an existing task.

**Request Body:**
```json
{
  "title": "Revise DSA",
  "status": "IN_PROGRESS"
}
```

**Sample Response:**
```json
{
  "id": "uuid",
  "title": "Revise DSA",
  "status": "IN_PROGRESS"
}
```

---

### ❌ Delete Task  
**DELETE** `/tasks/:id`

Delete a task by ID.

**Sample Response:**
```json
{
  "message": "Task deleted"
}
```

---

## 📘 Task Object Structure

```json
{
  "id": "uuid",
  "title": "string",
  "description": "string",
  "status": "PENDING | IN_PROGRESS | COMPLETED",
  "createdAt": "ISO timestamp",
  "updatedAt": "ISO timestamp"
}
```

---

## 🧪 How to Test

You can test the API using:
- [Postman](https://www.postman.com/)
- [Thunder Client (VS Code Extension)](https://www.thunderclient.com/)
- `curl` in the terminal

Example:
```bash
curl http://localhost:3000/api/tasks
```

---

## 📝 Submission Instructions

- Push your code to a public GitHub repository.
- Email the repository link to **development@synegrow.com**
- **Deadline:** 26th July 2025, before 5:00 PM IST

---

## 👨‍💻 Author

Made with 💻 by [Anish Sharma](https://github.com/Anish2025)