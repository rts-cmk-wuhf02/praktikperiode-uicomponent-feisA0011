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
          
           width:100%;
           display:block;
           border-radius: 10px 10px 0 0 ;
           object-fit: contain;
       } `}>

            <img src={image} />
            <section css={css`
            padding:27px 37px;
            `}>
                <h3 css={css`

                color:#33439B;
                `}>{category}

                </h3>
                <h1 css={css`
                text-transform: capitalize;

                `}>
                    {name}
                </h1>
                <p css={css`
                font-weight: 300;
                
                `}>
                    {description}
                </p>
            </section>

        </div>
    )
}

export default Card


