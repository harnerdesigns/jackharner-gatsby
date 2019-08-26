import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"



const BlogTitle = ({ post }) => (
        <header className="blog-title">
            <h1 className="post__title">{post.frontmatter.title}</h1>
            {(post.frontmatter.subtitle ? <h2 className="post__subtitle">{post.frontmatter.subtitle}</h2> : "")}


        </header>

)

BlogTitle.propTypes = {
    post: PropTypes.object,
}

BlogTitle.defaultProps = {
    post: {},
}

export default BlogTitle