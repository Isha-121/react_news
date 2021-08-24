import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DetailedNews from './detailedNews';

const NewsCard = ({ imgUrl, source, fetchUrl, title, index }) => {
    const [content, setContent] = useState('Loading...');
    const [publishDate, setPublishDate] = useState('Loading...');
    const [author, setAuthor] = useState('Loading...');
    const getDetails = async () => {
        try {
            const res = await fetch(fetchUrl);
            const { articles } = await res.json();
            setContent(articles[index].content);
            setPublishDate(articles[index].publishedAt);
            setAuthor(articles[index].author);
        } catch (error) {
            console.log("Today's request limit exceeded, try after 24 hours");
        }
    };
    const showDetails = () => {
        document.getElementById('detailedNews').style.display = 'block';
    };

    useEffect(() => {
        getDetails();
        // return () => {
        //     setAuthor('');
        //     setContent('');
        //     setPublishDate('');
        // };
    }, [index, publishDate, author]);
    return (
        <>
            <div className="card shadow-lg col-lg-3 col-md-6 col-sm-12">
                <img
                    src={imgUrl}
                    className="card-img-top text-center  img-thumbnail"
                    alt={`Powered by ${source}`}
                />
                <div
                    className="card-body"
                    style={{ display: 'grid', alignContent: 'space-around' }}
                >
                    <div
                        className="card-title text-justify"
                        style={{ fontSize: '0.8em' }}
                    >
                        {title}
                    </div>

                    <strong className="card-subtitle">{source}</strong>
                    <div
                        className="btn btn-info"
                        onClick={() => {
                            showDetails();
                            getDetails();
                        }}
                    >
                        Know More
                    </div>
                    <DetailedNews
                        content={content}
                        publishDate={publishDate}
                        author={author}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>
        </>
    );
};

export default NewsCard;
