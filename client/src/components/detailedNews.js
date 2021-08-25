import React, { useEffect, useState } from 'react';

const DetailedNews = ({ content, author, publishDate }) => {
    const [contentN, setContentN] = useState('');
    const [authorN, setAuthorN] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    useEffect(() => {
        setContentN(content);
        setAuthorN(author);
        setPublishedDate(publishDate);
    }, []);

    return (
        <>
            <div
                className="description-hidden-div"
                id="detailedNews"
                style={{
                    position: 'fixed',
                    display: 'none',
                    top: '30%',
                    width: '50%',
                    left: '25%',
                    zIndex: '3',
                    fontWeight: '800',
                }}
            >
                <div
                    className="description-title p-1 rounded row shadow-lg"
                    style={{
                        fontSize: '2em',
                        backgroundColor: 'rgba(245, 245, 245, 0.900)',
                    }}
                >
                    <div className="col-9">Detailed News</div>
                    <div
                        className="col-3"
                        style={{
                            fontSize: '0.8em',
                            textAlign: 'center',
                            border: 'solid black 2px',
                        }}
                        onClick={() => {
                            document.getElementById(
                                'detailedNews'
                            ).style.display = 'none';
                        }}
                    >
                        close
                    </div>
                </div>
                <div
                    className="description-text p-2 rounded shadow-lg"
                    id="description-text"
                    style={{
                        textAlign: 'justify',
                        fontSize: '1.2em',
                        backgroundImage:
                            'linear-gradient(145deg,white, pink, #81c7e2 , pink,white)',
                    }}
                >
                    {contentN ? contentN : 'Oops! content not available'}
                </div>
                <div
                    className="row"
                    style={{
                        backgroundColor: 'rgba(245, 245, 245, 0.900)',
                        fontSize: '1.2em',
                    }}
                >
                    <div className="col-6" id="date">
                        Published at: {publishedDate}
                    </div>
                    <div className="col-6" id="author">
                        Author: {authorN}
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedNews;
