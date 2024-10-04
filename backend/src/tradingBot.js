const MockAPI = require('./mockAPI');

class TradingBot {
  constructor() {
    this.api = new MockAPI();
    this.balance = parseFloat(process.env.INITIAL_BALANCE) || 10000;
    this.positions = {};
    this.tradeHistory = [];
    this.buyThreshold = parseFloat(process.env.BUY_THRESHOLD) || -0.02;
    this.sellThreshold = parseFloat(process.env.SELL_THRESHOLD) || 0.03;

    this.startTrading();
  }

  startTrading() {
    setInterval(() => {
      const price = this.api.getStockPrice();
      this.evaluateTrade(price);
    }, 1000);
  }

  evaluateTrade(currentPrice) {
    const lastTrade = this.tradeHistory[this.tradeHistory.length - 1];
    
    if (!lastTrade || lastTrade.type === 'SELL') {
      if (this.shouldBuy(currentPrice)) {
        this.executeBuy(currentPrice);
      }
    } else if (lastTrade.type === 'BUY') {
      if (this.shouldSell(currentPrice, lastTrade.price)) {
        this.executeSell(currentPrice);
      }
    }
  }

  shouldBuy(currentPrice) {
    const lastTrade = this.tradeHistory[this.tradeHistory.length - 1];
    if (!lastTrade) return true;
    
    const priceDrop = (currentPrice - lastTrade.price) / lastTrade.price;
    return priceDrop <= this.buyThreshold;
  }

  shouldSell(currentPrice, buyPrice) {
    const priceIncrease = (currentPrice - buyPrice) / buyPrice;
    return priceIncrease >= this.sellThreshold;
  }

  executeBuy(price) {
    const amount = Math.floor(this.balance / price);
    if (amount > 0) {
      this.balance -= amount * price;
      this.positions['STOCK'] = (this.positions['STOCK'] || 0) + amount;
      this.tradeHistory.push({ type: 'BUY', price, amount, timestamp: new Date() });
    }
  }

  executeSell(price) {
    const amount = this.positions['STOCK'] || 0;
    if (amount > 0) {
      this.balance += amount * price;
      this.positions['STOCK'] = 0;
      this.tradeHistory.push({ type: 'SELL', price, amount, timestamp: new Date() });
    }
  }

  getState() {
    return {
      balance: this.balance,
      positions: this.positions,
      tradeHistory: this.tradeHistory,
      currentPrice: this.api.getStockPrice()
    };
  }
}

module.exports = TradingBot;