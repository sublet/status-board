import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

/**
 * Notes
 * 
 * - https://www.geeksforgeeks.org/how-to-convert-date-to-another-timezone-in-javascript/
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 
 */

const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

const WidgetClock = props => {
  const [dateTime, setDateTime] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date())
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const _getDateInstance = () => {
    // if (dateTime) {
    //   console.log(dateTime.toString())
    //   const str = dateTime.toLocaleString("en-US", {timeZone: "America/New_York"}) 
    //   console.log(str)
    // }
    return moment().tz(props.location);
    // return 
  }

  const _getDate = () => {
    const date = _getDateInstance()
    if (date) {
      // const month = date.getUTCMonth()
      // const day = date.getUTCDay()
      // const year = date.getUTCFullYear()
      // return `${months[month]} ${day}, ${year}`
      return date.format('MMMM Do, YYYY')
    }
    return null
  }

  const _getTime = () => {
    const date = _getDateInstance()
    if (date) {
      // let timeOfDay = 'AM'
      // let hours = date.getUTCHours()
      // if (hours >= 12) {
      //   timeOfDay = 'PM'
      //   if (hours > 12) hours = hours - 12
      // }
      // let minutes = date.getUTCMinutes()
      // minutes = minutes < 10 ? `0${minutes}` : minutes
      // let seconds = date.getUTCSeconds()
      // seconds = seconds < 10 ? `0${seconds}` : seconds
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
    <div className="widget">
      <div>
        <p>{_getDay()}</p>
        <p>{_getDate()}</p>
      </div>
      <div>
        {_getTime()}
      </div>
      <div>
        {props.locationText}
      </div>
    </div>
  ) 
}

export default WidgetClock