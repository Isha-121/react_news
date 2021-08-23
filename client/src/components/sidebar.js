import React from 'react';

const Sidebar = () => {
    return (
        <>
            <div
                className="row"
                style={{
                    position: 'sticky',
                    top: '0',
                    lineHeight: '2em',
                }}
            >
                <mark
                    className="text-center col-12"
                    style={{ fontSize: '2em' }}
                >
                    About
                </mark>
                <div className="text-center">
                    We have created this website using MERN Stack. Hopes you
                    like the content we are providing, please do share your
                    valuable to feedback using following{' '}
                    <a href="#" target="_blank">
                        <mark>
                            <strong>Google Form</strong>
                        </mark>
                    </a>
                    <br />
                    <strong>Want to know more about us?</strong>
                    <p>
                        Plese do visit our{' '}
                        <i>
                            <strong>Github Profiles</strong>
                        </i>
                        <ul>
                            <li>
                                <a
                                    href="https://github.com/isha-121/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.2em',
                                    }}
                                >
                                    Shah Isha
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/harshmetkel24/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: '1.2em',
                                    }}
                                >
                                    Harshkumar Metkel
                                </a>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
