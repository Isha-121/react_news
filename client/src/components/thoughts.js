import React, { useState, useEffect } from 'react';

const Thoughts = () => {
    const [thought, setThought] = useState('');
    const [author, setAuthor] = useState('');
    const getQuotes = async () => {
        const url = 'https://type.fit//api/quotes';
        const res = await fetch(url);
        const data = await res.json();
        const index = Math.floor(Math.random() * 1640);
        setThought(data[index].text);
        if (data[index].author) setAuthor(data[index].author);
        else setAuthor('Not known');
    };
    useEffect(() => {
        getQuotes();
    }, []);
    return (
        <>
            <div
                className="row"
                style={{
                    position: 'relative',
                    backgroundImage:
                        'linear-gradient(50deg, whitesmoke 50%, lightpink 30%, blue)',
                }}
            >
                <div
                    className="thought"
                    style={{
                        top: '20%',
                        textAlign: 'center',
                        position: 'absolute',
                        zIndex: '2',
                        fontSize: '2em',
                    }}
                >
                    {thought}
                    <br />
                    {'-' + author}
                </div>
                <div class="custom-shape-divider-bottom-1629464262">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                            class="shape-fill"
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Thoughts;
