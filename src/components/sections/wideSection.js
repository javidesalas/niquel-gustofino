/** @jsx jsx */

import React from 'react';
import Image from 'gatsby-image'
import { jsx, css } from '@emotion/core'
import styled from "@emotion/styled"

import { menuId } from '../../helpers/menuId';
import Fader from './FadeInComponent'

const WideSection = styled.section`
margin-top: 15vh;
margin-bottom: 5vh
`

const wideSection = ({picture, title, text}) => {
    return (
      <WideSection id={menuId(title)}>
        <Image
          fluid={picture}
          css={css`
            max-height: 300px;
            margin: 1rem 0;
          `}
        />
        <div
          css={css`
            padding: 0 1rem;
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <Fader direction="fadeInLeft">
            <h1>{title}</h1>
          </Fader>
          <p>{text}</p>
        </div>
      </WideSection>
    )
};                        

export default wideSection;