import React, { useState } from "react";

export default function EmployeeAddForm() {
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    role: "",
    sales: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/employee/addemployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Employee added successfully");
        // Reset form data after successful submission
        setFormData({
          id: "",
          firstName: "",
          lastName: "",
          role: "",
          sales: "",
          email: "",
          password: "",
        });
      } else {
        console.error("Failed to add employee");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-end">
        <div className="col-md-5"> {/* Smaller width */}
          <h2>Add Employee</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">ID:</label>
              <input
                type="number"
                className="form-control"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role:</label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="sales">Sales:</label>
              <input
                type="number"
                className="form-control"
                id="sales"
                name="sales"
                value={formData.sales}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* Other form inputs go here */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
