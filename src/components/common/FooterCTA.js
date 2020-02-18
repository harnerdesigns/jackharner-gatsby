import React from "react"
import Button from "../atoms/button"
import styled from "styled-components"

import { breakpoints } from "../breakpoints"

const FooterCTA = () => (
  <StyledFooterCTA>
    <CtaContainer>
      <h3>How Can I Help?</h3>
      <p>
        I'm always looking for my next project. Want to work with me?
      </p>
      <Button label={"Let's Chat »"} href="/contact" size="medium" />
    </CtaContainer>
  </StyledFooterCTA>
)

export default FooterCTA

const StyledFooterCTA = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
  margin-bottom: 2em;
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
    margin: 0;
      color: var(--color);
  }

  p{
      color: var(--text-color--inverted);
      margin-bottom: 0;
      font-size: 1em!important;
  }
  
  @media ${breakpoints.laptop} {
    width: 65%;

    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 1em;
    align-items: center;
    justify-content: center;

    border-radius: 1em;
  }
`
