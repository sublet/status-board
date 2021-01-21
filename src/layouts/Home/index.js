import React, { Fragment } from 'react'

import StatusRow from 'components/StatusRow'

import WidgetClock from 'components/WidgetClock'
import WidgetClockRotary from 'components/WidgetClockRotary'
import WidgetStat from 'components/WidgetStat'
import WidgetWeather from 'components/WidgetWeather'

const Home = props => {

  const weather = <WidgetWeather apiKey="4396d83008e8fffd5da04d56eba9faba" zipCode="07052" />
  const stat1 = <WidgetStat />
  const clockEaster = <WidgetClockRotary location="America/New_York" locationText="New York, NY" />
  const closkPacific = <WidgetClock location="America/Los_Angeles" locationText="Santa Monica, NY" />

  return (
    <Fragment>
      <StatusRow widgets={[clockEaster,closkPacific,stat1,weather]} />
    </Fragment>
  ) 
}

export default Home