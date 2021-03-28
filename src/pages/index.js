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
const getPixelRatio = context => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1

  return (window.devicePixelRatio || 1) / backingStore
}

const IndexPage = ({ data, pageContext }) => {
  const [particles, setParticles] = useState([
    {
      x: "100px", //x-coordinate
      y: "100px", //y-coordinate
      size: 5,
      frame: 0,
      angle: 0,
    },
  ]);
  const { edges: posts } = data.allMarkdownRemark
  const { photos } = data.photoRoll.frontmatter
  const { quotes } = data.testimonies.frontmatter
  let blogPosts = posts.filter(post => post.node.fields.collection === "blog")
  let portfolioPosts = posts.filter(
    post => post.node.fields.collection === "portfolio"
  )
  let canvasRef = useRef()

  useEffect(() => {
    let canvas = canvasRef.current
    let ctx = canvas.getContext("2d")
    var W = window.innerWidth
    var H = window.innerHeight
    canvas.width = W
    canvas.height = H

    let requestId
    const draw = () => {
      requestId = requestAnimationFrame(draw)
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      var color = getComputedStyle(document.body).getPropertyValue("--color")
      particles.forEach(function(p, i) {
        let countUp = true;
        ctx.save()
        // ctx.translate(clickX, clickY);
        ctx.beginPath()
        ctx.strokeStyle = color

        ctx.lineWidth = 2;
        ctx.globalAlpha = p.frame;
        // ctx.lineCap = "round
        let endPoint = Math.random() * Math.PI;
        ctx.arc(p.x, p.y, p.size, p.angle * Math.PI, endPoint)

        if (p.frame % 1 === 0){

          ctx.stroke()
          // ctx.fill()
        }

        particles[i] = {
          x: p.x, //x-coordinate
          y: p.y, //y-coordinate
          size: p.size + 24 / 2,
          frame: p.frame + 1,
          angle: p.angle + Math.random(),
        }

        ctx.restore()

        if ( p.frame > 100) {
        ctx.arc(p.x, p.y, p.size, p.angle * Math.PI, 2 * Math.PI)
        ctx.fillStyle = "rgba(0,0,0,0.03)"

          ctx.fill();
        }

        if ( p.frame >= 200) {
          // ctx.fillStyle = "rgba(0,0,0, 1)";
          countUp = false;

          setParticles([
            {
              x: Math.random() * window.innerWidth, //x-coordinate
              y: Math.random() * window.innerHeight, //y-coordinate
              size: 5,
              frame: 0,
              angle: Math.random() * 1,
            },
          ])
        }
      })
    }
    draw()
    return () => {
      cancelAnimationFrame(requestId)
    }
  })
  const canvasClick = e => {
    let cursorX = e.pageX
    let cursorY = e.pageY
    console.log(particles)
    setParticles([
      ...particles,
      {
        x: cursorX, //x-coordinate
        y: cursorY, //y-coordinate
        size: 1,
        frame: 0,
      },
    ])
  }
  return (
    <Layout>
      <SEO title="Jack Of All Trades, Master Of Some" />
      <section className="full black intro">
        <canvas
          ref={canvasRef}
          id="introbg_animation"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></canvas>
        <section className="introduction" style={{ zIndex: 2 }}>
          <h1>
            Hi, I'm <b>Jack&nbsp;Harner</b>
          </h1>
          <h2>Jack of All Trades, Master of Some</h2>
          {/* <ImASlider /> */}
          <div className="buttons" style={{ width: "50%" }}>
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
            label="See My Work »"
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
      <section className="half pink">
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
