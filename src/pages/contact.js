import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PageTitle from "../components/pageTitle";

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    
      <PageTitle>Get In Touch</PageTitle>
    <container class="half black">
      <h2>The best ways to get a hold of me are:</h2>
      <section className="buttons">
<a href="https://twitter.com/jackharner" className="button button--large"><FontAwesomeIcon icon={["fab", "twitter"]} /> Twitter DM</a>      
<div class="or wide">OR</div>
<a href="mailto:jack@jackharner.com" className="button button--large"><FontAwesomeIcon icon="envelope"/> Email</a>      
      </section>
      <h3>Please Reach Out If You Are:</h3>
      <ul>
        <li>Looking for a Freelance Web Developer (<a href="https://harnerdesigns.com">Here's My Portfolio</a>)</li>
        <li>Hiring for a Front-End Developer Position (<a href="https://resume.jackharner.com">Here's My Resume</a>)</li>
        <li>Literally drowning in so much money that you need to give it away to some stranger online</li>
      </ul>

</container>

<container class="full black" id="followMe">
      <h2>Other Places You Can Find Me:</h2>
      <section class="socials">
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/jackharner" class="twitter">
          <FontAwesomeIcon icon={["fab", "twitter"]} />Twitter
			</a>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/jackharner" class="instagram">
          <FontAwesomeIcon icon={["fab", "instagram"]} />Instagram
			</a>
        <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/jackharner" class="dribbble">
          <FontAwesomeIcon icon={["fab", "dribbble"]} />Dribbble
			</a>
        <a target="_blank" rel="noopener noreferrer" href="https://dev.to/jackharner" class="devto">
          <FontAwesomeIcon icon={["fab", "dev"]} />Dev.to
			</a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/harnerdesigns" class="github">
          <FontAwesomeIcon icon={["fab", "github"]} />GitHub
			</a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.producthunt.com/@jackharner" class="producthunt">
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />Product Hunt
			</a>
      </section>
    </container>

  </Layout>
)

export default Contact  
