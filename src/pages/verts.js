import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Vert from "../components/verts/shuffler"

const verts = () => {

  return (
    <Layout>
      <SEO title="verts" />
      <PageTitle>verts</PageTitle>
      <section className="half content black">
       <Vert index={1} />
       <Vert index={2} />
       <Vert index={3} />
       <Vert index={4} />
       <Vert index={5} />
      </section>
    </Layout>
  )
}

export default verts

