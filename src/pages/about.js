import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <main className="page_body">
    <h1>About Me</h1>
    <p>My Name is Jack. I'm a Web Developer based in Albuquerque, NM. I like making stuff with WordPress, learning new things in Web Dev (these days it's React), playing Overwatch, &  taking care of my girlfriend and our three cats.</p>

    <p>I got my start in web development a really long time ago in a far off land called NeoPets. They would give you a single HTML file to play with, and play with it I did. I learned the basics of Typography, Layout, complete with way to many <code>&lt;blink&gt;</code> & <code>&lt;marquee&gt;</code> tags. </p>

    <p>Since then I've developed a passion for clean, responsive design. I made the pretty natural progression from HTML/CSS to learning about Javascript and the DOM, and then on to more of the backend side of things with WordPress/PHP.</p>
    <p><b>Finally</b>, I was able to build full websites and applications with a friendly user interface for adding and updating content for the less tech-savvy users.</p>
    <p>I could do it all.</p>
    <p>Or so I thought...</p>

    </main>
  </Layout>
)

export default About 
