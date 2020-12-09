import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import SEO from "../components/seo"
import ImageGrid from "../components/imageGrid"
import PhotoRoll from "../components/PhotoRoll"

// Images

import Sara from "../images/sara.jpg"
import Chief from "../images/chief.jpg"
import BabyKitty from "../images/baby-kitty.jpg"
import Returns from "../images/Shoolu-Returns-Portal-exchange.png"
import Shoolu from "../images/shoolu.png"
import ShooluSocial from "../images/Shoolu-social.jpg"

const About = ({ data }) => {
  const { photos } = data.photoRoll.frontmatter

  return (
    <Layout>
      <SEO title="About" />
      <PageTitle>About Me</PageTitle>
      <section className="half content black">
        <h2>Hi! My Name is Jack.</h2>
        <h3>I'm a Web Developer based in Albuquerque, NM.</h3>
        <p>
          I like making stuff with WordPress, learning new things in Web Dev
          (these days it's React), playing Overwatch / Valorant / Minecraft, & spending time with my three cats.
        </p>
      </section>
      <section className="slim  black">
        <ImageGrid images={[Chief, Sara, BabyKitty]} />
      </section>
      <section className="content slim pink">
        <h2>In The Beginning</h2>
        <p>
          I got my start in web development a really long time ago in a far off
          land called NeoPets. They would give you a single HTML file to play
          with, and play with it I did. I learned the basics of Typography,
          Layout, complete with way too many <code>&lt;blink&gt;</code> &{" "}
          <code>&lt;marquee&gt;</code> tags.{" "}
        </p>
      </section>
      <section className="half pink">
        <h2>A long time later...</h2>
      </section>
      <section className="content slim pink">
        <p>
          In the time that it took you to scroll down, I developed a passion for
          clean, responsive design. I made the pretty natural progression from
          HTML/CSS to learning about Javascript and the DOM, and then on to more
          of the backend side of things with WordPress/PHP.
        </p>
        <p>
          <em>Finally</em>, I was able to build full websites and totally custom
          applications with a friendly user interface for adding and updating
          content for all levels of tech-savvy users.
        </p>
      </section>

      <section className="content full white">
        <h2>Powering an E-Commerce Retail Store</h2>

        <p>
          I currently work for <a href="https://shoolu.com">Shoolu.com</a>, a
          rapidly growing E-Commerce Shoe Store. My title is technically
          Marketing Director, but it's a small company so I wear a lot of hats.
          My day to day tasks include (but are not limited to):
        </p>
      </section>
      <section className="slim white">
        <section className="task-grid">
          <h3>Maintaining and Updating the Website</h3>
          <p>
            Everything from Content Changes to totally redoing the navigation,
            if it has to do with the actual code powering the website, it's on
            me. Our store is powered by BigCommerce and uses a custom Stencil
            Theme, initially designed by Diztinct Inc, and then heavily
            customized by me.
          </p>
          <h3>Developing Internal and Customer Facing Tools</h3>
          <p>
            One of the most used things I made is the{" "}
            <a href="https://returns.shoolu.com">Returns Portal</a>. It's the
            place to get all your return & exchange related questions answered.
            The portal helped us drastically cut down on Customer calls and
            vastly improved the UX of our returns process.
          </p>
          <h3>Driving Traffic to the Site</h3>
          <p>
            PPC Campaigns, Social Media Marketing, Email Marketing, Email
            Automation Marketing, Content Marketing, Search Engine Optimization
            (SEO), Implementing the Rewards Program (coming soon), and more.
            Growing the site is really my job's main purpose, and everything
            else is just related to that. In my time here, we've continued to
            show year over year growth, an increase in organic visits, and an
            increase in sales.
          </p>

          <h3>And So Much More...</h3>
        </section>
        <ImageGrid images={[Shoolu, Returns, ShooluSocial]} />
      </section>

      <section className="content full black">
        <h2>Lifetime Learner</h2>

        <p>
          The internet is ever changing. The tech used to build things on the
          web is ever changing. So as developers, we're never really done
          learning. I like the idea that if you can explain the subject to
          someone else in a concise helpful manner, then you at least{" "}
          <em>k i n d of</em> know what you're talking about.{" "}
        </p>
        <p>
          Right now, the wind powering my self-learning sails is all things
          React. We're talking Redux, we're talking Gatsby, state, props,
          components, arrow functions, all the good stuff (still haven't even
          tried to dive into hooks yet).
        </p>

        <p>
          I <a href="https://harnerdesigns.com/blog">blog</a> about pretty much
          everything I learn down this path. Mostly as a reference for myself
          for later, but also with the hopes of helping someone after me working
          through the same problems.
        </p>
      </section>
      <section className="content slim white">
        <h2>Outside The Internet</h2>

        <p>
          When I'm not glued to the computer, I spend my time exploring the New
          Mexico Craft Beer scene (
          <a
            href="https://lacumbrebrewing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            La Cumbre
          </a>{" "}
          is the spot to go), taking photos of my surroundings (Check me out on{" "}
          <a href="https://unsplash.com/@jackharner">Unsplash</a>), and enjoying
          Albuquerque's 360 Days of Sun per year.{" "}
        </p>
      </section>

      <section className="slim white">
        <PhotoRoll photos={photos} />
      </section>
      <section className="content slim white">
        <h2>If You Want More Of Me...</h2>
        <p>
          Give me a follow on Twitter,{" "}
          <a href="https://twitter.com/jackharner">@JackHarner</a>, check out my{" "}
          <Link to="/blog">Blog</Link>, or some of the{" "}
          <a href="https://harnerdesigns.com">work I've done</a>.{" "}
        </p>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query AboutPageQuery {
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
