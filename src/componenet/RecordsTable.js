import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests

const RecordsTable = () => {
  const [records, setRecords] = useState([]);

  // Fetch records when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then((response) => {
        setRecords(response.data);
      })
      .catch((error) => console.log('Error fetching records', error));
  }, []);

  // Delete a record by id
const handleDelete = (name) => {
  axios.delete(`http://localhost:5000/api/records/${name}`)
    .then((response) => {
      console.log('Record deleted:', response.data);
      setRecords(records.filter((record) => record.name !== name));
    })
    .catch((error) => console.error('Error deleting record', error));
};


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {records.map((record) => (
          <tr key={record.name}>
           
            <td>{record.Name}</td>
            <td>{record.Email}</td>
            <td>{record.Message}</td>
            <td>
              <button onClick={() => handleDelete(record.name)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecordsTable;
