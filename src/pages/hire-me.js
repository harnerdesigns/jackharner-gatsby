import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Seo from "../components/seo"


const HireMe = () => {

  return (
    <Layout footerCTA={false}>
      <Seo title="Hire Me" />
      <PageTitle>Hire Me</PageTitle>
      <section className="slim black content content--centered">
        <h3>Thank you for your interest in my Web Development & E-Commerce Consulting Services!</h3>
        <p>Please fill out the form below to give me a better idea if we'd be a good fit and I'll be in touch shortly to schedule a free intro call.</p>
        <small>All information is absolutely confidential.</small>
      </section>

      <section className="slim black content content--centered">
        <iframe id="hire-me-form" src="https://app.hellobonsai.com/f/712488cba4c164a?embed=true&hide_header=true" frameborder="0" width="100%" height="100%" ></iframe>
      </section>

    </Layout>
  )
}

export default HireMe

