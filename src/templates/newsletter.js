import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { NewsletterForm } from "../components/common/NewsletterForm"
import ogImage from "../images/Learn-With-Me-OG-Image.jpg"
import Button from "../components/atoms/button"
import Drips from "../components/atoms/drips"

const Newsletter = ({
  data,
  pageContext: { recentEmails, subscriberCount },
}) => {
  const ref = React.createRef()

  return (
    <Layout footerCTA={false}>
      <SEO
        title="Learn _____ With Me | Newsletter Sign Up"
        image={ogImage}
        description="Sign Up for my newsletter and learn about Web Development, Graphic Design, Automation, & More!"
      />
      <section className="half white">
        <NewsletterForm ref={ref} />
      </section>

      <section className="slim pink">
        <Drips color="black" wrapperHeight="100%"/>
        <h2>
          I only send{" "}
          <span title="For Legal Reasons, This Is A JOKE.">
            EXPERTLY CRAFTED EMAILS
          </span>{" "}
          like:
        </h2>

        <div className="recentEmails">
          {recentEmails.map(({ node: email }) => {
            return (
              <Link to={email.fields.slug} className="newsletter__card">
                <h3>{email.frontmatter.title}</h3>
                {email.frontmatter.subtitle && (
                  <h4>{email.frontmatter.subtitle}</h4>
                )}
              </Link>
            )
          })}
        </div>
        <h2>
          Get them before anyone else by{" "}
          <button
            style={{ cursor: "pointer", fontSize:"inherit", display:"inline", border: "none", background: "none", fontFamily: "inherit", color: "inherit", textDecoration: "underline", padding: 0 }}
            onClick={() => {
              ref.current.focus()
              window.scrollTo(0, 0)

            }}
          >
            Signing Up
          </button>
          !
        </h2>
      </section>
      <section className="half black count-cta">
        <h1>Join {subscriberCount} Other Subscribers Today!</h1>
        <Button
          onClick={() => {
            ref.current.focus()
            window.scrollTo(0, 0)

          }}
          size="large"
          label="Let's Go!!!"
        />
      </section>
    </Layout>
  )
}

export default Newsletter