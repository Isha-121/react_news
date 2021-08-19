import React from 'react';
import CardTopHeadline from './cardTopHeadline';
/*
TODO: in future this method should be avoided

it should be like if user refreshes the page or else wants the headlines to be updated new headlines should come
*/
const index = [1, 2, 3, 4];

const TopHeadlines = () => {
    return index.map((i) => {
        return (
            <>
                <CardTopHeadline index={i} key={i} />
            </>
        );
    });
};

export default TopHeadlines;
