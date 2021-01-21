import React, { Fragment } from 'react'

import StatusRow from 'components/StatusRow'

import WidgetClock from 'components/WidgetClock'
import WidgetStat from 'components/WidgetStat'
import WidgetWeather from 'components/WidgetWeather'

const Home = props => {

  const weather = <WidgetWeather apiKey="4396d83008e8fffd5da04d56eba9faba" zipCode="07052" />
  const stat1 = <WidgetStat />
  const stat2 = <WidgetStat />
  const clock = <WidgetClock location="America/New_York" locationText="New York, NY" />

  return (
    <Fragment>
      <StatusRow widgets={[clock,stat1,stat2,weather]} />
    </Fragment>
  ) 
}

export default Home