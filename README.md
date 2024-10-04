# Trading Bot Simulation

This project is a **Trading Bot Simulation** built with a **backend** for managing trading logic and a **frontend** for visualizing bot performance and trade history. The bot interacts with external stock data APIs and uses WebSockets to keep the frontend updated in real-time.

## Table of Contents
- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Running the Backend](#running-the-backend)
- [Frontend](#frontend)
  - [Technologies](#technologies-1)
  - [Setup](#setup-1)
  - [Running the Frontend](#running-the-frontend)
- [License](#license)

## Project Structure

The project is split into two main directories:
- `backend/`: Contains the server-side logic, API handling, and WebSocket communication.
- `frontend/`: Contains the user interface for viewing bot performance and trade history.

---

## Backend

### Technologies
- **Node.js**: Server environment.
- **Express.js**: Web framework for API development.
- **WebSockets**: For real-time updates between the bot and the frontend.
- **Polygon.io API**: Used to fetch stock data for trading.
  
### Setup

    ```bash
    npm install
    ```

### Running the Backend

1. Start the backend server:
    ```bash
    npm start
    ```
2. The backend should now be running on `http://localhost:3001`, with WebSocket communication enabled and stock data being fetched from the Polygon.io API.

---

## Frontend

### Technologies
- **React.js**: For building the user interface.
- **WebSockets**: For real-time updates.
- **CSS**: For styling components.

### Setup

1. Navigate to the `frontend/` directory:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Ensure the WebSocket is connecting to the correct address (`ws://localhost:3001`).

### Running the Frontend

1. Start the frontend development server:
    ```bash
    npm start
    ```
2. The frontend should now be running on `http://localhost:3000`, displaying the bot's performance and trade history in real-time.

---

### Notes:
- Ensure both the backend and frontend are running concurrently to allow for real-time WebSocket communication.
- Modify API URLs and WebSocket addresses as per your deployment environment.
