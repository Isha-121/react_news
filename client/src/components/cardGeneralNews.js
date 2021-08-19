import React, { useEffect, useState } from 'react';

import NewsCard from './newsCard';

const API_KEY = process.env.REACT_APP_API_TOP_HEADLINES;

const CardGeneralNews = (props) => {
    const [country, setCountry] = useState('in');
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [index, setIndex] = useState(0);
    const [siteUrl, setSiteUrl] = useState('');
    const getGeneralNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=general`;
        const res = await fetch(url);
        const { articles } = await res.json();
        console.log(articles[0]);
        if (!articles[index].urlToImage) {
            setImgUrl(articles[index + 4].urlToImage);
            setTitle(articles[index + 4].title);
            setSource(articles[index + 4].source.name);
            setSiteUrl(articles[index + 4].url);
            return;
        }
        setImgUrl(articles[index].urlToImage);
        setTitle(articles[index].title);
        setSource(articles[index].source.name);
        setSiteUrl(articles[index].url);
        setIndex(props.index);
    };
    useEffect(() => {
        getGeneralNews();
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

export default CardGeneralNews;
