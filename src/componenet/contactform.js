import React, { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


const Contactform = () => {

    
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:5000/api/submit', formData);
                alert(response.data.message);
            } catch (error) {
                alert('Error submitting form. Please try again.');
                console.error('There was an error!', error);
            }
        };

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '', 
    //     number: '',
    //     message: ''
    // });

    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const [error, setError] = useState('');
    // const [successMessage, setSuccessMessage] = useState('');

    // // Handle input changes
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // // Handle form submission with Axios
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setIsSubmitting(true);
    //     setError('');
    //     setSuccessMessage('');

    //     try {
    //         const response = await axios.post('https://your-server-endpoint.com/api/submit', formData);
    //         console.log('Form Data Submitted:', response.data);
    //         setSuccessMessage('Form Submitted Successfully!');
    //     } catch (error) {
    //         console.error('Error submitting form:', error);
    //         setError('Failed to submit the form or unable to connet database. Please try again.');
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

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
                                        allowFullScreen
                                        title="Example Site"
                                        frameBorder="0"
                                    ></iframe>
                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5383.197135049646!2d78.450628395948!3d17.435996941197125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b108d4788f%3A0x8bdfd1f27bb8407a!2sLifestyle%20Stores!5e0!3m2!1sen!2sin!4v1710403171290!5m2!1sen!2sin" width="600" height="300" frameborder="0" style="border:0; width: 100%; height:100%" ></iframe> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 ">
                            <div className="form_container">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" placeholder="Name"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required />
                                    </div>
                                    <div>
                                        <input placeholder="Phone Number" 
                                         type="text"
                                         name="phone"
                                         value={formData.phone}
                                         onChange={handleChange}
                                         required />
                                    </div>
                                    <div>
                                        <textarea className="message-box" placeholder="Message"
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button type="submit">
                                           Submit

                                        </button>
                                        <a href="#" className="mr-2 br-line pl-2">View list</a>
                                        
                                        {/* <div >
                                        {error && <p className="bgcolorwhite" style={{ color: '#ff0000' }}>{error}</p>}
                                        {successMessage && <p className="bgcolorwhite" style={{ color: 'green' }}>{successMessage}</p>}
                                        </div> */}
                                       
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