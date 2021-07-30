import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import Shuffler from "../components/verts/shuffler"

const verts = () => {
  return (
    <Layout>
      <SEO title="Affiliate Links" />
      <PageTitle>My Affiliate Links</PageTitle>
      <section className="slim content black">
      <h3>If you want to help support Me and My Content, feel free to check out some of the places I'm an affiliate for.</h3>
      <p>If you click through any of these links and make a purchase, I get a percentage of your purchase total at no extra cost to you. I only affiliate with companies that I personally use and can vouch for.</p>
      </section>
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
