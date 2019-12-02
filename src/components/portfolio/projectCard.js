import PropTypes from "prop-types"
import React from "react"
import _ from "lodash"

import { Link } from "gatsby"




const ProjectCard = ({ post, index }) => (
    <Link to={post.fields.slug} className={"project__link project__link--" + index} style={{background: post.frontmatter.color, }}>
        <article className={"project__card project--" + _.camelCase(post.frontmatter.title)}>
            <img src={post.frontmatter.logo.publicURL} className="logo" alt={post.frontmatter.title} />
            <div className="card__titles">
                <h2 className="project__title">
                    {post.frontmatter.title}
                </h2>

                {post.frontmatter.description != null ? <h4 className="project__description"> 
                {post.frontmatter.description}
                </h4> : ""}

                <ul class="project__tags">
    {
        post.frontmatter.tags.map((tag, index)=>{
            return(<li>{tag}</li>)
        })
    }

                </ul>
            </div>



        </article>

    </Link>
)

ProjectCard.propTypes = {
    post: PropTypes.object,
}

ProjectCard.defaultProps = {
    post: {},
}

export default ProjectCard 