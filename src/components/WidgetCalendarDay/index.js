import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

import './styles.scss'

/**
 * Notes
 * 
 * https://codepen.io/aymangado/pen/KqnlH
 * https://codepen.io/iam/pen/gHkeq
 * 
 */

const WidgetClock = props => {
  const [dateTime, setDateTime] = useState(null) // eslint-disable-line

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const _getDateInstance = () => {
    return moment().tz(props.location);
  }

  const _getDate = () => {
    const date = _getDateInstance()
    if (date) {
      return date.format('D')
    }
    return null
  }

  const _getYear = () => {
    const date = _getDateInstance()
    if (date) {
      return date.format('YYYY')
    }
    return null
  }

  const _getTime = () => {
    const date = _getDateInstance()
    if (date) {
      return date.format('HH:mm:ss')
    }
    return null
  }

  const _getDay = () => {
    const date = _getDateInstance()
    if (date) {
      return date.format('dddd')
    }
    return null
  }

  return (
    <div className="widget widget--calendarDay">
      <div className="calender-object">
        <div className="date">
          <span id="date">{_getDate()}</span>
          <span id="day">{_getDay()}</span>
          <span id="time">{_getTime()}</span>
        </div>
        <div className="weather">
          <span className="icons">&#xf053;</span><span id="temp"></span><br />
          <span className="icons" id="weather-icon"></span><span id="desc"></span><br />
          <span className="icons">&#xf04e;</span><span id="humidity"></span>
        </div>
        <div id="details">
          <div id="year">{_getYear()}</div>
          <div id="country">{props.locationText}</div>
        </div>
      </div>
    </div>
  ) 
}

export default WidgetClock