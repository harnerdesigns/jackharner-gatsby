import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"



const BlogCard = ({ post }) => (
    <Link to={post.fields.slug}>
        <article className="blog__card">

            <h2 className="post__title">{post.frontmatter.title}</h2>
            {(post.frontmatter.subtitle ? <h3 className="post__subtitle">{post.frontmatter.subtitle}</h3> : "")}

            {(post.excerpt ? <p className="post__excerpt">{post.excerpt}</p> : "")}

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