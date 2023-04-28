import PropTypes from "prop-types"
import React from "react"

import Link from "../atoms/maybeExternal"
import Moment from "react-moment"
import tagIcons from "../../templates/tags/tag-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Drips from "../atoms/drips"

const BlogCard = ({ post, index, small, large }) => {
  let filterTags, tags

  if (post.frontmatter.tags) {
    filterTags = post.frontmatter.tags.filter((tag, i) =>
      i < 3 ? true : false
    )
    tags = (
      <>
        {filterTags.map((tag, i) => {
          let icon = tagIcons[tag] || null
          return (
            <div className="tag__wrapper">
              {icon ? (
                <>
                  <FontAwesomeIcon fixedWidth icon={icon} />
                  <span className="tag__label">{tag}</span>
                </>
              ) : (
                <><span className="tag__label">{tag}</span></>
              )}
            </div>
          )
        })}
      </>
    )
  }
  return (
    <Link
      key={index}
      to={post.fields.slug}
      className={
        "blog__link" +
        (index !== null ? " blog__link--" + index : "") +
        (post.fields.externalLink ? " blog__link--external" : "") +
        (small ? " blog__link--small" : "") +
        (large ? " blog__link--large" : "")
      }
    >
      <article className="blog__card">
        <div className="featuredImage__wrapper">
          <img
            src={post.frontmatter.featuredImage.childImageSharp.resize.src}
            className="featuredImage"
            alt={post.frontmatter.title}
          />
        </div>
        <div className="card__titles">
          {post.frontmatter.published !== true && (
            <h5
              className="notice notice--draft"
              title="Won't be published on build"
            >
              DRAFT
            </h5>
          )}
          <h2 className="post__title">{post.frontmatter.title}</h2>
          {post.frontmatter.subtitle ? (
            <h3 className="post__subtitle">{post.frontmatter.subtitle}</h3>
          ) : (
            ""
          )}
        </div>

        <div className="card__meta">
          {tags}
          {post.fields.date ? (
            <div className="card__date">
              <FontAwesomeIcon fixedWidth icon="calendar" />
              <Moment fromNow title={post.fields.date}>
                {post.fields.date}
              </Moment>
            </div>
          ) : (
            ""
          )}
        </div>
      </article>
    </Link>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object,
}

BlogCard.defaultProps = {
  post: {},
}

export default BlogCard
