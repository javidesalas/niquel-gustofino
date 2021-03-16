import React from "react"
import Helmet from "react-helmet"
//import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
//import styled from "@emotion/styled"

import { colors } from "./theme"
import Header from "./header"
import Footer from "./Footer"
//import "./layout.css"

const Layout = props => {
  //simpler alternative to Context Api due to Gatsby compatibility issues
  const { lang, menuItems } = props
  typeof window !== `undefined` &&
    sessionStorage.setItem("lang", JSON.stringify(lang))
  typeof window !== `undefined` &&
    sessionStorage.setItem("menuItems", JSON.stringify(menuItems))

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

            width: 100vw;
            overflow-x: hidden;
            white-space: pre-line;
          }

          main {
            margin: 0 auto;
            background-color: white;
          }

          a,
          a:visited,
          a:hover,
          a:active {
            text-decoration: none;
            color: inherit;
          }

          a {
            background-color: transparent;
            -webkit-text-decoration-skip: objects;
          }
          a:active,
          a:hover {
            outline-width: 0;
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

          img {
            max-width: 100%;
          }

          /* Moved from menu.js component because react-burger-map doesn't accept styled or css props or pseudo-classes in props */
          a.bm-item:hover,
          a.bm-item:active {
            color: ${colors.red};
          }

          /* .bm-item:last-child {
            color: ${colors.grey};
          } */

          /*Reveal effects*/

          .reveal {
            opacity: 0;
            transition: opacity 0.8s ease-out, transform 1.4s ease-out;
          }

          .reveal.fadeInUp {
            transform: translateY(-20);
          }

          .reveal.fadeInUp.visible {
            transform: translateY(0);
            opacity: 1;
          }

          .reveal.fadeInRight {
            transform: translateX(60px);
          }

          .reveal.fadeInRight.visible {
            transform: translateX(0);
            opacity: 1;
          }

          .reveal.fadeInLeft {
            transform: translateX(-60px);
          }

          .reveal.fadeInLeft.visible {
            transform: translateX(0);
            opacity: 1;
          }

          .reveal.fadeIn {
          }

          .reveal.fadeIn.visible {
            opacity: 1;
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
      <Header />

      <main>{props.children}</main>
      <Footer />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
