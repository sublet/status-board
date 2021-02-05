import React, { Fragment } from 'react'

import StatusRow from 'components/StatusRow'

import WidgetStocks from 'components/WidgetStocks'
import WidgetClock from 'components/WidgetClock'
import WidgetCalendarDay from 'components/WidgetCalendarDay'
import WidgetClockRotary from 'components/WidgetClockRotary'
import WidgetStat from 'components/WidgetStat'
import WidgetWeather from 'components/WidgetWeather'

const stocksData = [
  { type: 'STOCK', symbol: 'APHA', units: 3500 },
  { type: 'CRYPTO', symbol: 'BINANCE:ETHUSDC', units: 51.043923 },
  { type: 'CRYPTO', symbol: 'BINANCE:BTCUSDT', units: 1.54624153 },
]

const Home = props => {

  const stocks = <WidgetStocks data={stocksData} />
  const weather = <WidgetWeather apiKey="6e813da811510cc0b5bdd20f6b65d519" zipCode="07052" />
  const stat1 = <WidgetStat />
  // const clockEasternDigital = <WidgetClock location="America/New_York" locationText="New York, NY" />
  const clockEasten = <WidgetClockRotary location="America/New_York" locationText="New York, NY" />
  const clockPacific = <WidgetClockRotary location="America/Los_Angeles" locationText="Santa Monica, CA" />
  const calendarDay = <WidgetCalendarDay location="America/New_York" locationText="New York, NY" />
  // const closkPacific = <WidgetClock location="America/Los_Angeles" locationText="Santa Monica, NY" />

  return (
    <Fragment>
      <StatusRow widgets={[weather,stocks,clockEasten,clockPacific,calendarDay,stat1]} />
    </Fragment>
  ) 
}

export default Home