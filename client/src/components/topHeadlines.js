import React from 'react';
import Card from './card';

/*
TODO: in future this method should be avoided

it should be like if user refreshes the page or else wants the headlines to be updated new headlines should come
*/
const index = [1, 2, 3, 4, 5, 6];

const TopHeadlines = () => {
    return index.map((i) => {
        return <Card index={i} key={i} />;
    });
};

export default TopHeadlines;
