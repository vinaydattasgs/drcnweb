import React from "react";
import Square from '../images/square.png';
import Storein from '../images/workln.jpg';

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
                            <a href="https://maps.app.goo.gl/TpBDJqAsY4MoyEAGA" target="_new"    aria-label="Perform action" >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDrcn;