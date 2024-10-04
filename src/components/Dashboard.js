import React, { useState, useEffect } from 'react';
import TradeHistory from './TradeHistory';
import './Dashboard.css';

const Dashboard = () => {
  const [botState, setBotState] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3001');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setBotState(data);
    };

    return () => {
      ws.close();
    };
  }, []);

  if (!botState) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <h2>Trading Estimator Performance</h2>
      <div className="metrics">
        <p>Current Balance: ${botState.balance.toFixed(2)}</p>
        <p>Current Stock Price: ${botState.currentPrice.toFixed(2)}</p>
        <p>Positions: {botState.positions.STOCK || 0} shares</p>
      </div>
      <TradeHistory trades={botState.tradeHistory} />
    </div>
  );
};

export default Dashboard;