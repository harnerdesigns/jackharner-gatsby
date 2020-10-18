import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Success = () => {
return (
    <Layout footerCTA={false}>
      <SEO title="Thanks For Signing Up" />
      <section className="half black">
        <FontAwesomeIcon icon="envelope" style={{fontSize: "15rem", margin: "4rem", color: "var(--color)"}} />
          <h1>Thanks For Signing Up!</h1>
          <p>Make sure to click the link we just sent you to confirm your email.</p>
      </section>
    </Layout>
  )
}

export default Success

