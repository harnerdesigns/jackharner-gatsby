import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Drips from "../atoms/drips";
import { GatsbyImage } from "gatsby-plugin-image";
const _ = require("lodash");





const BlogTitle = ({ post }) => {

    return (<header className={"blog-title " + post.fields.collection} 
    // style={{
    //     backgroundImage: (post.frontmatter.featuredImage ? 'url(' + post.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.fallback.src + ')' : '')
    // }}
    >

        {post.frontmatter.featuredImage.childImageSharp ? <GatsbyImage
            image={post.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            className="blog-title__bg-image"
            alt={post.frontmatter.title}
        /> : <img
            src={post.frontmatter.featuredImage.publicURL}
            className="blog-title__bg-image"
            alt={post.frontmatter.title}
        />}
        <Drips color="black" slim />

        <div className="page-title__content">
            <h1 className="post__title">{post.frontmatter.title}</h1>
            {(post.frontmatter.subtitle ? <h2 className="post__subtitle">{post.frontmatter.subtitle}</h2> : "")}
            <div className="post__meta">
                {(post.frontmatter.tags ? <div className="post__tags"><FontAwesomeIcon icon="tag" />
                    {
                        post.frontmatter.tags.map((tag, i) => {
                            const tagLink = (tag === 'WordPress' ? `/blog/tags/wordpress/` : `/blog/tags/${_.kebabCase(tag)}/`)
                            return (<><Link to={tagLink}>{tag}</Link>{i < post.frontmatter.tags.length - 1 ? ", " : ""}</>)
                        })
                    }</div> : "")}
                {(post.fields.date ? <div className="post__date"><FontAwesomeIcon icon="calendar" /> {post.fields.date}</div> : "")}
                <div className="post__time"><FontAwesomeIcon icon="stopwatch" /> {(Math.round(post.wordCount.words / 200) > 0 ? "~" + Math.round(post.wordCount.words / 200) : "< 1")} Min To Read</div>
                {(post.fields.unlisted ? <div className="post__unlisted"><FontAwesomeIcon icon={['fab', "android"]} /> Unlisted</div> : "")}
            </div>
        </div>



    </header>)

}

BlogTitle.propTypes = {
    post: PropTypes.object,
}

BlogTitle.defaultProps = {
    post: {},
}

export default BlogTitle  