/** @jsx jsx */

import React from "react"
import Image from "gatsby-image"
import { jsx, css } from "@emotion/core"

import { menuId } from "../helpers/menuId"



const menuSection = ({ picture, title, text, linkText, linkUrl }) => {
  return (
    <article
      css={css`
        max-width: 400px;
      `}
      id={menuId(title)}
    >
      <Image
        fluid={picture}
        css={css`
          margin: 1rem 0;
        `}
      />

      <h3
        css={css`
          margin-bottom: 0.7rem;
        `}
      >
        {title}
      </h3>
      <p>{text}</p>
      <a href={linkUrl}>{linkText}</a>
    </article>
  )
}

export default menuSection
