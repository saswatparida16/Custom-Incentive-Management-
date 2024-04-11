import React, { useState, useEffect } from "react";
import "./Incentive.css"; // Import custom CSS file for styling

export default function Incentive() {
  const [employees, setEmployees] = useState([]);
  const [holidayPackages, setHolidayPackages] = useState([]);

  useEffect(() => {
    // Fetch employee data from API
    fetch("http://localhost:4000/api/employee/getemployeelist")
      .then((response) => response.json())
      .then((data) => {
        // Calculate incentive details for each employee
        const updatedEmployees = data.map((employee) => ({
          ...employee,
          incentivePercentage: calculateIncentivePercentage(employee.sales),
          bonus: calculateBonus(employee.sales),
          holidayPackageEligibility: calculateHolidayPackageEligibility(
            employee.sales
          ),
        }));
        setEmployees(updatedEmployees);
      })
      .catch((error) => console.error("Error fetching employee data:", error));

    // Fetch holiday package data from API
    fetch("http://localhost:4000/api/holiday/getholidaylist")
      .then((response) => response.json())
      .then((data) => setHolidayPackages(data))
      .catch((error) =>
        console.error("Error fetching holiday package data:", error)
      );
  }, []);

  // Calculate incentive percentage based on sales
  const calculateIncentivePercentage = (sales) => {
    if (sales >= 50000) {
      return "5%";
    } else if (sales >= 30000) {
      return "3.5%";
    } else if (sales >= 20000) {
      return "3%";
    } else if (sales >= 10000) {
      return "1.5%";
    } else {
      return "None";
    }
  };

  // Calculate bonus based on sales
  const calculateBonus = (sales) => {
    if (sales >= 30000) {
      return "$1000";
    } else {
      return "None";
    }
  };

  // Check holiday package eligibility based on sales
  const calculateHolidayPackageEligibility = (sales) => {
    return sales >= 50000;
  };

  // Get eligible holiday package for an employee
  const getEligibleHolidayPackage = (sales) => {
    if (sales >= 150000) {
      return "America";
    } else if (sales >= 100000) {
      return "Europe";
    } else if (sales >= 80000) {
      return "Asia";
    } else if (sales >= 50000) {
      return "Domestic";
    } else {
      return "None";
    }
  };

  // Get holiday package details by name
  // Get holiday package details by name
  const getHolidayPackageDetails = (packageName) => {
    const packageDetails = holidayPackages.find(
      (packageok) => packageok.holidayName === packageName
    );
  
    if (!packageDetails) {
      return "Holiday package not found";
    }
    return {
      holiday: packageDetails.holidayName,
      destination: packageDetails.destination,
      location: packageDetails.location,
      nights: packageDetails.nights,
      amenities: packageDetails.amenities,
    };
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Incentive Calculation</h1>
      <div className="row mt-5">
        <div className="col-md-10 mx-auto">
          <h2 className="mb-4">Employee Incentive Details</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Sales</th>
                <th>Incentive Percentage</th>
                <th>Bonus</th>
                <th>Holiday Package Eligibility</th>
                <th>Eligible Holiday Package</th>
                <th>Holiday Package Details</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.sales}</td>
                  <td>{employee.incentivePercentage}</td>
                  <td>{employee.bonus}</td>
                  <td>
                    {employee.holidayPackageEligibility
                      ? "Eligible"
                      : "Not Eligible"}
                  </td>
                  <td>
                    {employee.holidayPackageEligibility
                      ? `Eligible (${getEligibleHolidayPackage(
                          employee.sales
                        )})`
                      : "Not Applicable"}
                  </td>
                  <td>
                    {employee.holidayPackageEligibility
                      ? JSON.stringify(
                          getHolidayPackageDetails(
                            getEligibleHolidayPackage(employee.sales)
                          )
                        )
                      : "Not Applicable"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}