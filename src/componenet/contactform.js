import React from "react";

const Contactform = () => {
    return (
        <div>
            <section className="contact_section " >
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Get In Touch
                        </h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 px-0">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.4684539267732!2d79.15900997414182!3d14.187853987050543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb325d1620d5397%3A0xaa9bd1fb7fce933e!2sDRCN%20Shops%20Rajampet!5e1!3m2!1sen!2sin!4v1726067122080!5m2!1sen!2sin"
                                        width="600"
                                        height="550"
                                        allowfullscreen
                                        title="Example Site"
                                        frameBorder="0"
                                    ></iframe>
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.197135049646!2d78.450628395948!3d17.435996941197125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b108d4788f%3A0x8bdfd1f27bb8407a!2sLifestyle%20Stores!5e0!3m2!1sen!2sin!4v1710403171290!5m2!1sen!2sin" width="600" height="300" frameborder="0" style="border:0; width: 100%; height:100%" ></iframe> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 ">
                            <div className="form_container">
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="d-flex ">
                                        <button>
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
           
        </div>

    )
}

export default Contactform;