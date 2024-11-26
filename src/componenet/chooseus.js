import React from "react";
import U1 from '../images/u-1.png';
import U2 from '../images/u-2.png';
import U3 from '../images/u-3.png';
import U4 from '../images/u-4.png';
import { Link } from 'react-router-dom';


const Chooseus = () => {
  return (
    <section className="us_section layout_padding2">

      <div className="container">
        <div className="heading_container">
          <h2>
            Why Choose Us
          </h2>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={U1} alt="" />
              </div>
              <div className="detail-box">
                <h3 className="price">
                  50 Feet
                </h3>
                <h5>
                  Road at store
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={U2} alt="" />
              </div>
              <div className="detail-box">
                <h3>
                  20000+
                </h3>
                <h5>
                  Products Delivered At Store
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={U3} alt="" />
              </div>
              <div className="detail-box">
                <h3>
                  10000+
                </h3>
                <h5>
                  Satisfied Customers
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="img-box">
                <img src={U4} alt="" />
              </div>
              <div className="detail-box">
                <h3>
                  1500+
                </h3>
                <h5>
                  Customers Star Rated
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <Link to="/Contactform">Get A Quote</Link>

        </div>
      </div>
    </section>
  )
}

export default Chooseus;