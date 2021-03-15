/** @jsx jsx */
//import React from "react"
import { jsx, css } from "@emotion/core"

import EmblaCarousel from "./emblaCarousel/emblaCarousel"
import { menuId } from "../../helpers/menuId"
import Fader from "../sections/FadeInComponent"

const Gallery = ({ title, gallery }) => {
  return (
    <section id={menuId(title)}>
      <div
        css={css`
          padding: 0 1rem;
          max-width: 900px;
          margin: 0 auto;
        `}
      >
        <Fader direction="fadeInLeft">
          <h2>{title}</h2>
        </Fader>
        <EmblaCarousel gallery={gallery} />
      </div>
    </section>
  )
}

export default Gallery
