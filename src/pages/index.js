import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"
import ProjectTabs from "../components/projectTabs"




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const IndexPage = () => (
  <Layout>
    <SEO title="Jack Harner" />
    <container class="full black">
      <section class="introduction">
        <h1>Hi, I'm <b>Jack&nbsp;Harner</b></h1>
        <h2>Jack of All Trades, Master of Some</h2>
        <ImASlider />
      </section>
      <FontAwesomeIcon icon="caret-down" id="scrollIndicator" />
    </container>
    <container class="full pink">
      <h2 class="tagline">I Make Websites.</h2>
      <p class="tagline">I work mostly with <a href="https://harnerdesigns.com/project/tag/wordpress/">WordPress</a>, PHP, & I'm currently learning React, but I love me some good 'ole fashioned HTML/CSS.</p>
      <p class="tagline">Now and then, I write about <a href="https://harnerdesigns.com/blog">Web Design</a> & <a
        href="https://bleedingcoffee.com">Coffee</a>.</p>

    </container>

    <ProjectTabs />

    <container class="full black">
      <h2>Let's Make Something Awesome!</h2>
      <section class="workOrHire">
        <div class="work">
          <h3>Want To Work With Me?</h3>
          <p>I'm currently available for freelance work. Need help fixing some WordPress bugs, a whole new website, or just a quick refresh on your exisiting online presence? I'm your guy.</p><p>Hit me up on Twitter <a href="https://twitter.com/jackharner">@JackHarner</a> or <a href="mailto:jack@jackharner.com">Shoot Me An Email</a>.</p>
        </div>
        <div class="or tall">OR</div>
        <div class="hire">
          <h3>Want To Hire Me?</h3>
          <p>I'm looking for a Front End Developer role. I've worked extensively with WordPress/PHP, HTML/CSS, and a little React/Redux. I also make really good coffee.</p>
          <p>Check out my <a href="https://resume.jackharner.com">Resume</a>, <a href="https://harnerdesigns.com">Portfolio</a>, & <a href="https://github.com/harnerdesigns">Github</a> and <a href="mailto:jack@jackharner.com">Shoot Me An Email</a> if you think I'd be a good fit!</p>
        </div>
      </section>

    </container>
    


  </Layout>
)

export default IndexPage
