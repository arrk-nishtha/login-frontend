# Login Frontend (React)

This is a simple React application that provides a login UI and communicates with a FastAPI backend for authentication.

## Features
- Login form (username & password)
- Sends credentials to FastAPI `/login` endpoint
- Receives JWT token on successful login
- Clean and minimal UI

## Tech Stack
- React
- JavaScript
- Fetch API
- CSS

## Setup & Run
```bash
npm install
npm start

The app will run on : http://localhost:3000

Backend Dependency
Make sure the FastAPI backend is running at:
http://127.0.0.1:8000
Endpoint used:
POST /login

Credentials are sent using the Authorization header
JWT token is handled on successful login
