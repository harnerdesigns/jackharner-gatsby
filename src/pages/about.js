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
import Drips from "../components/atoms/drips"
import FreelanceCountdown from "../components/freelanceCountdown"

const About = () => {

  return (
    <Layout>
      <SEO title="My Life As A Freelance Developer" />
      <PageTitle>My Life As A Freelance Developer</PageTitle>
      <section className="half content black">
        <h2>Hi! My Name is Jack.</h2>
        <h3>I'm a Freelance Web Developer based in Denver, CO.</h3>
        <p>
          If you access it through a web browser, I can probably build it. I'm
          just trying to make cool stuff with my friends, but I've been professionally developing websites for over a decade.{" "}
        </p>
      </section>
      <section className="slim  black">
        <ImageGrid images={[Chief, Sara, BabyKitty]} />
        <Drips color={"var(--color)"} wrapperHeight={"35%"} />

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
      <section className="full pink">
        <h2>A long time later...</h2>
      </section>
      <section className="content half pink">
        <Drips color={"black"} wrapperHeight={"35%"} />
        <p>
          In the time that it took you to scroll down, I developed a passion for
          clean, responsive design. I made the pretty natural progression from
          HTML/CSS to learning about Javascript and the DOM, and then on to more
          of the backend side of things with WordPress/PHP.
        </p>
        <p>
          <em>Finally</em>, I was able to build full websites and totally custom
          applications with a user friendly interface for adding and updating
          content, accessible by all levels of tech-savvy users.
        </p>
      </section>
      
      <section class="slim content">
        <FreelanceCountdown drips={"var(--color)"} />
      </section>


      <section className="content full pink">
        <Drips color={"white"} wrapperHeight={"35%"} />
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
          React, Node & Shopify. E-Commerce continues to be a massively growing
          industry, and all manner of stores are popping up.
        </p>

        <p>
          I <a href="/blog">blog</a> about pretty much everything I learn down
          this path. Mostly as a reference for myself for later, but also with
          the hopes of helping someone after me working through the same
          problems.
        </p>
      </section>
      <section className="content half white">
        <h2>Outside The Internet</h2>

        <p>
          When I'm not glued to the computer, I spend my time playing disc golf,
          taking photos of my surroundings (Check me out on{" "}
          <a href="https://unsplash.com/@jackharner">Unsplash</a>), and enjoying
          the beautiful Rocky Mountains.
        </p>
        <h2>If You Want More Of Me...</h2>
        <p>
          Give me a follow on BlueSky,{" "}
          <a href="https://bsky.app/profile/jackharner.com">@JackHarner</a>, Instagram,{" "}
          <a href="https://instagram.com/jackharner">@JackHarner</a>, or check
          out my <Link to="/blog">Blog</Link>.{" "}
        </p>
      </section>
    </Layout>
  )
}

export default About
