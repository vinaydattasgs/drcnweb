import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataComponent = () => {
    const [data, setData] = useState([]);

    // Fetch data from the backend
    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <section className="contact_section " >
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            List of Users 
                        </h2>
                    </div>
                </div>
            </section>
            <ul>
                {data.map(item => (
                    <div className='row text-center m-0' key={item.id}>
                        <div className='col-md-3'>{item.Name}</div>
                        <div className='col-md-3'>{item.Email}</div>
                        <div className='col-md-3'>{item.Phone}</div>
                        <div className='col-md-3'>{item.Message}</div>
                    

                    </div>

                ))}
            </ul>
        </div>
    );
};

export default DataComponent;
