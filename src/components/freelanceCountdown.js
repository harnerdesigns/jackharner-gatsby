import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React, { useEffect, useState } from "react"

import styled from "styled-components"
import { breakpoints } from "./breakpoints"

const FreelanceCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({})
  const calculateTimeLeft = () => {
    const difference =  +new Date() - +new Date(`2021-04-30T16:00:00.000-06:00`)


    let timeLeft = 
       {
        days:    Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    
    return timeLeft
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach((interval, i) => {
    // if (!timeLeft[interval]) {
    //   return
    // }
    let string = timeLeft[interval]
    timerComponents.push(
      <>
        <CountdownNumber>{string.toString().padStart(2, "0")} <CountdownLabel>{interval}</CountdownLabel></CountdownNumber>
        <CountdownSeparator>{i === 3 ? "" : ":"}</CountdownSeparator>
      </>
    )
  })

  return (
    <section className="half black">
      <h1 style={{textAlign: "center"}}>I've Been Freelancing Full Time For:</h1>
      <CountdownWrapper>
        {timerComponents.length ? timerComponents : <FontAwesomeIcon icon="spinner" spin />}
      </CountdownWrapper>
      <h3 style={{textAlign: "center"}}>Hiring a contract Web Developer? <Link to="/contact">Let's Chat &raquo;</Link></h3>
    </section>
  )
}

export default FreelanceCountdown

const CountdownWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr auto) 1fr;
  grid-gap: 1ch;
  margin: 1rem auto;

  h1 {
    text-align: center;
  }
`

const CountdownNumber = styled.span`
  font-size: 3rem;
  font-weight: 900;
  /* vertical-align: middle; */
  width: 100%;
  line-height: 1;
  background: var(--color);
  color: var(--text-color);
  border-radius: var(--border-radius);
  padding: 0.5ch;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    font-size: 4rem;
  }
`

const CountdownLabel = styled.span`
font-size: 1.25rem;
font-weight: 400;
`

const CountdownSeparator = styled.span`
  font-size: 2.5rem;
  /* font-weight: 100; */
  line-height: 1;
  display: block;
`
