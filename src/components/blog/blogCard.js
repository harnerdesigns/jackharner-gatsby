import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"



const BlogCard = ({ post }) => (
<article className="blog__card">

        <h1><Link to={post.frontmatter.path}>{post.frontmatter.title}</Link></h1>

</article>
)

BlogCard.propTypes = {
    post: PropTypes.object,
}

BlogCard.defaultProps = {
    post: {},
}

export default BlogCard