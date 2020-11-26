/** @jsx jsx */

import React from 'react';
import Image from 'gatsby-image';
import { jsx, css } from '@emotion/core'

import Contact from './contact'
import WideSection from './wideSection'
import MenuSection from './menuSection'


function homepage (props) {
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
        galeria } = props.content
    
    return (
      <div>
        <Image
          fluid={picHeader.fluid}
          css={css`
            height: 300px;
          `}
        />

        <Contact
          picHeaderSet={picHeader.fluid.srcSet}
          titleContacto={titleContacto}
          telefono={telefono}
          horario={horario}
        />

        <WideSection picture={picAbout.fluid} title={titleAbout} text={about} />

        <MenuSection
          picture={picComer.fixed}
          title={subtComer}
          text={comer}
          linkText={linktextComer}
          linkUrl={comerCarta}
        />
        <MenuSection
          picture={picBeber.fixed}
          title={subtBeber}
          text={beber}
          linkText={linktextBeber}
          linkUrl={beberCarta}
        />
        <MenuSection
          picture={picCelebrar.fixed}
          title={subtCelebrar}
          text={celebrar}
          linkText={linktextCelebrar}
          linkUrl="mailto:hola@niquelgustofino.com"
            />
            

      </div>
    )
};

export default homepage;