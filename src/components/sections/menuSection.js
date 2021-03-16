/** @jsx jsx */

//import React from "react"
import Image from "gatsby-image"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

import { menuId } from "../../helpers/menuId"
import Fader from "./FadeInComponent"
import { colors } from "../theme"

const MenuArticle = styled.article`
  max-width: 400px;

  .menu-link {
    color: ${colors.red};
    font-weight: 700;
  }

  @media (min-width: 992px) {
    max-width: 800px;
    margin: 5vh auto;
    display: flex;
    flex-wrap: nowrap;

    .gatsby-image-wrapper {
      width: 400px;
      height: 300px;
    }
    .menu-text {
      width: 400px;
      height: 300px;
      margin: 1rem 1rem 0 2rem;
    }
  }
`

const menuSection = ({ picture, title, text, linkText, linkUrl }) => {
  return (
    <MenuArticle id={menuId(title)}>
      <Image
        fluid={picture}
        css={css`
          margin: 1rem 0;
          max-width: 400px;
        `}
      />
      <div className="menu-text">
        <Fader direction="fadeInRight">
          <h3
            css={css`
              margin-bottom: 0.7rem;
            `}
          >
            {title}
          </h3>
        </Fader>
        <p>{text}</p>
        <a href={linkUrl} download>
          <p className="menu-link">{linkText}</p>
        </a>
      </div>
    </MenuArticle>
  )
}

export default menuSection
