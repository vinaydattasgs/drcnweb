import React from "react";
import Clients from '../images/client.jpg';
import Clients2 from '../images/client2.jpg';


const Customersay = () => {
    return (

        <section className="client_section layout_padding">
            <div className="container-fluid">
                <div className="heading_container">
                    <h2>
                        What Our Customer Says
                    </h2>
                </div>
                <div className="client_container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={Clients} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            <span>Vinay Datta</span>
                                            <hr />
                                        </h5>
                                        <p>
                                            Loved working here, every minute. Positive, encouraging,helpful. Customer friendly and helpful. travel was fun and paid for. Enjoyed all aspects of it. This was my second time to the Storehouse, but this was so much fun with friends. We were able to do the Stoutie and Academy tickets. Thus was so fun.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={Clients2} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            <span>Raja Naidu</span>
                                            <hr />
                                        </h5>
                                        <p>
                                            Loved working here, every minute. Positive, encouraging,helpful. Customer friendly and helpful. travel was fun and paid for. Enjoyed all aspects of it. This was my second time to the Storehouse, but this was so much fun with friends. We were able to do the Stoutie and Academy tickets. Thus was so fun. Be constructive, detailed, specific, and honest

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="box">
                                    <div className="img-box">
                                        <img src={Clients} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            <span>Majority</span>
                                            <hr />
                                        </h5>
                                        <p>
                                            Loved working here, every minute. Positive, encouraging,helpful. Customer friendly and helpful. travel was fun and paid for. Enjoyed all aspects of it. This was my second time to the Storehouse, but this was so much fun with friends. We were able to do the Stoutie and Academy tickets. Thus was so fun. Be constructive, detailed, specific, and honest

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Customersay;