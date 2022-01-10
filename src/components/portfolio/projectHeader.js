import PropTypes from "prop-types"
import React from "react"
import _ from "lodash"

import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import tagIcons from "../../templates/tags/tag-icons"
import Drips from "../atoms/drips"

const ProjectHeader = ({ post, index, small, nolink }) => {
  let filterTags, tags

  if (post.frontmatter.tags) {
    filterTags = post.frontmatter.tags.filter((tag, i) =>
      i < 3 ? true : false
    )
    tags = (
      <div className="project__tags">
        {filterTags.map((tag, i) => {
          const tagLink = `/portfolio/tags/${_.kebabCase(tag)}/`

          return (
            <Link to={tagLink}>
              <FontAwesomeIcon fixedWidth icon={tagIcons[tag]} />
              <span>{tag}</span>
            </Link>
          )
        })}
      </div>
    )
  }
  return (
    <header
      className={
        "project__header project--" +
        _.camelCase(post.frontmatter.title) +
        ` ${
          post.frontmatter.logo
            ? "project__header--logo"
            : "project__header--no-logo"
        }`
      }
      style={{
        background: post.frontmatter.color,
        "--color": post.frontmatter.color,
      }}
    >
      <Drips color="black" slim />
      {post.frontmatter.logo && (
        <div className="logo__wrapper">
          <img
            src={post.frontmatter.logo.publicURL}
            className="logo"
            alt={post.frontmatter.title}
          />
        </div>
      )}
      <div className="header__titles">
        <Link to={post.fields.slug}>
          <h2 className="project__title">{post.frontmatter.title}</h2>
        </Link>

        {post.frontmatter.description != null ? (
          <h4 className="project__description">
            {post.frontmatter.description}
          </h4>
        ) : (
          ""
        )}
        {tags}
      </div>
    </header>
  )
}

ProjectHeader.propTypes = {
  post: PropTypes.object,
}

ProjectHeader.defaultProps = {
  post: {},
}

export default ProjectHeader
