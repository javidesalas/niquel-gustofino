/** @jsx jsx */

import React from 'react';
import Image from 'gatsby-image'
import {jsx, css} from '@emotion/core'

import { menuId } from '../helpers/menuId';
import Fader from './FadeInComponent'

const wideSection = ({picture, title, text}) => {
    return (
      <section id={menuId(title)}>
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
      </section>
    )
};                        

export default wideSection;