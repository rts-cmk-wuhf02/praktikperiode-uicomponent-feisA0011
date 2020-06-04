/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

function ServiceCard({ name, description, image, backgroundColor }) {
  const serviceStyle = css`
    width: 241px;
    height: 243px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    gap: 3px;
    padding: 29px;
    background-color: ${backgroundColor};
    border-radius: 10px;
    color: #fff;
  `
  const serviceImg = css`
    -padding: 1rem 1rem 47.5px;
    justify-self: end;
  `
  const serviceTitle = css`
    font-size: 28px;
    font-weight: bold;
    text-transform: uppercase;
    align-self: center;
  `
  const serviceText = css`
    font-size: 16px;
    font-weight: 300;
    align-self: center;
  `
  return (
    <div css={serviceStyle}>
      <img css={serviceImg} src={image} alt="" />
      <h1 css={serviceTitle}>{name} </h1>
      <p css={serviceText}>{description}</p>
    </div>
  )
}

export default ServiceCard
