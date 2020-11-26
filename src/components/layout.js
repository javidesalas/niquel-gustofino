import React from "react"
import Helmet from "react-helmet"
//import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import { colors } from "./theme"
import Header from "./header"
import "./layout.css"

const Layout = props => {
  return (
    <>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-family: "Montserrat", sans-serif;
            color: ${colors.black};
          }
          h1,
          h2,
          h3,
          h4 {
            margin: 0;
            line-height: 1.5;
          }
          h1,
          h2,
          h3,
          h4 {
            font-family: "Bebas Neue", cursive;
            letter-spacing: 1px
            
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          main {
            max-width: 1400px;
            
          }
        `}
      />

      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat&display=swap"
          rel="stylesheet" />
       
      </Helmet>

      <Header />

      <main>{props.children}</main>

      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
