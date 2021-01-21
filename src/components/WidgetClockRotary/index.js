import React, { useEffect, useRef, useState } from 'react'
import moment from 'moment-timezone'

import './styles.scss';

// https://codepen.io/kylewetton/pen/QJbOjw

const WidgetClockRotary = props => {
  const clockSecondEl = useRef(null);
  const clockMinuteEl = useRef(null);
  const clockHourEl = useRef(null);

  useEffect(() => {
    var currentSec = getSecondsToday();

    var seconds = (currentSec / 60) % 1;
    var minutes = (currentSec / 3600) % 1;
    var hours = (currentSec / 43200) % 1;

    setTime(60 * seconds, "second");
    setTime(3600 * minutes, "minute");
    setTime(43200 * hours, "hour");    
  })

  const _getDateInstance = () => {
    return moment().tz(props.location);
  }

  function setTime(left, hand) {
    if (hand === "second") clockSecondEl.current.style.animationDelay = "" + left * -1 + "s"
    if (hand === "minute") clockMinuteEl.current.style.animationDelay = "" + left * -1 + "s"
    if (hand === "hour") clockHourEl.current.style.animationDelay = "" + left * -1 + "s"
  }

  function getSecondsToday() {
    let nowMoment = _getDateInstance()
    let now = nowMoment.toDate()
    let today = nowMoment.startOf('day').toDate()
    let diff = now - today; 
    return Math.round(diff / 1000);
  }

  return (
    <div className="widget widget--rotaryClock">
      <div className="clock">
        <div className="clock__second" ref={clockSecondEl}></div>
        <div className="clock__minute" ref={clockMinuteEl}></div>
        <div className="clock__hour" ref={clockHourEl}></div>
        <div className="clock__axis"></div>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
          <section className="clock__indicator"></section>
      </div>
    </div>
  ) 
}

export default WidgetClockRotary