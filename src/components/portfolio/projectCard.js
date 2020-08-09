import PropTypes from "prop-types"
import React from "react"
import _ from "lodash"

import { Link } from "gatsby"

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
        

        {post.frontmatter.logo &&
        <div className="logo__wrapper">
          <img
            src={post.frontmatter.logo.publicURL}
            className="logo"
            alt={post.frontmatter.title}
          />
        </div>}
        <div className="card__titles">
          <h2 className="project__title">{post.frontmatter.title}</h2>

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
