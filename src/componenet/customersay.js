import React from "react";
import Clients from '../images/client.jpg';
// import Clients2 from '../images/client2.jpg';
import Client3 from '../images/client3.jpg';
import Client4 from '../images/client4.jpg';
import { Carousel } from 'antd';


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

                        <Carousel  arrows infinite={true} autoplay>
                            <div>
                                <div className="carousel-inner width-88">
                                    <div className="carousel-item active">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={Clients} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    <span>Daggupati Vinay Datta</span>
                                                    <hr />
                                                </h5>
                                                <p>
                                                Not all items are pretty enough to be stored in clear view. To maintain a cleaner look, utilize hidden storage ideas for small spaces that keep things out of sight but still accessible. Furniture tricks, like this flip-top upholstered storage bench, can stylishly disguise items you'd rather not display. </p>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        
                            <div>
                                <div className="carousel-inner width-88">
                                    <div className="carousel-item active">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={Client4} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    <span>Daggupati Ritesh Ram</span>
                                                    <hr />
                                                </h5>
                                                <p>
                                                    Loved working here, every minute. Positive, encouraging,helpful. Customer friendly and helpful. travel was fun and paid for. Enjoyed all aspects of it. This was my second time to the Storehouse, but this was so much fun with friends. We were able to do the Stoutie and Academy tickets. Thus was so fun.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div>
                                <div className="carousel-inner width-88">
                                    <div className="carousel-item active">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={Client3} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    <span>Daggupati Krishnaveni</span>
                                                    <hr />
                                                </h5>
                                                <p>
                                                Many homes lack sufficient closet space, which can make entryway storage, in particular, quite a challenge. To make up for the scarcity of storage ideas for small spaces around your front door, add a variety of hooks and open shelves to create a customized dropzone that works for your family. Use bins or baskets on the shelves to sort belongings by family member or type of item. </p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                            <div>
                                <div className="carousel-inner width-88">
                                    <div className="carousel-item active">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={Client4} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    <span>Daggupati Ritesh Ram</span>
                                                    <hr />
                                                </h5>
                                                <p>
                                                Living in tight quarters shouldn't keep you from meeting your storage needs. We'll show you how to organize with creative storage ideas for small spaces. With the right strategies, it's easy to live small and still have enough storage for everything you need for a comfortable and happy home. Shelves, bins, drawers, baskets, and more—every option for additional storage is here. </p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </Carousel>



                        {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a> */}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Customersay;