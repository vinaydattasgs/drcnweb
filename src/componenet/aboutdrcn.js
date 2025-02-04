import React from "react";
import Square from '../images/square.png';
import Storein from '../images/workln.jpg';
import { Link } from 'react-router-dom';

const AboutDrcn = () => { 
    return (
        <section className="about_section layout_padding-bottom">
            <div className="square-box">
                <img src={Square} alt="Square" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={Storein} alt="DRCN" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    About Our DRCN Store
                                </h2>
                            </div>
                            <p>
                                Daggupati Rama Chandra Naidu store is
                                the greatest glory in living lies not in never falling, but in rising every time we fall. My storehouse having been burnt down, nothing obstructs my view of the bright moon
                            </p>
                            <Link to="/Contactform">Read More</Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDrcn;