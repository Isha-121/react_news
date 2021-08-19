import React from 'react';
import CardGeneralNews from './cardGeneralNews';

const index = [5, 6, 7, 8];

const GeneralNews = () => {
    return index.map((i) => {
        return (
            <>
                <CardGeneralNews index={i} key={i} />
            </>
        );
    });
};

export default GeneralNews;
