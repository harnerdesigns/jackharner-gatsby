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
        <div className="grid" style={{ alignItems: "center", justifyContent: "center" }}>
          <div>
            <h2>I'm a bit of a Jack Of All Trades</h2>
            <h3>Here is a small selection of the services I offer.</h3>
          </div>
        </div>
      </section>

      <section className="slim pink content content--centered">

        <div className="grid grid--2 service__links">
          <Link className="big" to="/services/shopify">Shopify Development</Link>
          <Link className="big" to="/services/bigcommerce">BigCommerce Theme Development</Link>
          <Link className="big" to="/services/wordpress">WordPress Theme Development</Link>
          <Link className="big" to="/services/ghost-coding">Ghost Coding (White Label Web Development)</Link>

        </div>
        <div class="grid grid--3 service__links">
          <Link to="">Continuous Integration / Continuous Development (CI/CD)</Link>
          <Link to="">E-Commerce Consulting</Link>
          <Link to="">Website Redesigns</Link>
          <Link to="">Bug Fixes</Link>
          <Link to="">Site Speed Audits</Link>
          <Link to="">Digital Art Galleries</Link>
          <Link to="">Small Business Websites</Link>
          <Link to="">Big Business Websites</Link>
          <Link to="">Technical SEO Audits</Link>
          <Link to="">Scripting & Automation</Link>
          <Link to="">Code Review</Link>
          <Link to="">Taking Data From One Place and Moving It To Another</Link>
          <Link to="">Site Migrations</Link>
          <Link to="">Web Hosting</Link>
          <Link to="">Rubber Duck Debugging</Link>
          <Link to="">Product Tester</Link>
        </div>

        <h3>And pretty much anything else I can do with a computer.</h3>

      </section>

      <ReadyToGo />

    </Layout>
  )
}

export default Services


