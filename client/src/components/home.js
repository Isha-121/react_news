import React from 'react';

import Headlines from './headlines';
import Navbar from './navbar';
import Sidebar from './sidebar';

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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
