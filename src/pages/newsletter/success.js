import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import SEO from "../../components/seo"
import { NewsletterForm } from "../../components/common/NewsletterForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Success = () => {
return (
    <Layout footerCTA={false}>
      <SEO title="Thanks For Signing Up" />
      <container className="half black">
        <FontAwesomeIcon icon="envelope" style={{fontSize: "15rem", margin: "4rem", color: "var(--color)"}} />
          <h1>Thanks For Signing Up!</h1>
          <p>Make sure to click the link we just sent you to confirm your email.</p>
      </container>
    </Layout>
  )
}

export default Success

