import React, { useState, useEffect } from 'react';
const API_KEY = process.env.REACT_APP_API_TOP_HEADLINES;

const Card = (props) => {
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
            <div className="card shadow-lg">
                <img
                    src={imgUrl}
                    className="card-img-top text-center  img-thumbnail"
                    alt={`Powered by ${source}`}
                />
                <div
                    className="card-body"
                    style={{ display: 'grid', alignContent: 'space-between' }}
                >
                    <div
                        className="card-title text-justify"
                        style={{ fontSize: '0.8em' }}
                    >
                        {title}
                    </div>

                    <strong className="card-subtitle">{source}</strong>
                    <a href={siteUrl} alt="About" className="btn btn-info">
                        Know More
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;
