import PropTypes from "prop-types"
import React from "react"
import _ from "lodash"

import { Link } from "gatsby"

const ProjectHeader = ({ post, index, small, nolink }) => {
  return (
    <header
      className={
        "project__header project--" + _.camelCase(post.frontmatter.title) + ` ${post.frontmatter.logo ? "project__header--logo" : "project__header--no-logo"}`
      }
      style={{ background: post.frontmatter.color }}
    >
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

        <ul className="project__tags">
          {post.frontmatter.tags.map((tag, index) => {
            return <li>{tag}</li>
          })}
        </ul>
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