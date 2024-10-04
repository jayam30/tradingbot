const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const dotenv = require('dotenv');
const TradingBot = require('./tradingBot');

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

const tradingBot = new TradingBot();

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  const intervalId = setInterval(() => {
    const botState = tradingBot.getState();
    ws.send(JSON.stringify(botState));
  }, 1000);

  ws.on('close', () => {
    clearInterval(intervalId);
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
