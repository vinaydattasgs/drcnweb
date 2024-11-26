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

    // Function to delete a row
    const handleDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            // Delete from backend
            axios.delete(`http://localhost:5000/api/data/${id}`)
                .then(() => {
                    // Remove from front-end state
                    setData(data.filter(item => item.id !== id));
                })
                .catch(error => {
                    console.error('Error deleting data:', error);
                });
        }
    };

    return (
        <div className='bg-sectionlist'>
            <section className="contact_section">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            List of Users
                        </h2>
                    </div>
                </div>
            </section>
            <div>
                <div className='row m-0'>
                    <div className='col-md-12 pb-4 mb-4'>
                        <table className='table-last-child'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th> 
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.Name}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Message}</td>
                                        <td>
                                            <button className='btn btn-primary' onClick={() => handleDeleteClick(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataComponent;
