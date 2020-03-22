import React from "react"
import { Component } from "react"
import Img from "gatsby-image"

import styled from "styled-components"

import { breakpoints } from "./breakpoints"

class PhotoRoll extends Component {
  constructor(props) {
    super(props)

    this.state = { photos: this.props.photos, open: false }
    console.log({ photos: this.state.photos })
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

  @media ${breakpoints.laptop} {
    grid-template-columns: repeat(8, 1fr);
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

  &:nth-of-type(n + 5) {
    display: none;
  }

  @media ${breakpoints.laptop} {
    display: block !important;
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    img {
      transition: transform 600ms !important;
      min-height: 25vmax;
    }
  }

  &:hover {
    .gatsby-image-wrapper {
      img {
        transform: scale(1.3);
      }
    }
  }
`
