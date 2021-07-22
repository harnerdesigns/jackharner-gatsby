import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Shuffler from "../components/verts/shuffler"

const verts = () => {
  return (
    <Layout>
      <SEO title="verts" />
      <PageTitle>verts</PageTitle>
      <section className="half verts black">
        <Shuffler index={1} />
        
        <Shuffler index={2} />
        
        <Shuffler index={3} />
        
        <Shuffler index={4} />
        
        <Shuffler index={5} />
        
        <Shuffler index={6} />
        
        <Shuffler index={7} />
      </section>
    </Layout>
  )
}

export default verts
