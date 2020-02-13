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
      <container className="half black">
        <h1
          style={{
            padding: "1rem",
            textAlign: "center",
            alignSelf: "center",
          }}
        >
          I Take Photos, Too!
        </h1>
        <p>
          Landscapes, Food, Products, and My Cats. <a href="https://unsplash.com/@jackharner">
            Follow Me on Unsplash &raquo;
          </a>
        </p>
        <StyledPhotoRoll>
          {this.state.photos.map(({ photo, link }) => (
            <RollLink fluid={photo.childImageSharp.fluid} link={link} />
          ))}
        </StyledPhotoRoll>
      </container>
    )
  }
}

export default PhotoRoll

const RollLink = ({ fluid, link }) => {
  return (
    <StyledRollLink href={link} target="_blank" rel="noopener">
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

const StyledRollLink = styled.a`
  width: 100%;
  height: 35vmax;

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
