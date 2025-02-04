import React from "react";
import Space1 from '../images/d-1.jpg';
import Space2 from '../images/d-2.jpg';
import { Link } from 'react-router-dom';

const Givespace = () => {
  return (
    <section className="deal_section layout_padding-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Give space to your product
                </h2>
              </div>
              <p>
                Adding space between them can make them seem more beautiful and valuable. This is known as the space-to-product ratio effect. Studies show that more space between products can increase sales, the likelihood of purchase, and even how people perceive the product's taste.</p>
             
                <Link to="/Contactform">  Get A Quote</Link>
              
            </div>
          </div>
          <div className="col-md-6"> 
            <div className="img-box">
              <div className="box b1">
                <img src={Space1} alt="" />
              </div>
              <div className="box b1">
                <img src={Space2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Givespace;