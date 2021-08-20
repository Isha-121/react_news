import React from 'react';
import CardNewsStrip from './cardNewsStrip';

const index = [0, 1, 2, 3];

const NewsStripContainer = (props) => {
    return index.map((i) => {
        return (
            <>
                <CardNewsStrip index={i} category={props.category} key={i} />
            </>
        );
    });
};

export default NewsStripContainer;
