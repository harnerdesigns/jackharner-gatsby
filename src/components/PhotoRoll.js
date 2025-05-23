import React from "react"
import { Component } from "react"
import Img from "gatsby-image"

import styled from "styled-components"

import { breakpoints } from "./breakpoints"

class PhotoRoll extends Component {
  constructor(props) {
    super(props)

    this.state = { photos: this.props.photos, open: false }
  }

  toggleRoll = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <StyledPhotoRoll>
        {this.state.photos.map(({ photo, link, tag }) => (
          <RollLink fluid={photo.childImageSharp.fluid} link={link} tag={tag} />
        ))}
      </StyledPhotoRoll>
    )
  }
}

export default PhotoRoll

const RollLink = ({ fluid, link, tag }) => {
  return (
    <StyledRollLink href={link} target="_blank" rel="noopener">
      {tag && <PhotoTag>{tag}</PhotoTag>}
      <Img fluid={fluid} />
    </StyledRollLink>
  )
}

const StyledPhotoRoll = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  transition: 600ms !important;

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`

const PhotoTag = styled.span`
  color: #fff;
  font-size: 1rem;
  position: absolute;
  top: 0.5em;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid #fff;
  padding: 0.15em;
  max-width: 95%;
  width: 100%;
  text-align: center;
`

const StyledRollLink = styled.a`
  width: 100%;
  height: 35vmax;
  position: relative;
  transition: 600ms !important;

  &:nth-of-type(n + 5) {
    display: none;
  }

  @media ${breakpoints.laptop} {
    display: block !important;
    &:hover {
      grid-column: auto / span 4;
      box-shadow: 0 0 30px #000;
      z-index: 2;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    transition: 600ms !important;

    img {
      transition: transform 600ms !important;
      min-height: 25vmax;
    }
  }
`
