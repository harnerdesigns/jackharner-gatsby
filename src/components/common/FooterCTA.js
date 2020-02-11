import React from "react"
import Button from "../atoms/button"
import styled from "styled-components"

import { breakpoints } from "../breakpoints"

const FooterCTA = () => (
  <StyledFooterCTA>
    <CtaContainer>
      <h3>Let's Make Something Awesome!</h3>
      <p>
        I'm looking for new freelance clients and/or a Front End Developer Role.
      </p>
      <Button label={{ __html: "Let's Chat »" }} href="/contact" size="medium" />
    </CtaContainer>
  </StyledFooterCTA>
)

export default FooterCTA

const StyledFooterCTA = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

const CtaContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: 1fr;

  background: var(--text-color);
  padding: 1em;
  text-align: center;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24),
  0 1px 8px rgba(0, 0, 0, 0.12);

  h3{
      color: var(--color);
  }

  p{
      color: var(--text-color--inverted);
  }
  
  @media ${breakpoints.laptop} {
    width: 65%;

    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;
    margin-top: -1em;
    margin-bottom: -1em;
    border-radius: 1em;
  }
`
