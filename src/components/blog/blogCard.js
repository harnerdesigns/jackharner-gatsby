import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"



const BlogCard = ({ post }) => (
<article className="blog__card">

        <h2><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h2>
        {(post.frontmatter.excerpt ? <p className="excerpt">{post.frontmatter.excerpt}</p> : "")}
 
</article>
)

BlogCard.propTypes = {
    post: PropTypes.object,
}

BlogCard.defaultProps = {
    post: {},
}

export default BlogCard