import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NewsletterForm } from "../components/common/NewsletterForm"
import  ogImage from "../images/Learn-With-Me-OG-Image.jpg"
import Button from "../components/atoms/button"





const About = ({ data, pageContext }) => {
  const { recentEmails, subscriberCount } = pageContext
  console.log(recentEmails)
  const ref = React.createRef();

  return (
    <Layout footerCTA={false}>
      <SEO title="Learn _____ With Me" image={ogImage} description="Sign Up for my newsletter and learn about Web Development, Graphic Design, Automation, & More!" />
      <container className="half white">

        <NewsletterForm ref={ref} />
      </container>

      <container className="slim pink">
        <h2>I only send <span title="For Legal Reasons, This Is A JOKE.">EXPERTLY CRAFTED EMAILS</span> like:</h2>

        <div className="recentEmails">
          {recentEmails.map(({ node: email }) => {
            return (
              <Link to={email.fields.slug} className="newsletter__card">
                <h3>{email.frontmatter.title}</h3>
                {email.frontmatter.subtitle && <h4>{email.frontmatter.subtitle}</h4>}
              </Link>
            )
          })}
        </div>
        <h2>Get them before anyone else by <a style={{cursor: 'pointer'}} onClick={() => {ref.current.focus()}} >Signing Up</a>!</h2>

      </container>
      <container className="half black">


          <h1>Join {subscriberCount} other subscribers today!</h1>
          <Button onClick={() => {ref.current.focus()}} size="large" extraStyle={{width: "50%"}} label="Let's Go!!!"/>

      </container>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query MailingListQuery {
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
