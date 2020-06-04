/** @jsx jsx */
import React, { useContext } from 'react';
import { css, jsx } from '@emotion/core';

const imageContainer = ({ fluid }) => {
    return (
        <div>
            <img src={fluid} />
        </div>
    );
}

export default imageContainer;