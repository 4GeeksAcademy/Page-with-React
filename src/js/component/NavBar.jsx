import React from "react";

const NavBar = () => {
    return (    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
            <div className="container-fluid ">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-primary"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;