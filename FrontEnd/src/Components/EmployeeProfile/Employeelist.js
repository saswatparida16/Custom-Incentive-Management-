import React, { useState, useEffect } from "react";

export default function EmployeeList () {
  const [employees, setEmployees] = useState([]);
  const [editableEmployeeId, setEditableEmployeeId] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState(null);

  useEffect(() => {
    fetchEmployeeList();
  }, [employees]);

  const fetchEmployeeList = async () => {
    try {
      const response = await fetch("/api/employee/getemployeelist");
      if (response.ok) {
        const data = await response.json();
        setEmployees(data);
      } else {
        console.error("Failed to fetch employee list");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    setEditableEmployeeId(id);
    setEditedEmployee({ ...id });
  };

  function handleDelete(id) {
    fetch(`http://localhost:4000/api/holiday/updateholiday/2${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      // You may include a request body if required
      // body: JSON.stringify({ /* Your request body */ }),
    })
      .then(response => {
        if (response.ok) {
          // Handle success, maybe update state or UI
          console.log(`Employee with ID ${id} deleted successfully.`);
        } else {
          // Handle errors, maybe show an error message
          throw new Error(`Failed to delete employee with ID ${id}`);
        }
      })
      .catch(error => {
        console.error('Error deleting employee:', error);
        // Handle error state or display an error message to the user
      });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
     await fetch(`http://localhost:4000/api/employee/updateEmployee/${editableEmployeeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedEmployee),
      });
        fetchEmployeeList(); // Fetch updated employee list
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  const handleCancelEdit = () => {
    setEditableEmployeeId(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <h2>Employee List</h2>
          <ul className="list-group">
            {employees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                {editableEmployeeId === employee.id ? (
                  <div>
                    <div className="mb-2">
                      <label htmlFor={`firstName-${employee.id}`}>First Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`firstName-${employee.id}`}
                        name="firstName"
                        defaultValue={employee.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor={`lastName-${employee.id}`}>Last Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`lastName-${employee.id}`}
                        name="lastName"
                        defaultValue={employee.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor={`role-${employee.id}`}>Role:</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`role-${employee.id}`}
                        name="role"
                        defaultValue={employee.role}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor={`sales-${employee.id}`}>Sales:</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`sales-${employee.id}`}
                        name="sales"
                        defaultValue={employee.sales}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="btn-group" role="group">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                          handleSave(employee.id, employee)
                        }
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div>
                      <strong>First Name:</strong> {employee.firstName}
                    </div>
                    <div>
                      <strong>Last Name:</strong> {employee.lastName}
                    </div>
                    <div>
                      <strong>Role:</strong> {employee.role}
                    </div>
                    <div>
                      <strong>Sales:</strong> {employee.sales}
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm float-right"
                      onClick={() => handleEdit(employee.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm float-right"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


