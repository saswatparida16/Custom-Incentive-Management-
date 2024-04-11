import React, { useEffect, useState } from 'react';

export default function Holidaylist() {
  const [holidaylist, setHolidaylist] = useState([]);
  const [editableHoliday, setEditableHoliday] = useState(null);
  const [editedHoliday, setEditedHoliday] = useState({});

  useEffect(() => {
    fetchHolidayList();
  }, []);

  const fetchHolidayList = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/holiday/getholidaylist");
      if (response.ok) {
        const data = await response.json();
        setHolidaylist(data);
      } else {
        console.error("Failed to fetch holiday list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (holiday) => {
    setEditableHoliday(holiday);
    setEditedHoliday({ ...holiday });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedHoliday(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  

  const handleSave = async () => {
    try {
      await fetch(`http://localhost:4000/api/holiday/updateholiday/${editableHoliday.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedHoliday),
      });
      
      // Optional: Fetch holiday list again after successful update
      fetchHolidayList();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditableHoliday(null);
    setEditedHoliday({});
  };

  function handleDelete(id) {
    fetch(`http://localhost:4000/api/holiday/deleteholiday/${id.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {

          console.log(`Employee with ID ${id} deleted successfully.`);
        } else {

          throw new Error(`Failed to delete employee with ID ${id}`);
        }
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
        // Handle error state or display an error message to the user
      });
  }
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Holiday Packages</h2>
      <div className="row">
        {holidaylist.map((pkg) => (
          <div key={pkg.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                {editableHoliday === pkg ? (
                  <div>
                    <div className="mb-3">
                      <label htmlFor="holidayName" className="form-label">Holiday Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="holidayName"
                        name="holidayName"
                        value={editedHoliday.holidayName || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="destination" className="form-label">Destination:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="destination"
                        name="destination"
                        value={editedHoliday.destination || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="duration" className="form-label">Night:</label>
                      <input
                        type="number"
                        className="form-control"
                        id="duration"
                        name="duration"
                        value={editedHoliday.duration || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amenities" className="form-label">Amenities:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="amenities"
                        name="amenities"
                        value={editedHoliday.amenities || ''}
                        onChange={handleChange}
                      />
                    </div>
                    <button className="btn btn-success mr-2" onClick={handleSave}>Save</button>
                    <button className="btn btn-secondary" onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h5 className="card-title">Holiday Name: {pkg.holidayName}</h5>
                    <p className="card-text">Destination: {pkg.destination}</p>
                    <p className="card-text">Night: {pkg.duration}</p>
                    <p className="card-text">Amenities: {pkg.amenities}</p>
                    <button className="btn btn-info" onClick={() => handleEdit(pkg)}>Edit</button>
                    <button className="btn btn-info" onClick={() => handleDelete(pkg)}>Delete</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
