import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PageTitle from "../components/pageTitle"
import Button from "../components/atoms/button"
import { Link } from "gatsby"

const Contact = () => (
  <Layout>
    <SEO title="Get In Touch"
      description="Links to send me an email or a Twitter DM. Ya baby, slide into my DMs"
    />

    <PageTitle>Get In Touch</PageTitle>
    <section className="slim black">
      <h2>The best ways to get a hold of me are:</h2>
      </section>
    <section className="slim black" style={{background: "var(--gradient)", boxShadow: "inset 0 3px 3px  rgba(0,0,0,0.8)"}}>

      <section className="buttons">
        <Button
          href="https://twitter.com/messages/compose?recipient_id=246555108&text=Hi%20Jack!"
          target="_blank"
          rel="noopener noreferrer"
          icon={["fab", "twitter"]}
          label={"Twitter DM"}
          size="large"
          extraStyle={{ width: "80%" }}
          white
        />
        <div className="or wide">OR</div>
        <Button
          href="mailto:hello@jackharner.com"
          target="_blank"
          rel="noopener noreferrer"
          icon="envelope"
          label={ "Email"}
          size="large"
          extraStyle={{ width: "80%" }}
          white
        />
      </section>
      </section>
      <section class="slim black">
      <h3>Please Reach Out If You Are:</h3>
      <ul>
        <li>
          Looking for a Freelance Web Developer (
          <Link to="/portfolio">Here's My Portfolio</Link>)
        </li>
        <li>
          Hiring for a Full Stack Developer Position (
          <a href="https://resume.jackharner.com">Here's My Resume</a>)
        </li>
        <li>
          Literally drowning in so much money that you need to give it away to
          some stranger online
        </li>
      </ul>
    </section>

    <section className="full black" id="followMe">
      <h2>Other Places You Can Find Me:</h2>
      <section className="socials">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/jackharner"
          className="twitter"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          Twitter
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/jackharner"
          className="instagram"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/jackharner"
          className="dribbble"
        >
          <FontAwesomeIcon icon={["fab", "dribbble"]} />
          Dribbble
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dev.to/jackharner"
          className="devto"
        >
          <FontAwesomeIcon icon={["fab", "dev"]} />
          Dev.to
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/harnerdesigns"
          className="github"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.producthunt.com/@jackharner"
          className="producthunt"
        >
          <FontAwesomeIcon icon={["fab", "product-hunt"]} />
          Product Hunt
        </a>
      </section>
    </section>
  </Layout>
)

export default Contact  
