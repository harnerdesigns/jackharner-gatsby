import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"
import ProjectCard from "../components/portfolio/projectCard"
import BlogCard from "../components/blog/blogCard"

import { Link, graphql } from "gatsby"
import Button from "../components/atoms/button"
import PhotoRoll from "../components/PhotoRoll"
import Quotes from "../components/testimonies/quotes"
import CanvasBG from "../components/canvasBG"
import FreelanceCountdown from "../components/freelanceCountdown"
import styled from "styled-components"

import jack from "../images/jack.png"
import { breakpoints } from "../components/breakpoints"
import Drips from "../components/atoms/drips"

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
      <SEO title="Jack Of All Trades, Master Of Some" titleTemplate={"Jack Harner | Web & E-Commerce Developer"} />
      <section className="full white--wavy-5 black intro">
        <IntroGrid style={{ zIndex: 1 }}>
          <Drips color="#fff" wrapperHeight="40%" style={{zIndex: 3}} />
          <CanvasBG />
          <ImageWrapper>
            <img src={jack} alt="Jack Harner" />
          </ImageWrapper>
          <section className="introduction" style={{ zIndex: 2 }}>
            <h1>
              Hi, I'm <b>Jack&nbsp;Harner</b>
            </h1>

            <h2>Helping You Sell Better Online</h2>
            <h3>Web Development & E-Commerce Consulting</h3>

            <div className="buttons">
              <Button label={"Hire Me »"} to="/hire-me" />
            </div>
          </section>
        </IntroGrid>
      </section>

        {/* <section className="no-padding white full-width content content--centered" style={{gridColumn: "1 / -1"}}>
      <h2>Jack of All Trades, Master of Some</h2>
            <ImASlider />
      </section> */}
      <section className="half white row row--mobile-reverse">
        <div className="recent-projects">
          {portfolioPosts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              if (index <= 5) {
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

          <h2>Freelance Web Developer</h2>
          <p>
            Access it through a web browser? I can build it with an emphasis on clean, responsive design. From simple landing pages to E-Commerce stores & everything in between.
          </p>

          <h2>E-Commerce Consultant</h2>

          <p>
            Whether your company is just getting started selling online, or
            you're looking to grow your online presence, I can help! I've built custom themes and tools for both <Link to="/services/shopify">Shopify</Link> & <Link to="services/bigcommerce">BigCommerce</Link>. 
          </p>

          <h2>Let's Get Started</h2>

          <p>
            <Link to="/hire-me">Answer a few quick questions</Link>, and let's
            figure out how I can help you start selling better online.
          </p>
        </div>
      </section>
      <section className="half pink black--wavy quotes__wrapper">
        <Drips color="black" slim />

        <h1>A Man Of The People</h1>

        <Quotes quotes={quotes} />
      </section>

      
      <section className="half black">
        <FreelanceCountdown />
        <h3 style={{textAlign: "center"}}>
          Hiring a contract Web Developer? <Link to="/hire-me">Let's Chat &raquo;</Link>
        </h3>
      </section>
      <section className="full white row">
        <Drips color="black" slim />

        <div className="column" style={{ marginBottom: "10rem" }}>
          <h1>I Learn In Public.</h1>

          <p>
            I write about <Link to="/blog">Web Development</Link>,{" "}
            <Link to="/blog/tags/automation/">Automation</Link> &{" "}
            <Link to="/blog/tags/freelance/">Freelancing</Link>. By sharing my
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
      {/* <section className="full black">
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
      </section> */}
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
          title
        }
      }
    }
  }
`

const IntroGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  z-index: 2;
  margin-bottom: 5rem;

  @media ${breakpoints.tablet} {
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin-bottom: 2rem;
  }

  @media ${breakpoints.laptop} {
    grid-template-columns: 2fr 3fr;
    align-items: center;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  pointer-events: none;
  display: flex;
  z-index: 1 !important;
  align-self: flex-end;
  margin: -2rem 0;

  @media ${breakpoints.tablet} {
    margin: -4rem 0 -2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
  }
`
