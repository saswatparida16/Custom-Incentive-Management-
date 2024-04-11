import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Holidayforms () {
  
    let navigate = useNavigate()
    const [formData, setFormData] = useState({
        id: 0,
        holidayName: '',
        duration: 0,
        destination: '',
        location: '',
        amenities:''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Fetch POST request
        fetch('http://localhost:4000/api/holiday/addholiday', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          navigate('/holidaypackage')
          // Optionally, you can do something after successful submission
        })
        .catch(error => {
          console.error('Error:', error);
          // Optionally, you can handle errors here
        });
      };
    return (
        <div>
            <h2>Add New Holiday Package</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Holiday id</label>
                    <input type="number" className="form-control" id="id" name="id" value={formData.id} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                <label htmlFor="holidayName" className="form-label">Holiday Name</label>
                  <select className="form-control" id="holidayName" name="holidayName" value={formData.holidayName} onChange={handleInputChange}>
                    <option value="">Select a holiday name</option>
                    <option value="Domestic">Domestic</option>
                    <option value="Asia">Asia</option>
                    <option value="Europer">Europe</option>
                    <option value="America">America</option>
  {/* Add more options as needed */}
</select>
                </div>
                <div className="mb-3">
                    <label htmlFor="duration" className="form-label">Duration (Nights)</label>
                    <input type="number" className="form-control" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" name="destination" value={formData.destination} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="location" className="form-label">Location</label>
                    <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="amenities" className="form-label">Amenities</label>
                    <textarea className="form-control" id="amenities" rows="3" name="amenities" value={formData.amenities} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};
