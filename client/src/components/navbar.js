import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (index) => {
    const [goDark, setGoDark] = useState(true);
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
                                    className="nav-link active text-colot"
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
                                        className="btn btn-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
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
                                className={
                                    goDark
                                        ? 'btn btn-outline-success'
                                        : 'btn btn-success'
                                }
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
                                className={
                                    goDark
                                        ? 'btn btn-outline-success'
                                        : 'btn-success'
                                }
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
                                className={
                                    goDark
                                        ? 'btn btn-outline-dark'
                                        : 'btn btn-light'
                                }
                                onClick={() => {
                                    document.body.classList.toggle('dark-mode');
                                    setGoDark(goDark ? false : true);
                                }}
                            >
                                {goDark ? 'Go Dracula🚀' : 'Go Normal🎇'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
