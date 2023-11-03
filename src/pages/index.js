import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectCard from "../components/portfolio/projectCard"
import BlogCard from "../components/blog/blogCard"

import { Link, graphql } from "gatsby"
import Button from "../components/atoms/button"
import Quotes from "../components/testimonies/quotes"
import CanvasBG from "../components/canvasBG"
import FreelanceCountdown from "../components/freelanceCountdown"
import styled from "styled-components"

import { breakpoints } from "../components/breakpoints"
import Drips from "../components/atoms/drips"
import { StaticImage } from "gatsby-plugin-image"

import ShopifyPartner from "../images/logos/ShopifyPartners.svg"
import BCPartner from "../images/logos/BCPartners.png"


const IndexPage = ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark
  const { quotes } = data.testimonies.frontmatter
  let blogPosts = posts.filter(post => post.node.fields.collection === "blog")
  let portfolioPosts = posts.filter(
    post => post.node.fields.collection === "portfolio"
  )

  return (
    <Layout footerCTA={false}>
      <Seo title="Jack Of All Trades, Master Of Some" titleTemplate={"Jack Harner | Web & E-Commerce Developer"} />
      <section className="full white--wavy-5 black intro">
        <IntroGrid style={{ zIndex: 1 }}>
          <Drips color="#fff" wrapperHeight="40%" style={{ zIndex: 2 }} />
          <CanvasBG />
          <ImageWrapper>
            <StaticImage src="../images/jack-sm.png" placeholder="blurred" alt="Jack Harner" />
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
      <section className="half white row">
        <div className="column">
        <h2>E-Commerce Consultant</h2>
          <p>
            Whether your company is just getting started selling online, or you're looking to grow your online presence, I can help! I build hyper-custom, "dive into the darkest corners of the platform"-type themes and tools for both <Link to="/services/shopify">Shopify</Link> & <Link to="services/bigcommerce">BigCommerce</Link>.
          </p>
          <div className="partner-logos grid grid--2">
            <div className="grid"><img src={ShopifyPartner} alt="Shopify Partner" /></div>
            <div className="grid"><img src={BCPartner} alt="BigCommerce Partner" /></div>
          </div>
          <h2>Professional Problem Solver</h2>
          <p>
            Let me solve all your company's problems with code! (ok, maybe not every problem...) From fixing on-page SEO bugs, to revamping entire websites, I can supercharge your business's online presence with designs SO user friendly, even your grandma will go "Wow! This moving telegram is pretty spiffy".
          </p>
      

          <h2>Let's Get Started</h2>
          <p>
            <Link to="/hire-me">Answer a few quick questions</Link>, and let's
            figure out how I can help you start selling better online.
          </p>
        </div>
        <div className="recent-projects">
          {portfolioPosts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              if (index <= 6) {
                return <ProjectCard post={post} index={index} small />
              } else {
                return false
              }
            })}
          <Link to="/portfolio" class="project__link" style={{ "background": "var(--color)", color: "var(--text-color)" }}>
            View More Projects &raquo;
          </Link>
        </div>

      </section>
      
      <section className="half pink black--wavy quotes__wrapper">
        <Drips color="black" slim />

        <h2>A Man Of The People // <Link to="/why-me">Why Hire Jack Harner?</Link></h2>
        <Quotes quotes={quotes} seeMore={true} />
        
      </section>
      <section className="half black">
        <h2>If you made it this far, here's a really big button you should click on:</h2>
        <Link to="/hire-me" className="button button--primary button--x-x-large">HIRE JACK&nbsp;HARNER&nbsp;&raquo;</Link>
      </section>


     
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`query HomePageQuery {
  allMarkdownRemark(
    sort: [{fields: {weight: DESC}}, {frontmatter: {date: DESC}}]
    filter: {fields: {published: {eq: true}, unlisted: {ne: true}}}
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
          updated(formatString: "MMMM DD, YYYY")
          tags
          published
          featuredImage {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 350, transformOptions: {fit: COVER})
            }
          }
          logo {
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 80, transformOptions: {fit: COVER})
            }
          }
        }
        fields {
          slug
          collection
          externalLink
          published
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
  testimonies: markdownRemark(frontmatter: {title: {eq: "Testimonies"}}) {
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
}`

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
  margin: -5rem 0;

  @media ${breakpoints.tablet} {
    margin: -10rem 0 -2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
  }
`
