import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"
import ProjectCard from "../components/portfolio/projectCard"
import BlogCard from "../components/blog/blogCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, graphql } from "gatsby"
import Button from "../components/atoms/button"
import PhotoRoll from "../components/PhotoRoll"
import Quotes from "../components/testimonies/quotes"
import { useRef } from "react"
import CanvasBG from "../components/canvasBG"

const IndexPage = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { photos } = data.photoRoll.frontmatter
  const { quotes } = data.testimonies.frontmatter
  let blogPosts = posts.filter(post => post.node.fields.collection === "blog")
  let portfolioPosts = posts.filter(
    post => post.node.fields.collection === "portfolio"
  )

  return (
    <Layout>
      <SEO title="Jack Of All Trades, Master Of Some" />
      <section className="full black intro">
        <CanvasBG />
        <section className="introduction" style={{ zIndex: 2 }}>
          <h1>
            Hi, I'm <b>Jack&nbsp;Harner</b>
          </h1>
          <h2>Jack of All Trades, Master of Some</h2>
          <ImASlider /> 
          <div className="buttons">
            <Button label={"See My Work"} to="/portfolio" white />
            <Button label={"Let's Chat »"} to="/contact" />
          </div>
        </section>
        <FontAwesomeIcon
          icon="caret-down"
          id="scrollIndicator"
          style={{ zIndex: 3 }}
        />
      </section>
      <section className="half white row">
        <div className="recent-projects">
          {portfolioPosts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              if (index <= 3) {
                return <ProjectCard post={post} index={index} small />
              } else {
                return false
              }
            })}
          <Button
            to="/portfolio"
            extraStyle={{ gridColumn: "1 / -1" }}
            label="See More Work »"
            size="large"
          />
        </div>
        <div className="column">
          <h1>I'm a Full Stack Web Developer.</h1>
          <p>
            From E-Commerce Stores to Custom Business Applications & Everything
            In Between. If you access it through a web browser, I can build it
            with an emphasis on clean, responsive design.
          </p>
          <p>
            I work with <Link to="/portfolio/tags/shopify/">Shopify</Link>,{" "}
            <Link to="/portfolio/tags/word-press/">WordPress</Link>,{" "}
            <Link to="/portfolio/tags/php/">PHP</Link>,{" "}
            <Link to="/portfolio/tags/react/">React</Link>,{" "}
            <Link to="/portfolio/tags/node/">Node</Link>, Python & More.
          </p>
        </div>
      </section>
      <section className="half pink quotes__wrapper">
        <h1>A Man Of The People:</h1>

        <Quotes quotes={quotes} />
      </section>
      <section className="full white row">
        <div className="column">
          <h1>I Learn In Public.</h1>

          <p>
            I write about <Link to="/blog">Web Development</Link>,{" "}
            <Link to="/blog/tags/automation/">Automation</Link> &{" "}
            <a href="https://bleedingcoffee.com">Coffee</a>. By sharing my
            understanding of a particular topic, I give the people learning
            after me a fresh perspective on a problem and possible solutions.
          </p>
          <p>
            <Link to="/newsletter">Sign Up For My Newsletter</Link> and Learn
            With Me. I send out weekly-ish emails to help you level up your
            programming while I'm leveling up mine.{" "}
            <Link to="/newsletter">Sign Up Now</Link>!
          </p>
        </div>
        <div className="blog-posts" style={{ gridTemplateColumns: "1fr 1fr" }}>
          {blogPosts.map(({ node: post }, index) => {
            if (index <= 3) {
              return <BlogCard post={post} index={index} />
            } else {
              return false
            }
          })}
          <Button
            to="/blog"
            extraStyle={{ gridColumn: "1 / -1" }}
            label="See The Blog »"
            size="large"
          />
        </div>
      </section>
      <section className="full black">
        <h1
          style={{
            padding: "1rem",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          I Like Taking Photos, Too!
        </h1>
        <p>
          Landscapes, Food, Products, and My Cats.{" "}
          <a href="https://unsplash.com/@jackharner">
            Follow Me on Unsplash &raquo;
          </a>
        </p>
        <PhotoRoll photos={photos} />
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: {
        fields: [fields___weight, frontmatter___date]
        order: [DESC, DESC]
      }
      filter: { fields: { published: { eq: true }, unlisted: { ne: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            subtitle
            description
            color
            date(formatString: "MMMM DD, YYYY")
            tags
            published
            featuredImage {
              childImageSharp {
                resize(width: 500, height: 500, cropFocus: CENTER) {
                  src
                }
              }
            }
            logo {
              extension
              publicURL
            }
          }
          fields {
            slug
            collection
            externalLink
            published
          }
        }
      }
    }
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
          tag
        }
      }
    }
    testimonies: markdownRemark(frontmatter: { title: { eq: "Testimonies" } }) {
      fields {
        slug
      }
      frontmatter {
        title
        quotes {
          quote
          link
          by
        }
      }
    }
  }
`
