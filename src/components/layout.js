/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./fontawesome";
import Header from "./header"
import "../scss/style.scss"



const Layout = ({ children }) => {
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
    <>
  <div>
    <Header siteTitle="Jack Harner"/>
        {children}

        <footer class="slim pink">

          <section class="copyright">&copy; 2019 Jack Harner | <a href="https://github.com/harnerdesigns/jackharner-gatsby"> Built With Gatsby</a></section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
