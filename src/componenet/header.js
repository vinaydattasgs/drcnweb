import React from 'react';
import DrcnLogo from '../images/logodrcn.png';
import { Link } from 'react-router-dom';


const Header = () => { 
    return (
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a aria-label="Perform action" href='/' className="navbar-brand" >
                        <img src={DrcnLogo} alt="Daggupati Rama Chandra Naidu" />
                    </a>
                    <div className="navbar-collapse" id="">
                        <ul className="navbar-nav justify-content-between ">
                            <div className="User_option">
                                <li className="">
                                   
                                    <a aria-label="Perform action"  className="mr-4" >
                                    <Link to="/DataComponent">List</Link>
                                    </a>
                                    <a aria-label="Perform action" className="">
                                    <Link to="/Contactform">Contact</Link>
                                    </a>
                                </li>
                            </div>
                        </ul>

                        <div className="custom_menu-btn">
                            <button>
                                <span className="s-1">

                                </span>
                                <span className="s-2">

                                </span>
                                <span className="s-3">

                                </span>
                            </button>
                        </div>
                        <div id="myNav" className="overlay">
                            <div className="overlay-content">
                                {/* <a href="index.html">HOME</a>
  <a href="about.html">ABOUT</a>
  <a href="house.html">HOUSE</a>
  <a href="price.html">PRICING</a>
  <a href="contact.html">CONTACT US</a> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;