/** @jsx jsx */
import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { css, jsx } from '@emotion/core'
import ImageContainer from './imageContainer'

const LeisureCard = ({
  name,
  description,
  category,
  bigImage,
  smallImages,
}) => {
  return (
    <article
      css={css`
        width: 771px;
        background-color: #fff;
        padding: 44px 48px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-template-rows: none;
        gap: 38px;
      `}
    >
      <img src={bigImage} />
      <section
        css={css`
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr 1fr auto;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <h3
          css={css`
            color: #fff;
            text-transform: uppercase;
            background-color: #33439b;
            border: 1px solid #005aee;
            width: 4.1rem;
            padding: 0.5rem 0.8rem;
            border-radius: 55px;
            text-align: center;
            font-size: 15px;
            display: block;
            justify-self: end;
          `}
        >
          {category}
        </h3>
        <h1
          css={css`
            font-size: 45px;
          `}
        >
          {name}
        </h1>
        <p
          css={css`
            font-weight: 300;
            line-height: 1.4;
            margin: 0;
          `}
        >
          {description}
        </p>
        <section
          css={css`
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 1rem;
            padding-top: 2.9rem;
          `}
        >
          {smallImages &&
            smallImages.map((image, i) => {
              if (image.fluid) {
                return (
                  <ImageContainer key={image + i} fluid={image.fluid.src} />
                )
              }
            })}
        </section>
      </section>
    </article>
  )
}

export default LeisureCard
