import React from 'react';

import { errorImgStyle } from './componentStyles';
const Error = () => {
    return (
        <>
            <div style={{ backgroundColor: 'black' }}>
                <img
                    style={errorImgStyle.img}
                    src="../images/page_not_found.jpg"
                    alt="Page you are looking for not found :("
                />
            </div>
        </>
    );
};

export default Error;
