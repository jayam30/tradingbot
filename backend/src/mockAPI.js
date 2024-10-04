class MockAPI {
  constructor() {
    this.basePrice = 100;
    this.volatility = 0.02;
  }

  getStockPrice() {
    const change = (Math.random() - 0.5) * 2 * this.volatility;
    this.basePrice *= (1 + change);
    return parseFloat(this.basePrice.toFixed(2));
  }
}

module.exports = MockAPI;