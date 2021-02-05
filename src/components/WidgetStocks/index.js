import React, { useEffect, useState } from 'react'
import numeral from 'numeral'

import stocksLib from './stocks'

import './styles.scss'

const WidgetStock = props => {
  const [stocks, setStocks] = useState(null)
  const [currentPrice, setCurrentPrice] = useState(null)

  async function initializeStocks(data, callback) {
    const stockData = await stocksLib.init('wss://ws.finnhub.io?token=c063dr748v6v0bd99v6g', data, callback)
    if (setStocks) {
      setStocks(stockData)
    }
  }
  
  useEffect(() => {
    if (!stocks) initializeStocks(props.data, _displayData)
    // return () => props.data.forEach(itm => stocksLib.unSubscribe(itm.symbol));
  }, [props.data, stocks]);

  const _displayData = json => {
    if (json && json.data) {
      const total = stocksLib.calculateTotal(json.data)
      setCurrentPrice(numeral(total).format("0,0.00"))
    }
  }
  
  return (
    <div className="widget widget--stocks">
      <header>
        <h5>Total</h5>
        <h2>${currentPrice}</h2>
      </header>
      <div className="stocks">
        {stocksLib.stocks && stocksLib.stocks.map(itm => {
          return (
            <div className="stocks__stock">
              <h5>{itm.symbol}</h5>
              <div className="stocks__stock__meta">
                <span>${numeral(itm.currentPrice).format("0,0.00")}</span>
                <span>${numeral((itm.units * itm.currentPrice)).format("0,0.00")}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ) 
}

export default WidgetStock