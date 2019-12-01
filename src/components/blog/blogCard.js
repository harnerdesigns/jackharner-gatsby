import PropTypes from "prop-types"
import React from "react"

import Link from "../atoms/maybeExternal";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




const BlogCard = ({ post, index }) => (
    <Link to={"/" + post.fields.slug} className={"blog__link blog__link--" + index + " blog__link--" + (post.fields.externalLink ? "external" : "")}>
        <article className="blog__card">
            <div className="featuredImage__wrapper">
                <img src={post.frontmatter.featuredImage.childImageSharp.resize.src} className="featuredImage" alt={post.frontmatter.title} />
            </div>
            <div className="card__titles">
                <h2 className="post__title">{post.frontmatter.title}</h2>
                {(post.frontmatter.subtitle ? <h3 className="post__subtitle">{post.frontmatter.subtitle}</h3> : "")}
                {(index === 0 ? <p className="post__excerpt">{post.excerpt} <Link to={post.fields.slug}>Read&nbsp;More&nbsp;&raquo;</Link></p> : "")}
            </div>

            {(post.fields.externalLink ?  <a className="external-link__icon" href={post.fields.externalLink}><FontAwesomeIcon icon="external-link-alt" ></FontAwesomeIcon></a> : "")}



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





