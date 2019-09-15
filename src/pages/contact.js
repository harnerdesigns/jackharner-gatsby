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
      <ul style={{fontSize: "1.5em", width: "50%"}}>
        <li>Looking for a Freelance Web Developer (<a href="https://harnerdesigns.com">Here's My Portfolio</a>)</li>
        <li>Hiring for a Front-End Developer Position (<a href="https://resume.jackharner.com">Here's My Resume</a>)</li>
        <li>Literally drowning in so much money that you need to give it away to some stranger online</li>
      </ul>

</container>

  </Layout>
)

export default Contact  
