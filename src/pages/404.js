import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="full content black">
    <h1>:(</h1>
    <h1>NOT FOUND</h1>
    <p>You just hit a page that doesn&#39;t exist... the sadness.</p>
    <p><Link to="/contact">Contact Me</Link> if the problem persists.</p>
    </section>
  </Layout>
)

export default NotFoundPage
