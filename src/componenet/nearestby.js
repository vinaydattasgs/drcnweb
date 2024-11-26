import React from "react";
import Bus from '../images/bus.jpg';
import Flight from '../images/flight.jpg';
import Railway from '../images/railway.jpeg';
import Port from '../images/port.png';
import Annamiah from '../images/annmai.jpg';
import Ntrcircle from '../images/ntrcircle.jpg';
import { Link } from 'react-router-dom';



const NearbyDRCN = () => {






    return (
        <section className="sale_section layout_padding-bottom">
            <div className="container-fluid">
                <div className="heading_container">
                    <h2>
                        DRCN's Near by Places
                    </h2>
                    <p>
                        Explore 6 near by Places for transport to DRCN Store
                    </p>
                </div>
                <div className="sale_container">
                    <div className="box">
                        <div className="img-box">
                            <img src={Bus} alt="DRCN" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                Bus stand
                            </h6>
                            <p>
                                Situated near to the banks and 1 KM to old bus stand and 1.5KM new bus stand of Rajampet
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Flight} alt="DRCN" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                Airport
                            </h6>
                            <p>
                                Situated near to the 60 KM to kadapa Airport and 92KM to tirupathi Airport

                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Railway} alt="DRCN" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                Railway Station
                            </h6>
                            <p>
                                Only nearest to Rajampet Railway Station. Its only 2KM
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Port} alt="DRCN" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                Port
                            </h6>
                            <p>
                                Situated near to the 120KM to Nellor Port and 172KM to Chennial Port

                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Annamiah} alt="DRCN" />

                        </div>
                        <div className="detail-box">
                            <h6>
                                Annamiah Circle
                            </h6>
                            <p>
                                One of the best tourist spot. Its 150 Feet Road and 4 KM from DRCN Store
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Ntrcircle} alt="DRCN" />
                        </div>
                        <div className="detail-box">
                            <h6>
                                NTR Circle 150 Feet Road
                            </h6>
                            <p>
                                You can have transport facilities nicely. Its 150 Feet Road and 2 KM from DRCN Store
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <Link to="/Contactform">Find More</Link>

                </div>
            </div>
        </section>
    )
}


export default NearbyDRCN;