import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import Img from 'gatsby-image'




const BlogCard = ({ post }) => (
    <Link to={post.fields.slug}>
        <article className="blog__card">
        <img src={post.frontmatter.featuredImage.childImageSharp.resize.src} className="featuredImage" />
        <div className="card__titles">
            <h2 className="post__title">{post.frontmatter.title}</h2>
            {(post.frontmatter.subtitle ? <h3 className="post__subtitle">{post.frontmatter.subtitle}</h3> : "")}
            </div>
 

        </article>

    </Link>
)

BlogCard.propTypes = {
    post: PropTypes.object,
}

BlogCard.defaultProps = {
    post: {},
}

export default BlogCard