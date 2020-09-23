import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Confirmed = () => {
return (
    <Layout footerCTA={false}>
      <SEO title="Thanks For Signing Up" />
      <container className="half black">
        <FontAwesomeIcon icon="envelope" style={{fontSize: "15rem", margin: "4rem", color: "var(--color)"}} />
          <h1>Thanks For Being Real!</h1>
      </container>
    </Layout>
  )
}

export default Confirmed

