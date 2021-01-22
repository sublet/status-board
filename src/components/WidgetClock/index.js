import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

import './styles.scss'

/**
 * Notes
 * 
 * - https://www.geeksforgeeks.org/how-to-convert-date-to-another-timezone-in-javascript/
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
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
      return date.format('YYYY-MM-DD ddd').toUpperCase()
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

  // const _getDay = () => {
  //   const date = _getDateInstance()
  //   if (date) {
  //     return date.format('dddd')
  //   }
  //   return null
  // }

  return (
    <div className="widget widget--clock">
      <div id="clock">
        <p class="date">{_getDate()}</p>
        <p class="time">{_getTime()}</p>
      </div>
    </div>
  ) 
}

export default WidgetClock