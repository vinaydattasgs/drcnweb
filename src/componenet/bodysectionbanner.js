import React from 'react';
import { Link } from 'react-router-dom';

const Bodysectionone = () => {
    return (
        <div>
            <section className="slider_section ">
                <div className="container-fluid">
                    <div className="row"> 
                        <div className="col-md-4 offset-md-1">
                            <div className="detail-box">
                                <h1>
                                    <span> Modern</span> <br />
                                    Store House <br />

                                </h1>
                                <p>
                                    Retail is a customer business. You're trying to take care of the customer, solve something for the customer.
                                    DRCN Store only can light and do love to that.

                                </p>
                                <div className="btn-box">
                                <Link to="/Contactform">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bodysectionone;

