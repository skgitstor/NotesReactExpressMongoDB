# 📝 Notes Application (MERN / Full-Stack CRUD)

A clean full-stack Notes web application built with a React frontend and an Express/Node.js backend. This project allows users to create, view, and manage notes with automatic UI refreshes upon database updates.

## 🚀 Features

* **Read Notes:** Fetches the list of notes on initial load using Axios and React hooks.

* **Create Notes:** Simple form submission that adds a new note to the backend and triggers an instant data refresh.

* **Optimized Rendering:** Built with clean data-fetching patterns (no redundant `useEffect` hooks or infinite re-render loops).

* **RESTful Architecture:** Clear separation between frontend interface and backend API routes.

## 🛠️ Tech Stack

### Frontend

* **React.js** (Hooks: `useState`, `useEffect`)

* **Axios** (HTTP client for API requests)

* **HTML5 / CSS3 / Tailwind CSS** (UI styling)

### Backend

* **Node.js** & **Express.js**

* **CORS** (Cross-Origin Resource Sharing)

* **Database:** MongoDB 

## 📂 Project Structure

```
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── App.jsx         # Main notes container & API logic
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js (or package.json if CRA)
│
├── server/                 # Express Backend
│   ├── routes/             # API routes (/api/notes)
│   ├── models/             # Database schemas
│   ├── server.js           # Server entry point
│   └── package.json
│
└── README.md

```

## ⚙️ Getting Started

### 1. Clone the Repository

```
git clone https://github.com/skgitstor/NotesReactExpressMongoDB.git

```

### 2. Backend Setup

```
cd server
npm install
npx nodemon server.js   # nust have installed nodemon

```

*The server will start on `http://localhost:5000` (or specified port).*

### 3. Frontend Setup

Open a new terminal:

```
cd client
npm install
npm run dev   # or npm start

```

*The React app will launch at `http://localhost:5173` or `http://localhost:3000`.*

## 📡 API Endpoints

| **Method** | **Endpoint** | **Description** | 
| `GET` | `/api/notes` | Fetch all notes | 
| `POST` | `/api/notes` | Create a new note | 
| `PUT` | `/api/notes/:id` | Update an existing note | 
| `DELETE` | `/api/notes/:id` | Delete a note | 

## 🔮 Roadmap / Next Steps

* \[ \] Add Delete note functionality (`DELETE /api/notes/:id`)

* \[ \] Add In-line Edit / Update note feature (`PUT /api/notes/:id`)

* \[ \] Add Loading spinners and Error boundary alerts

* \[ \] Implement search and tag filters

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).