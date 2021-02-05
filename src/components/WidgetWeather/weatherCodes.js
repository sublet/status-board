/** 

// https://fontawesome.com/icons?d=gallery&q=weather
// https://openweathermap.org/weather-conditions

*/

export const getIcon = code => {
  console.log(code)
  if (code >= 200 && code <= 299) {
    return 'fad fa-thunderstorm' // Thunderstorms 
  } else if (code >= 300 && code <= 399) {
    return 'fad fa-cloud-drizzle' // Drizzle
  } else if (code >= 500 && code <= 599) {
    return 'fad fa-cloud-rain' // Rain
  } else if (code >= 600 && code <= 699) {
    return 'fad fa-snowflakes' // Snow
  } else if (code >= 700 && code <= 799) {
    return 'fad fa-fog' // Atmosphere
  } else if (code === 800) {
    return 'fad fa-sun' // Clear
  } else if (code >= 801 && code <= 899) {
    return 'fad fa-clouds' // Clouds
  }
  return ''
}

