import React, { useState, useEffect } from 'react';
import NewsCard from './newsCard';

const API_KEY = process.env.REACT_APP_API_TOP_HEADLINES;

const CardNewsStrip = (props) => {
    const [country, setCountry] = useState('in');
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [index, setIndex] = useState(0);
    const [category, setCategory] = useState('general');
    const [fetchUrl, setFetchUrl] = useState('');
    const getCategoryNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&country=${country}&category=${category}`;
        setFetchUrl(url);
        try {
            const res = await fetch(url);
            const { articles } = await res.json();
            setImgUrl(articles[index].urlToImage);
            setTitle(articles[index].title);
            setSource(articles[index].source.name);
            setIndex(props.index);
            setCategory(props.category);
        } catch (error) {
            // throw new Error(
            //     "Today's request limit exceeded, try after 24 hours"
            // );
            console.log("Today's request limit exceeded, try after 24 hours");
        }
    };
    useEffect(() => {
        getCategoryNews();
    }, [index, category]);
    return (
        <>
            <NewsCard
                imgUrl={imgUrl}
                source={source}
                title={title}
                fetchUrl={fetchUrl}
                index={index}
            />
        </>
    );
};

export default CardNewsStrip;
