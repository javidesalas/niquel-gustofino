/** @jsx jsx */

import React from 'react';
import Image from 'gatsby-image'
import {jsx, css} from '@emotion/core'

import { menuId } from '../helpers/menuId';

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
          `}
        >
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
    )
};                        

export default wideSection;