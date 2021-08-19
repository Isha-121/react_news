// import React, { useState } from 'react';
// const API_KEY = process.env.REACT_APP_API_TOP_HEADLINES;

// import NewsCard from './newsCard';

// const CardGeneralNews = (props) => {
//     const [country, setCountry] = useState('in');
//     const [source, setSource] = useState('');
//     const [title, setTitle] = useState('');
//     const [imgUrl, setImgUrl] = useState('');
//     const [index, setIndex] = useState(0);
//     const [siteUrl, setSiteUrl] = useState('');
//     const getGeneralNews = async (props) => {
//         const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}&category=general`;
//         // const res = await fetch(url);
//         // const { articles } = await res.json();
//         // setImgUrl(articles[index].urlToImage);
//         // setTitle(articles[index].title);
//         // setSource(articles[index].source.name);
//         // setSiteUrl(articles[index].url);
//         // setIndex(props.index);
//     };
//     return (
//         <>
//             <NewsCard
//                 imgUrl={imgUrl}
//                 source={source}
//                 title={title}
//                 siteUrl={siteUrl}
//             />
//         </>
//     );
// };

// export default CardGeneralNews;
