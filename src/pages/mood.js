import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoesRight from "../components/mood/goesRight"

const Mood = () => (
  <Layout>
    <SEO title="Mood" />
    <GoesRight />
  </Layout>
)

export default Mood 
