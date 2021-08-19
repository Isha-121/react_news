import React from 'react';

import Navbar from './navbar';
import Headlines from './headlines';
import GeneralNews from './generalNews';
import Sidebar from './sidebar';
import { generalNewsStyle } from './componentStyles';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Sidebar />
                    </div>
                    <div className="col-10">
                        <Headlines />
                        <div className="headlinesHeading row text-center bg-primary">
                            <h2 className="text-light font-weight-bold">
                                GENERAL
                                <small style={{ color: 'whitesmoke' }}>
                                    {' '}
                                    News
                                </small>
                            </h2>
                        </div>
                        <div style={generalNewsStyle}>
                            <GeneralNews />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
