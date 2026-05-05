# Project Manager App

A full-stack, Kanban-style project management dashboard designed to help teams track progress and deadlines. Built with React, Tailwind CSS, Node.js, and PostgreSQL.

## Features
* User Authentication: Secure signup and login functionality using JSON Web Tokens (JWT).
* Kanban Dashboard: Organize tasks visually into "To Do", "In Progress", and "Done" columns.
* Task Tracking: View task titles and assigned team members at a glance.
* Modern UI: Clean, responsive, and accessible interface styled with Tailwind CSS v4.

## Tech Stack
* Frontend: React, Vite, Tailwind CSS
* Backend: Node.js, Express.js
* Database: PostgreSQL
* Deployment: Railway

## Local Development Setup

To get a local copy up and running, follow these steps.

### Prerequisites
* Node.js installed
* PostgreSQL installed and running

### Installation

1. Clone the repository
git clone https://github.com/your-username/project-manager-app.git
cd project-manager-app

2. Backend Setup
Navigate to the server directory.
Install NPM packages:
npm install

Create a .env file in the server directory and add your variables:
DATABASE_URL=your_postgres_database_url
JWT_SECRET=your_super_secret_jwt_key

Start the backend server:
npm start

3. Frontend Setup
Open a new terminal and navigate to the client directory:
cd client

Install NPM packages:
npm install

Create a .env file in the client directory and add the backend API URL:
VITE_API_URL=http://localhost:8080/api

Start the Vite development server:
npx vite

4. Open http://localhost:5174/login in your browser to view the app.

## License
Distributed under the MIT License.
