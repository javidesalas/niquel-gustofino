import React from "react"
import Helmet from "react-helmet"
//import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

import { colors } from "./theme"
import Header from "./header"
import "./layout.css"
import MenuContext from "../context/MenuContext"

const Layout = props => {
  const { menuItems,lang } = props

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
          html,
          body {
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            -o-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          h1,
          h2,
          h3,
          h4 {
            margin: 0;
          }
          h1,
          h2,
          h3 {
            font-family: "Bebas Neue", sans-serif;
            letter-spacing: 1px;
            font-size: 36px;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            font-weight: 700;
          }
          main {
            max-width: 1400px;
          }

          img {
            max-width: 100%;
          }

          a:hover {
            color: ${colors.red};
          }
        `}
      />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MenuContext.Provider value={menuItems}>
        <Header lang={lang} menuItems={menuItems} />

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
      </MenuContext.Provider>
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
