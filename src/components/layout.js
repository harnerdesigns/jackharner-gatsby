/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"
import "./fontawesome"
import Header from "./common/header"
import "../scss/style.scss"
import Footer from "./common/footer"
import ImageGrid from "./imageGrid";


const Layout = ({ children, footerCTA, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const shortcodes = { ImageGrid }
  return (
    <MDXProvider components={shortcodes}>


    
      <div className={className}>
        <Header siteTitle={data.site.siteMetadata.title} />

        {children}

        <Footer footerCTA={footerCTA} />
      </div>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
