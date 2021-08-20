import React, { useState, useEffect } from 'react';
import NewsStripContainer from './newsStripContainer';
const categories = [
    'general',
    'business',
    'health',
    'entertainment',
    'sports',
    'science',
    'technology',
];

const CategorialNews = () => {
    return categories.map((category, ind) => {
        return (
            <>
                <div className="headlinesHeading row text-center bg-warning m-2 p-1 shadow">
                    <h2 className="text-dark font-weight-bold text-uppercase">
                        {category}
                        <small style={{ color: 'whitesmoke' }}>
                            {' '}
                            Headlines
                        </small>
                    </h2>
                </div>
                <div className="row">
                    <NewsStripContainer category={category} key={ind} />
                </div>
            </>
        );
    });
};

export default CategorialNews;
