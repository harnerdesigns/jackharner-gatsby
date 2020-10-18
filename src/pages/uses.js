import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"

const Uses = ({data}) => {

    const post = data.markdownRemark
    return(<Layout>
        <SEO title={post.frontmatter.title + " - /uses"} />
        <PageTitle>{post.frontmatter.title}</PageTitle>
        <section className="slim black">
            <main className="post__body uses-page" dangerouslySetInnerHTML={{ __html: post.html }} />

        </section>

    </Layout>)
}

export default Uses 


export const pageQuery = graphql`
query UsesPageQuery {
  markdownRemark(fileAbsolutePath: {regex: "/uses.md/"}) {
    frontmatter {
      title
    }
    html
    
  }
}
`