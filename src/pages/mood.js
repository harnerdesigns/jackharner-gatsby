import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GoesRight from "../components/mood/goesRight"
import PageTitle from "../components/pageTitle";

const Mood = () => (
  <Layout>
    <SEO title="Mood" />
    <PageTitle>Mood</PageTitle>
    <GoesRight />
  </Layout>
)

export default Mood 
