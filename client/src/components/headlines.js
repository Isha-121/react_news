import React from 'react';
import TopHeadlines from './topHeadlines';
import { topHeadlinesStyle } from './componentStyles';

const Headlines = () => {
    return (
        <>
            <div className="headlinesHeading row text-center bg-secondary">
                <h2 className="text-light font-weight-bold">
                    TOP
                    <small style={{ color: 'whitesmoke' }}> Headlines</small>
                </h2>
            </div>
            <div className="row">
                <TopHeadlines />
            </div>
        </>
    );
};

export default Headlines;
