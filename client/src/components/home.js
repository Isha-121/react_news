import React from 'react';

import Navbar from './navbar';
import Headlines from './headlines';
import Sidebar from './sidebar';
import '../style.css';
import Thoughts from './thoughts';
import CategorialNews from './categorialNews';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm--1">
                        <Sidebar />
                    </div>
                    <div className="col-lg-10 col-md-9 col-sm-12">
                        <Headlines />
                        <div className="headlinesHeading row text-center bg-primary">
                            <h2
                                className="font-weight-bold"
                                style={{ color: 'red' }}
                            >
                                TODAY'S
                                <small
                                    style={{
                                        color: 'white',
                                        fontSize: '1.2em',
                                    }}
                                >
                                    {' '}
                                    Thought
                                </small>
                            </h2>
                        </div>
                        <div className="contaniner-fluid row">
                            <Thoughts />
                        </div>
                        <CategorialNews />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
