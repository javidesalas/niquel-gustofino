/** @jsx jsx */

import React from "react"
import Image from "gatsby-image"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

import Contact from "./contact"
import WideSection from "./wideSection"
import MenuSection from "./menuSection"
import Gallery from "./gallery"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`



function homepage(props) {
  const {
    picHeader,
    titleContacto,
    telefono,
    horario,
    picAbout,
    titleAbout,
    about,
    picComer,
    subtComer,
    comer,
    linktextComer,
    comerCarta,
    picBeber,
    subtBeber,
    beber,
    linktextBeber,
    beberCarta,
    picCelebrar,
    subtCelebrar,
    celebrar,
    linktextCelebrar,
    titleGaleria,
    galeria,
  } = props.content

  return (
    <div>
      <Image
        fluid={picHeader.fluid}
        css={css`
          max-height: 300px;
        `}
      />

      <Contact
        picHeaderSet={picHeader.fluid.srcSet}
        title={titleContacto}
        telefono={telefono}
        horario={horario}
      />

      <WideSection picture={picAbout.fluid} title={titleAbout} text={about} />

      <Section>
        <MenuSection
          picture={picComer.fluid}
          title={subtComer}
          text={comer}
          linkText={linktextComer}
          linkUrl={comerCarta}
        />
        <MenuSection
          picture={picBeber.fluid}
          title={subtBeber}
          text={beber}
          linkText={linktextBeber}
          linkUrl={beberCarta}
        />
        <MenuSection
          picture={picCelebrar.fluid}
          title={subtCelebrar}
          text={celebrar}
          linkText={linktextCelebrar}
          linkUrl="mailto:hola@niquelgustofino.com"
        />
      </Section>

      <Gallery title={titleGaleria} gallery={galeria} />
    </div>
  )
}

export default homepage
