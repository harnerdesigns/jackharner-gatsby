import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import PageTitle from "../components/pageTitle"
import Button from "../components/atoms/button"
import { Link } from "gatsby"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />

    <PageTitle>Get In Touch</PageTitle>
    <container className="half black">
      <h2>The best ways to get a hold of me are:</h2>
      <section className="buttons">
        <Button
          href="https://twitter.com/jackharner"
          target="_blank"
          rel="noopener noreferrer"
          icon={["fab", "twitter"]}
          label={"Twitter DM"}
          size="large"
          extraStyle={{ width: "80%" }}
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
        />
      </section>
      <h3>Please Reach Out If You Are:</h3>
      <ul>
        <li>
          Looking for a Freelance Web Developer (
          <Link to="/portfolio">Here's My Portfolio</Link>)
        </li>
        <li>
          Hiring for a Front-End Developer Position (
          <a href="https://resume.jackharner.com">Here's My Resume</a>)
        </li>
        <li>
          Literally drowning in so much money that you need to give it away to
          some stranger online
        </li>
      </ul>
    </container>

    <container className="full black" id="followMe">
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
    </container>
  </Layout>
)

export default Contact  
