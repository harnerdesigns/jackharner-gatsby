import PropTypes from "prop-types"
import React from "react"
import _ from "lodash"

import tagIcons from "../../templates/tags/tag-icons"


import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GatsbyImage } from "gatsby-plugin-image"

const ProjectCard = ({ post, index, small, nolink }) => {
  return (
    <Link
      to={!nolink ? post.fields.slug : ""}
      className={"project__link project__link--" + index}
      data-color={post.frontmatter.color}
      style={{ background: post.frontmatter.color }}
    >
      <article
        className={
          "project__card project--" +
          _.camelCase(post.frontmatter.title) +
          (small ? " project__card--small" : "")
        }
      >



        {post.frontmatter.logo && <div className="logo__wrapper">
          {post.frontmatter.logo.childImageSharp ? <GatsbyImage
            image={post.frontmatter.logo.childImageSharp.gatsbyImageData}
            className="logo"
            alt={post.frontmatter.title}
          /> : <img
            src={post.frontmatter.logo.publicURL}
            className="logo"
            alt={post.frontmatter.title}
          /> || <h2 className="project__title">{post.frontmatter.title}</h2>}
        </div>}

        <div className="card__titles">
          {/* <h2 className="project__title">{post.frontmatter.title}</h2> */}

          {post.frontmatter.description && (
            <h4 className="project__description">
              {post.frontmatter.description}
            </h4>
          )}
        </div>
        {post.frontmatter.tags && <ul className="project__tags">
          {post.frontmatter.tags.map((tag, index) => {
            return index < 3 ? <li title={tag}><FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
              <span>{tag}</span></li> : ""
          })}
        </ul>}
      </article>
    </Link>
  )
}

ProjectCard.propTypes = {
  post: PropTypes.object,
}

ProjectCard.defaultProps = {
  post: {},
}

export default ProjectCard
