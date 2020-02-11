/**
 * PageTitle component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styled from "styled-components"
import { Link } from "gatsby"
import { breakpoints } from "../breakpoints"

const Button = ({
  label,
  onClick,
  type,
  extraStyle,
  icon,
  href,
  to,
  white = false,
  size = "medium",
  ...others
}) => {
  const computedClass =
    "button button--" + size + (white ? " button--white" : "")

  if (href) {
    return (
      <StyledA
        to={to}
        href={href}
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : ""}
        <span className="label" dangerouslySetInnerHTML={label}></span>
      </StyledA>
    )
  } else if (onClick) {
    return (
      <StyledButton
        onClick={onClick}
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : ""}
        <span className="label" dangerouslySetInnerHTML={label}></span>
      </StyledButton>
    )
  } else if (to) {
    return (
      <StyledLink
        to={to}
        style={extraStyle}
        className={computedClass}
        {...others}
      >
        {icon ? <FontAwesomeIcon icon={icon} /> : ""}
        <span className="label" dangerouslySetInnerHTML={label}></span>
      </StyledLink>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0.5em;
  border-radius: var(--borderRadius);

  width: 100%;
  text-align: center;
  transition: 100ms;
  color: var(--text-color);
  background: var(--color);

  svg{
    margin-right: 0.5em;
  }

  &:hover {
    color: var(--darker-text-color);
    background: var(--darker-color);
    opacity: 1;
  }

  &:focus {
    outline: 1px dotted #000;
    color: inherit;
  }

  &:active {
    background: var(--darker-color);
    opacity: 0.8;
    color: inherit;
  }

  &.button--white {
    border: 1px solid #fff;
    background: none;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &.button--medium {
  }
  &.button--large {
    font-size: 1rem;
    width: 100%;
    font-weight: 900;

    @media ${breakpoints.laptop} {
      font-size: 1.5em;
      padding: 0.5rem 2rem;
    }
  }
`

const StyledA = styled(StyledLink).attrs({
  as: "a",
})`
  border: none;
  cursor: pointer;
`

const StyledButton = styled(StyledLink)`
  border: none;
  cursor: pointer;
`
