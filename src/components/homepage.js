/** @jsx jsx */

import React, { useState } from "react"
import Image from "gatsby-image"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"

import Contact from "./contact/contact"
import WideSection from "./sections/wideSection"
import MenuSection from "./sections/menuSection"
import Gallery from "./gallery/gallery"
import Social from "./social/Social"
import Reservations from "./reservations/Reservations"
import menuDrink from "../images/Niquel_Bebida_2022.pdf"
import menuEat from "../images/Niquel_Platos_Invierno_2022.pdf"
//import Modal from "../components/modal/modal"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
 
const Homepage = props => {
  const [show, setShow] = useState(true)

  const lang = props.lang
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
    <main>
      <Image
        fluid={picHeader.fluid}
        css={css`
          max-height: 300px;
        `}
      />

      <Social lang={lang} />

      <Contact
        picHeaderSet={picHeader.fluid.srcSet}
        title={titleContacto}
        telefono={telefono}
        horario={horario}
        lang={lang}
      />

      <WideSection picture={picAbout.fluid} title={titleAbout} text={about} />

      <Section>
        <MenuSection
          picture={picComer.fluid}
          title={subtComer}
          text={comer}
          linkText={linktextComer}
          linkUrl={menuEat}
        />
        <MenuSection
          picture={picBeber.fluid}
          title={subtBeber}
          text={beber}
          linkText={linktextBeber}
          linkUrl={menuDrink}
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
      <Reservations title={lang === "ES" ? "Reservas" : "Bookings"} />
    </main>
  )
}

export default Homepage
