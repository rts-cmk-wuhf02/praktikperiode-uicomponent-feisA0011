/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core';

export default ({ children }) => (
    <div css={css`
    background-color:#eaeaea;
    padding: 43px 55px;
    `} style={{ maxWidth: 1280, margin: '0 auto' }}>{children}</div>
)
