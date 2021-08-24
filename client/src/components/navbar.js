import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (index) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = 500.0;
        setScrollPosition(position);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{
                    backgroundColor: '#e3f2fd',
                }}
            >
                <div className="container-fluid">
                    <div className="navbar-brand">NEWS</div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                        style={{ justifyContent: 'space-evenly' }}
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link" href="#">
                                    BLOGS
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div
                                    className="dropdown"
                                    id="dropdown-toggle"
                                    onClick={() =>
                                        document
                                            .getElementById('dropdown-toggle')
                                            .classList.add('show-dropdown')
                                    }
                                >
                                    <button
                                        className="btn btn-outline-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        onClick={() => handleScroll()}
                                    >
                                        Select Categories
                                    </button>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <div className="dropdown-item">
                                                General
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Bussiness
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Health
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Entertainment
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Sports
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Science
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item">
                                                Technology
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <form
                            className="d-flex"
                            style={{ paddingInline: '40px' }}
                        >
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                // style={{ width: '33vw' }}
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                        <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic mixed styles example"
                        >
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-success"
                            >
                                Sign-Up
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                            >
                                Logout
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                            >
                                Toggle Theme
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
