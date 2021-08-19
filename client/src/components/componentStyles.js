const topHeadlinesStyle = {
    display: 'grid',
    justifyContent: 'space-evenly',
    gridTemplateColumns: 'repeat(4,1fr)',
    margin: '1em auto',
    gridGap: '1em',
};

const errorImgStyle = {
    img: {
        width: '70vw',
        margin: 'auto 15vw',
        height: '100vh',
        color: 'white',
    },
};

module.exports = { topHeadlinesStyle, errorImgStyle };
