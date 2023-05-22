import React, { useState } from 'react';

 const Crudapp=() =>{
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [tableData, setTableData] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      if (formData.id) {
        // Update existing data
        const updatedData = tableData.map((data) => {
          if (data.id === formData.id) {
            return formData;
          }
          return data;
        });
        setTableData(updatedData);
        setFormData({ name: '', email: '', mobile: '' });
      } else {
        // Create new data
        const newData = { ...formData, id: tableData.length + 1 };
        setTableData([...tableData, newData]);
        setFormData({ name: '', email: '', mobile: '' });
      }
    }
  };

  const handleEdit = (id) => {
    const data = tableData.find((data) => data.id === id);
    setFormData(data);
  };

  const handleDelete = (id) => {
    const filteredData = tableData.filter((data) => data.id !== id);
    setTableData(filteredData);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};
   
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;

    }
    else if(!/^[A-Z]$/.test){

    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      errors.mobile = 'Invalid mobile number';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder='Please enter Your Name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div style={{color:"red"}} className="error">{errors.name}</div>}
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder='Please enter Your Email'

            value={formData.email}
            onChange={handleChange}
          />
        {errors.email  ? <div style={{color:"red"}} className="error">{errors.email}</div>: " "}
        </label>
        <label>
          Mobile:
          <input
            type="tel"
            name="mobile"
            placeholder='Please enter Your Mobile Number'

            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <div style={{color:"red"}} className="error">{errors.mobile}</div>}
        </label>
        
    

        <button id='subton' type="submit">{formData.id ? 'Update' : 'Create'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => (
            <tr key={data.id}>
              <td>
                {data.name}
              </td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>
                <button id='Editbtn' className='btn btn-primary' onClick={() => handleEdit(data.id)}>Edit</button>
                <button id='Dltbtn' className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style>

      </style>
    </div>
  );
}

export default Crudapp;


