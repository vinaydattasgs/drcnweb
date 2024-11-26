import React from "react";
import { Link } from 'react-router-dom';


const Pricing = () => {
    return (
        <section className="price_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container">
                    <h2>
                        Our Pricing
                    </h2>
                    <p>
                        Calculate your savings today
                    </p>
                </div>
                <div className="price_container">
                    <div className="box">
                        <div className="detail-box">
                            <div className="heading-box">
                                <h4>
                                    01
                                </h4>
                                <h6>
                                    Month Plan
                                </h6>
                            </div>
                            <div className="text-box">
                                <h2>
                                    INR 7000
                                </h2>
                                <ul>
                                    <li>
                                        Monthly subscriptions provide flexibility and lower upfront costs
                                    </li>
                                    <li>
                                        Month By Month
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link to="/Contactform">Buy Now</Link>


                        </div>
                    </div>
                    <div className="box">
                        <div className="detail-box">
                            <div className="heading-box">
                                <h4>
                                    02
                                </h4>
                                <h6>
                                    6 Month Plan
                                </h6>
                            </div>
                            <div className="text-box">
                                <h2>
                                    INR 39000
                                </h2>
                                <ul>
                                    <li>
                                        6 month subscriptions provide flexibility and lower upfront costs.
                                    </li>
                                    <li>
                                        Pay on Jan and July
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link to="/Contactform">Buy Now</Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="detail-box">
                            <div className="heading-box">
                                <h4>
                                    03
                                </h4>
                                <h6>
                                    Year Plan
                                </h6>
                            </div>
                            <div className="text-box">
                                <h2>
                                    INR 76000
                                </h2>
                                <ul>
                                    <li>
                                        While annual subscriptions offer cost savings and less administrative hassle
                                    </li>
                                    <li>
                                        Pay Yearly
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link to="/Contactform">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Pricing;