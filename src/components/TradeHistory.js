import React from 'react';
import './TradeHistory.css';

const TradeHistory = ({ trades }) => {
  return (
    <div className="trade-history">
      <h3>Trade History</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {trades.slice().reverse().map((trade, index) => (
            <tr key={index}>
              <td>{trade.type}</td>
              <td>${trade.price.toFixed(2)}</td>
              <td>{trade.amount}</td>
              <td>{new Date(trade.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;