import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import PageTitle from "../../components/pageTitle"
import Seo from "../../components/seo"
import ReadyToGo from "../../components/ready-to-go"


const Services = () => {

  return (
    <Layout footerCTA={false} className={"service"}>
      <Seo title="Web Development & E-Commerce Services" />
      <PageTitle>Web Development & E-Commerce Services</PageTitle>
      <section className="slim black content--centered">
        <div className="grid" style={{alignItems: "center", justifyContent: "center"}}>
          <div>
            <h2>Need an extra hand with your E-Commerce Agency?</h2>
            <h3>Drop me in with your existing clients today! <Link to="/hire-me">Let's Chat &raquo;</Link></h3>
          </div>
        </div>
      </section>



      <ReadyToGo />

    </Layout>
  )
}

export default Services


