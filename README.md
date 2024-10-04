# Trading Estimator Simulation

This project simulates a basic trading bot for a hypothetical stock market. It includes a backend service built with Node.js and Express, and a frontend interface built with React.

## Project Structure

```
trading-bot/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── tradingBot.js
│   │   └── mockAPI.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── Dashboard.js
│   │   │   └── TradeHistory.js
│   │   └── index.js
│   └── package.json
└── README.md
```

## Features

- Backend service that monitors stock price changes using mock data
- Simple trading strategy based on price movements
- Frontend dashboard to display bot performance and trade history
- Real-time updates using WebSocket connection

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

2. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Trading Logic

The trading bot uses a simple strategy based on price movements:
- Buy when the stock price drops by 2% (configurable)
- Sell when the stock price rises by 3% (configurable)

The bot tracks its positions, balance, and overall profit/loss, providing a summary of trades and performance.

## API Usage

The backend includes a mock API (`mockAPI.js`) that simulates real-time stock price data. The trading bot interacts with this API to fetch price updates and make trading decisions.

## Contributing

Feel free to fork this repository and submit pull requests for any improvements or additional features.

## License

This project is licensed under the MIT License.
