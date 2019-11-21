import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ImASlider from "../components/imASlider"
import ProjectCard from "../components/portfolio/projectCard";




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const IndexPage = ({ data }) => {

  const { edges: posts } = data.allMarkdownRemark

  return(<Layout>
    <SEO title="Jack Harner" />
    <container class="full black">
      <section class="introduction">
        <h1>Hi, I'm <b>Jack&nbsp;Harner</b></h1>
        <h2>Jack of All Trades, Master of Some</h2>
        <ImASlider />
      </section>
      <FontAwesomeIcon icon="caret-down" id="scrollIndicator" />
    </container>
    <container class="full pink">
      <h1 class="tagline">I Make Websites.</h1>
      <p class="tagline">I work mostly with <a href="https://harnerdesigns.com/project/tag/wordpress/">WordPress</a>, PHP, & I'm currently learning React, but I love me some good 'ole fashioned HTML/CSS.</p>
      <p class="tagline">Now and then, I write about <a href="https://harnerdesigns.com/blog">Web Design</a> & <a
        href="https://bleedingcoffee.com">Coffee</a>.</p>

    </container>

<container class="half white grid">
  <h1>Recent Projects</h1>
          {posts.filter(post => post.node.fields.collection === "portfolio")
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <ProjectCard post={post} index={index} />
              )
            })}
        </container>

    
    


  </Layout>)
}

export default IndexPage

export const pageQuery = graphql`
query HomePageQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          description
          color
          date(formatString: "MMMM DD, YYYY")
          tags
        logo {
          extension
          publicURL
        }
        }
        fields {
          slug
          collection
        }
      }
    }
  }
}
` 