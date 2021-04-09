import React, { useEffect, useRef, useState } from "react"

import styled from "styled-components"

const FreelanceCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({})
  const [year, setYear] = useState(new Date().getFullYear())
  const calculateTimeLeft = () => {

    const difference = +new Date(`4/30/${year} 22:00`) - +new Date() 

    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return timeLeft
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
      setYear(new Date().getFullYear())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, i )=> {
    // if (!timeLeft[interval]) {
    //   return
    // }
    let string = timeLeft[interval]
    timerComponents.push(
      <><CountdownNumber>
        {string.toString().padStart(2, '0')}
      </CountdownNumber>
      <CountdownSeparator>{(i == 3 ?  "" : ":")}</CountdownSeparator>
      </>
    )
  })

  return (
    <section className="half black">
      <h1>Countdown Till I Go Fulltime Freelance</h1>
      <CountdownWrapper>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </CountdownWrapper>
    </section>
  )
}

export default FreelanceCountdown

const CountdownWrapper = styled.div`

display: flex;
align-items: center;
justify-content: center;

`


const CountdownNumber = styled.span`
font-size: 4rem;
font-weight: 900;
/* vertical-align: middle; */
margin: 0.5ch;
line-height: 1;
background: var(--color);
color: var(--text-color);
padding: 0.5ch;

`

const CountdownSeparator = styled.span`

font-size: 2.5rem;
/* font-weight: 100; */
line-height: 1;
`