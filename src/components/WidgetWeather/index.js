import React, { useEffect, useState } from 'react'
import { fetch } from 'lib/widget-utils'

// https://codepen.io/Call_in/pen/pMYGbZ

const WidgetWeather = props => {
  const [conditions, setConditions] = useState(null)

  async function getWeather(key, zip) {
    const options = {}
    const data = await fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${zip}`, options)
    if (data) {
      return data
    }
    return null
  }

  useEffect(() => {
    if (!conditions && props.apiKey && props.zipCode) {
      const results = getWeather(props.apiKey, props.zipCode)
      if (results) {
        setConditions(results)
      }
    }
  }, [props, conditions])

  return (
    <div className="widget">
      {!conditions && <p>Loading</p>}
      {conditions && <p>LOADED!</p>}
    </div>
  ) 
}

export default WidgetWeather