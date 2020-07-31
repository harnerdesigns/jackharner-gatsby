import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Confirmed = () => {
return (
    <Layout footerCTA={false}>
      <SEO title="Thanks For Signing Up" />
      <container className="half black">
        <FontAwesomeIcon icon="envelope" style={{fontSize: "15rem", margin: "4rem", color: "var(--color)"}} />
          <h1>Thanks For Being Real!</h1>
      </container>
    </Layout>
  )
}

export default Confirmed


export const pageQuery = graphql`
  query ConfirmedQuery {
    photoRoll: markdownRemark(frontmatter: { title: { eq: "Photo Roll" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        photos {
          photo {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
