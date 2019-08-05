import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageGrid from "../components/imageGrid"

import Sara from "../images/sara.jpg"
import Chief from "../images/chief.jpg"
import BabyKitty from "../images/baby-kitty.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <main className="page_body">
    <h1>About Me</h1>
    <p>My Name is Jack. I'm a Web Developer based in Albuquerque, NM. I like making stuff with WordPress, learning new things in Web Dev (these days it's React), playing Overwatch, &  taking care of my girlfriend and our three cats.</p>


    <ImageGrid images={[Chief, Sara, BabyKitty]}/>

    
  <h2>In The Beginning</h2>
    <p>I got my start in web development a really long time ago in a far off land called NeoPets. They would give you a single HTML file to play with, and play with it I did. I learned the basics of Typography, Layout, complete with way to many <code>&lt;blink&gt;</code> & <code>&lt;marquee&gt;</code> tags. </p>
  <h2>A long time later...</h2>
    <p>In the time that it took you to scroll down, I've developed a passion for clean, responsive design. I made the pretty natural progression from HTML/CSS to learning about Javascript and the DOM, and then on to more of the backend side of things with WordPress/PHP.</p>
    <p><em>Finally</em>, I was able to build full websites and totally custom applications with a friendly user interface for adding and updating content for the less tech-savvy users.</p>
    <h2>Lifetime Learner</h2>

    <p>The internet is ever changing. The tech used to build things on the web is ever changing. So as developers, we're never really done learning. I like the idea that if you can explain the subject to someone else in a consice helpful manner, then you at least <i>kind of know</i>  what you're talking about. </p>
    <p>Right now, the wind powering my self-learing sails is all things React. We're talking Redux, we're talking Gatsby, state, props, components, arrow functions, all the good stuff (still haven't even tried to dive into hooks yet).</p>

    <p>I <a href="https://harnerdesigns.com/blog">blog</a> about pretty much everything I learn down this path. Mostly as a reference for myself for later, but also with the hopes of helping someone after me working through the same problems.</p>

    <h2>Outside The Internet</h2>

    <p>When I'm not glued to the computer, I spend my time exploring the New Mexico Craft Beer scene (<a href="https://lacumbrebrewing.com" target="_blank" rel="noopener">La Cumbre</a> is the spot to go), taking photos of what's around (Check me out on <a href="https://unsplash.com/@jackharner">Unsplash</a>), and enjoying Albuquerque's 360 Days of Sun/year. </p> 

<h2>If You Want More Of Me...</h2>
<p>Give me a follow on Twitter, <a href="https://twitter.com/jackharner">@JackHarner</a>, check out my <Link to="/blog">blog</Link>, or some of the <a href="https://harnerdesigns.com">work I've done</a>. </p>
    </main>
  </Layout>
)

export default About 
