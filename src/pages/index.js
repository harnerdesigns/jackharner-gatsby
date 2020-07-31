import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"
import ProjectCard from "../components/portfolio/projectCard"
import BlogCard from "../components/blog/blogCard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, graphql } from "gatsby"
import Button from "../components/atoms/button"
import PhotoRoll from "../components/PhotoRoll"

const IndexPage = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { photos } = data.photoRoll.frontmatter
  let blogPosts = posts.filter(post => post.node.fields.collection === "blog")
  let portfolioPosts = posts.filter(
    post => post.node.fields.collection === "portfolio"
  )

  return (
    <Layout>
      <SEO title="Jack Harner" />
      <container className="full black intro">
        <section className="introduction">
          <h1>
            Hi, I'm <b>Jack&nbsp;Harner</b>
          </h1>
          <h2>Jack of All Trades, Master of Some</h2>
          <ImASlider />
          <div className="buttons" style={{ width: "50%" }}>
            <Button label={"See My Work"} href="/portfolio" white />
            <Button label={"Let's Chat »"} href="/contact" />
          </div>
        </section>
        <FontAwesomeIcon icon="caret-down" id="scrollIndicator" />
      </container>
      <container className="half pink row">

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
          <Link to="/portfolio" className="more-link">My Full Portfolio &raquo;</Link>

        </div>
        <div className="column">

        <h1 >I Make Websites.</h1>
        <p >
          I work primarily with{" "}
          <Link to="/portfolio/tags/word-press/">WordPress</Link> &{" "}
          <Link to="/portfolio/tags/php/">PHP</Link> with an emphasis on clean,
          responsive design. On the flip side, I do love me some good 'ole
          fashioned <Link to="/portfolio/tags/html/">HTML</Link>/
          <Link to="/portfolio/tags/css/">CSS</Link>.
        </p>
        <p>
          I'm currently diving in to all things React, Gatsby, Accessibility, &
          Modern Web Development.
        </p>
        </div>

      </container>
      <container className="full white row">
        <div className="column">

        <h1>I Learn In Public.</h1>

        <p>
          Now and then, I write about <Link to="/blog">Web Development</Link>, <Link to="/blog/tags/automation/">Automation</Link> &{" "}
          <a href="https://bleedingcoffee.com">Coffee</a>. By sharing my
          understanding of a particular topic, I can possibly give the people learning after
          me a fresh perspective on a problem and possible solutions.
        </p>
        <p><Link to="/newsletter">Sign Up For My Newsletter</Link> and Learn With Me. I send out weekly emails to help you level up your programming. <Link to="/newsletter">Sign Up Now</Link>!</p>
        </div>
        <div className="blog-posts">
          {blogPosts.map(({ node: post }, index) => {
            if (index <= 2) {
              return <BlogCard post={post} index={index} />
            } else {
              return false
            }
          })}
          <Link to="/blog"  className="more-link">See The Blog &raquo;</Link>
        </div>
      </container>
      <container className="half black">
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
      </container>
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
      filter: { fields: { published: { eq: true } } }
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
  }
`
