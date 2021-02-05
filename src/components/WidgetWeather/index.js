import React, { useEffect, useState } from 'react'
import { fetch } from 'lib/widget-utils'

import moment from 'moment'

// https://codepen.io/Call_in/pen/pMYGbZ

import { getIcon } from './weatherCodes'

import './styles.scss'

const WidgetWeather = props => {
  const [conditions, setConditions] = useState(null)
  const [forecast, setForecast] = useState(null)

  async function getWeather(key, zip) {
    const options = {}
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial`, options)
    if (data) {
      setConditions(data)
      const results = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=minutely&appid=${key}&units=imperial`, options)
      if (results) {
        setForecast(results)
      }
    }
  }

  useEffect(() => {
    if (!conditions && props.apiKey && props.zipCode) {
      getWeather(props.apiKey, props.zipCode)
    }
  }, [props, conditions])

  const _getCurrent = () => {
    const date = moment((conditions.dt * 1000))
    return (
      <div className="currentConditions">
        <div className="currentConditions__location">
          <h2>{date.format('dddd')}</h2>
          <p>{date.format('DD MMM YYYY')}</p>
          <p><i className="fad fa-location-circle"></i>{`${conditions.name}, ${conditions.sys.country}`}</p>
        </div>
        <div className="currentConditions__conditions">
          <i data-code={conditions.weather[0].id} className={getIcon(conditions.weather[0].id)}></i>
          <h2>{Math.round(conditions.main.temp)}&deg;F</h2>
          <p>{conditions.weather[0].main}</p>
        </div>
      </div>
    )
  }

  const _getForecastTiles = () => {
    if (forecast) {
      const tiles = forecast.daily.splice(0,4).map((itm, key) => {
        console.log(itm)
        const date = moment((itm.dt * 1000))
        return (
          <div key={key} className={`forecast__tile ${key === 0 ? 'forecast__tile--active' : ''}`}>
            <i data-code={itm.weather[0].id} className={getIcon(itm.weather[0].id)}></i>
            <p className="forecast__tile--dow">{date.format('ddd')}</p>
            <p className="forecast__tile--max">{Math.round(itm.temp.max)}&deg;F</p>
            <p className="forecast__tile--min">{Math.round(itm.temp.min)}&deg;F</p>
          </div>
        )
      })
      return <div className="forecast">{tiles}</div>
    }
    return null
  }

  console.log('Conditoions: ', conditions)
  console.log('Forecast: ', forecast)

  if (conditions && forecast) {
    const percip = (forecast.daily[0].rain + forecast.daily[0].snow)
    return (
      <div className="widget widget--weather">
        {_getCurrent()}
        <div className="forecastConditions">
          <div className="forecastConditions__details">
            <p>Precipitation: <span>{percip}</span></p>
            <p>Humidity: <span>{conditions.main.humidity}%</span></p>
            <p>Wind: <span>{conditions.wind.speed}km/h</span></p>
          </div>
          {_getForecastTiles()}
        </div>
      </div>
    ) 
  }
  return <p>Loading</p>
}

export default WidgetWeather