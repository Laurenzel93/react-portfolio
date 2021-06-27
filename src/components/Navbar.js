import React from "react";
import './style.css';


function Navbar() {
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems"
                aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarItems">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">| Home |<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">| About |<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#work">| My Creations |<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">| Talk to Me |<span className="sr-only">(current)</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className="nav-link" href="./assets/Lauren-Wenzel.pdf" target="_blank" download="newfilename">| My
                        Resume |</a>
                    </li>
                </ul>
            </div>

            <div className="social-links">
                <a href="https://twitter.com/Laurenzel" target="_blank" className="fa fa-twitter"></a>
                <a href="https://www.linkedin.com/in/lewenzel" target="_blank" className="fa fa-linkedin"></a>
                <a href="https://github.com/Laurenzel93" target="_blank" className="fa fa-github"></a>
                <a href="https://www.instagram.com/laurenzel93/" target="_blank" className="fa fa-instagram"></a>
            </div>
        </nav>

    );
}

export default Navbar;