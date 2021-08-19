import React, { useState, useEffect } from 'react';
import NewsCard from './newsCard';
const API_KEY = process.env.REACT_APP_API_TOP_HEADLINES;

const CardTopHeadline = (props) => {
    const [country, setCountry] = useState('in');
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [index, setIndex] = useState(0);
    const [siteUrl, setSiteUrl] = useState('');

    const getHeadlinesOfCountry = async () => {
        const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=${country}`;
        const res = await fetch(url);
        const { articles } = await res.json();
        setImgUrl(articles[index].urlToImage);
        setTitle(articles[index].title);
        setSource(articles[index].source.name);
        setSiteUrl(articles[index].url);
        setIndex(props.index);
    };
    useEffect(() => {
        getHeadlinesOfCountry();
    }, [index]);

    return (
        <>
            <NewsCard
                imgUrl={imgUrl}
                source={source}
                title={title}
                siteUrl={siteUrl}
            />
        </>
    );
};

export default CardTopHeadline;
