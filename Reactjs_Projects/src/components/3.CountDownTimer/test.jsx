import React from 'react'
import CountdownTimer from '.'
import './timer.css'

function CountdownTimerTest() {

  function handleTimeFinish() {
    console.log('Ones the timer is finished I wanted to make an api call and save some data to the database');
  }
  return (
    <div className='countdown-timer-container'>
      <h1>CountDown Timer</h1>
      <CountdownTimer initialTime={300} onTimeFinish={handleTimeFinish} />
    </div>
  )
}

export default CountdownTimerTest
