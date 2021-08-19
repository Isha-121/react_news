import React from 'react';

const NewsCard = ({ imgUrl, source, siteUrl, title }) => {
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
                    style={{ display: 'grid', alignContent: 'space-around' }}
                >
                    <div
                        className="card-title text-justify"
                        style={{ fontSize: '0.8em' }}
                    >
                        {title}
                    </div>

                    <strong className="card-subtitle">{source}</strong>
                    <a
                        href={siteUrl}
                        target="_blank"
                        alt="About"
                        className="btn btn-info"
                    >
                        Know More
                    </a>
                </div>
            </div>
        </>
    );
};

export default NewsCard;
