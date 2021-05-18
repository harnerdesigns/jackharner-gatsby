import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Shuffler from "../components/verts/shuffler"

const verts = () => {
  return (
    <Layout>
      <SEO title="verts" />
      <PageTitle>verts</PageTitle>
      <section className="half content black">
        <Shuffler index={1} />

        <hr />
        <Shuffler index={2} />
        <hr />

        <Shuffler index={3} />
        <hr />

        <Shuffler index={4} />
        <hr />

        <Shuffler index={5} />

        <hr />

        <Shuffler index={6} />
      </section>
    </Layout>
  )
}

export default verts
