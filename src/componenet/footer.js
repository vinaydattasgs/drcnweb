import React from "react";
import Fb from '../images/fb.png';
import Twitter from '../images/twitter.png';
import Linkedin from '../images/linkedin.png';
import Youtube from '../images/youtube.png';
import Mail from '../images/mail.png';
import Phone from '../images/phone.png';
import Location from '../images/location.png';

const Footer = () => {
    return (
        <div>

            <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="info_contact">
                                <h5>
                                    DRCN - Daggupati Rama Chandra Naidu
                                </h5>
                                <div>
                                    <div className="img-box">
                                        <img src={Location} width="18px" alt="" />
                                    </div>
                                    <p>
                                        Address:<br />
                                        DRCN Store Rajampet
                                        near bala bhadi school, D.B.N. Palli, Rajampet, Andhra Pradesh 516115
                                    </p>
                                </div>
                                <div>
                                    <div className="img-box">
                                        <img src={Phone} width="12px" alt="" />
                                    </div>
                                    <p>
                                        +91 9441890464
                                    </p>
                                </div>
                                <div>
                                    <div className="img-box">
                                        <img src={Mail} width="18px" alt="" />
                                    </div>
                                    <p>
                                        vinaydatta528@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <form action="">
                                    <input type="email" placeholder="Enter your email" />
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
                                <div className="social_box">
                                    <a aria-label="Perform action" href="https://docs.google.com/forms/d/1oXBtsF3TsFWy7_lSOSBRxQZFX64Mp65zThbH45j-duc/prefill" target="_new">
                                        <img src={Fb} alt="" />
                                    </a>
                                    <a aria-label="Perform action" href="https://docs.google.com/forms/d/1oXBtsF3TsFWy7_lSOSBRxQZFX64Mp65zThbH45j-duc/prefill" target="_new">
                                        <img src={Twitter} alt="" />
                                    </a>
                                    <a aria-label="Perform action" href="https://docs.google.com/forms/d/1oXBtsF3TsFWy7_lSOSBRxQZFX64Mp65zThbH45j-duc/prefill" target="_new">
                                        <img src={Linkedin} alt="" />
                                    </a>
                                    <a aria-label="Perform action" href="https://docs.google.com/forms/d/1oXBtsF3TsFWy7_lSOSBRxQZFX64Mp65zThbH45j-duc/prefill" target="_new">
                                        <img src={Youtube} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid footer_section ">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear">2024</span> All Rights Reserved By
                        <a aria-label="Perform action" href="https://docs.google.com/forms/d/1oXBtsF3TsFWy7_lSOSBRxQZFX64Mp65zThbH45j-duc/prefill" target="_new"> DRCN - Daggupati Rama Chandra Naidu</a>
                    </p>
                </div>
            </section>
        </div>

    )
}

export default Footer;