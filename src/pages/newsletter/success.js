import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Typing from "../../components/Typing"
import { Link } from "gatsby"

import addToContacts from "../../images/newsletter-add-to-contacts.png";

const Success = () => {
  return (
    <Layout footerCTA={false}>
      <SEO title="Thanks For Signing Up" />
      <section className="half black row">
        <div style={{width: "100%", display: "grid", placeItems: "center"}}>
          <FontAwesomeIcon
            icon="envelope"
            style={{
              fontSize: "15rem",
              marginBottom: "4rem",
              color: "var(--color)",
            }}
          />

        </div>
        <SuccessWrapper>
        <h1>
            Learn&nbsp;
            <span className="title__box"></span>
            With Me
          </h1>
          <h2>Thanks For Signing Up!</h2>
          <h3>Two Things:</h3>
          <ol>
            <li>
              Make sure to click the link we just sent you to confirm your
              email.
            </li>
            <li>
              While you're there, add <strong>hello@jackharner.com</strong> to
              your address book to ensure you get my emails.
            </li>
          </ol>
          <h4>Here's How To Do It In Gmail:</h4>
          <img src={addToContacts} />
          <Link to="/blog" className="button">To The Blog!</Link>
        </SuccessWrapper>
      </section>
    </Layout>
  )
}

export default Success

const SuccessWrapper = styled.div`
  background: #fff;
  color: #000;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ol {
    max-width: 75%;
    strong {
      font-weight: 900;
    }
  }

  .title__box{
    border-color: #000;
    width: 5rem;
  }

  img{
    max-width: 100%; 
    display:block;
  }
`
