import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { set, toLower } from "lodash"
import { CalendlyEventListener, InlineWidget } from "react-calendly"
import Typing from "../components/Typing"

const Schedule = ({ data }) => {
  const [showEmbed, setShowEmbed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState(false)
  const [height, setHeight] = useState("75vh")
  let embedOrPassword

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    if (
      toLower(password) === "jackjack" ||
      urlParams.get("key") === "jackjack"
    ) {
      setShowEmbed(true)
      setLoading(true)
      setPassword(null)
    }
  }, [password])

  if (showEmbed) {
    embedOrPassword = Embed(loading, setLoading, height, setHeight)
  } else {
    embedOrPassword = (
      <>
        <h2>What's The Magic Word?</h2>
        <p>
          A little spam prevention measure.{" "}
          <Link to="/contact">Contact Me</Link> to get calendar access.
        </p>
        <input
          type="password"
          id="calendar-lock"
          placeholder="Calendar Password"
          onChange={e => {
            setPassword(e.target.value)
          }}
        />
      </>
    )
  }

  return (
    <Layout>
      <SEO title="Schedule" />
      <PageTitle>Drop Something On My Calendar</PageTitle>
      <section className="half black">{embedOrPassword}</section>
    </Layout>
  )
}

export default Schedule

const Embed = (loading, setLoading, height, setHeight) => {
  return (
    <>
      <CalendlyEventListener
        onDateAndTimeSelected={e => {
          console.log(e)
          setHeight("100vh")
        }}
        onEventScheduled={e => {
          console.log(e)
          setHeight("75vh")
        }}
        onEventTypeViewed={function noRefCheck() {
          setLoading(false)
          setHeight("75vh")
        }}
      >
        <InlineWidget
          url="https://calendly.com/jackharner/freelance?hide_event_type_details=1&hide_gdpr_banner=1"
          styles={{
            height: height,
          }}
        />
      </CalendlyEventListener>
      {loading && (
        <div className="loading-screen">
          <h2>
            Sit Tight... Fetching my calendar
            <Typing words={["..."]} />
          </h2>
        </div>
      )}
    </>
  )
}
