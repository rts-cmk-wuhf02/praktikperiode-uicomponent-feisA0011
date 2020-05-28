/** @jsx jsx */
import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import { css, jsx } from '@emotion/core';

function Card({ category, name, image, description }) {

    return (
        <div
            css={css`
             width: 372px;
             background-color: #fff;
             border-radius: 10px;
       >img{
           height:100%;
           width:100%;
           display:block;
           border-radius: 10px 10px 0 0 ;
           object-fit: contain;
       } `}>

            <img src={image} />
            <h3>{name}</h3>
            <h1>Surfing the wave</h1>
            <p>It’s windy. The cool breeze of the ocean. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>

        </div>
    )
}

export default Card


