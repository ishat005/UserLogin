# UserLogin

A full-stack authentication application where users can register, login, and access protected routes. The app implements JWT-based authentication with secure session management.

## Tech Stack

### Frontend:

- **React** - UI library for building user interfaces
- **Redux** - State management for authentication state
- **React Router** - Client-side routing and navigation
- **Material-UI (MUI)** - Professional UI components and styling
- **Axios** - HTTP client for API requests
- **Vite** - Fast build tool and development server

### Backend:

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for building REST APIs
- **MongoDB** - NoSQL database for user data storage
- **Mongoose** - MongoDB object modeling library
- **JWT (jsonwebtoken)** - Token-based authentication
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management

### Database:

- **MongoDB Atlas** - Cloud-hosted MongoDB database

### Security:

- **JWT Authentication** - Secure token-based user sessions
- **Environment Variables** - Secure credential management
- **Password Protection** - User credential validation
- **Protected Routes** - Authorization middleware

### Deployment:

- **Netlify** - Frontend hosting and deployment
- **Environment Variables** - Secure production configuration JavaScript,

## Features

- ✅ **User Registration** - Create new accounts with validation
- ✅ **User Login** - Secure authentication with JWT tokens
- ✅ **Protected Routes** - Access control for authenticated users
- ✅ **Persistent Sessions** - Stay logged in across browser sessions
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Professional UI** - Material Design components
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Secure Logout** - Proper session termination

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Start backend server: `npm run server`
5. Start frontend: `npm run dev`

## Environment Variables

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
