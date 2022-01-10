import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import styled from "styled-components"

const NewsletterLink = () => {
  return (
    <LinkWrapper to="/newsletter">
      <FontAwesomeIcon
        icon={("far", "envelope")}
        style={{ fontSize: "1.5em", verticalAlign: "baseline" }}
      />
      <h4>
        Originally Sent To My Newsletter. Get Posts Like This A Week Early By{" "}
        <span style={{ fontWeight: 900 }}>Signing Up &raquo;</span>
      </h4>
    </LinkWrapper>
  )
}

export default NewsletterLink

const LinkWrapper = styled(Link)`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem auto;
  background: var(--color);
  color: var(--text-color);
  border-radius: var(--border-radius);
  z-index: 9;

  &:hover{
      background: var(--darker-color);
      color: var(--darker-text-color);
  }

  h4{
      margin: 0;
  }
`
