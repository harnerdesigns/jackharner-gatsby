/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./fontawesome"
import Header from "./common/header"
import "../scss/style.scss"
import Footer from "./common/footer"
import SimpleReactLightbox from "simple-react-lightbox";


const Layout = ({ children, footerCTA }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
         <SimpleReactLightbox>

    
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />

        {children}

        <Footer footerCTA={footerCTA} />
      </div>
    </SimpleReactLightbox>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
