import { fetch } from 'lib/widget-utils'
var axios = require('axios');

class StockSocket {
  constructor() {
    this._init = false
    this._socket = null
    this._stocks = null
    this._currentPrices = []
  }

  get stocks() {
    if (this._stocks) {
      return this._stocks.map(itm => {
        if (itm.symbol === 'BINANCE:ETHUSDC') itm.symbol = 'ETH'
        if (itm.symbol === 'BINANCE:BTCUSDT') itm.symbol = 'BTC'
        return itm
      })
    }
    return null
  }

  async init(url, stocks, callback = null) {
    if (url && stocks) {
      this._stocks = stocks.map(itm => {
        itm.currentPrice = null
        return itm
      })

      await this._setInitialPricing()

      this._socket = new WebSocket(url)
      this._socket.addEventListener('open', event => {
        stocks.forEach(itm => {
          this._socket.send(JSON.stringify({'type':'subscribe', 'symbol': itm.symbol}))
        })
      })
      if (callback) {
        this._socket.addEventListener('message', event => {
          const json = JSON.parse(event.data)
          if (json) {
            callback(json)
          }
          callback(null)
        })
      }

      this._init = true

      return true
      
    } else {
      if (!url) throw new Error('URL Not provided.')
      if (!stocks) throw new Error('Stocks Not provided.')
    }
  }

  updatePrice(symbol, price) {
    // if (symbol === 'BINANCE:ETHUSDC') console.log('ETH Updated to: ', price)
    this._stocks = this._stocks.map(itm => {
      if (itm.symbol === symbol) itm.currentPrice = price
      return itm
    })
  }

  calculateTotal(data) {
    data.forEach(itm => this.updatePrice(itm.s, itm.p))

    let total = 0
    if (this._init) {
      this._stocks.forEach(itm => {
        total += (itm.units * itm.currentPrice)
      })
    } else {
      console.log('Not init...')
    }
    return total
  }

  unSubscribe(symbol) {
    if (symbol === 'BTC') {
      this._socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': 'BINANCE:BTCUSDT'}))
    } else if (symbol === 'ETH') {
      this._socket.send(JSON.stringify({'type':'unsubscribe', 'symbol': 'BINANCE:ETH/USDT"'}))
    } else {
      this._socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
    }
  }

  async _setInitialPricing() {
    let final = []
    let stock
    for(stock of this._stocks) {
      const lastPrice = await this._fetchPrice(stock.symbol)
      // console.log(stock.symbol, lastPrice)
      if (lastPrice) {
        stock.currentPrice = lastPrice.c
      } else {
        console.error(`Error fetching price for ${stock.symbol}`)
      }
      final.push(stock)
    }
    this._stocks = final
  }

  async _fetchPrice(symbol) {
    const options = {}
    const data = await fetch(`https://finnhub.io/api/v1/quote?token=c063dr748v6v0bd99v6g&symbol=${symbol}`, options)
    if (data) {
      return data
    }
    return null
  }
}

export default new StockSocket()

