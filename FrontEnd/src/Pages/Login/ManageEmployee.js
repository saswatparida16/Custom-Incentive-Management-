import React from "react";
import EmployeeAddForm from "../../Components/EmployeeProfile/Employeeform";
import EmployeeList from "../../Components/EmployeeProfile/Employeelist";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";

export default function ManageEmployee() {
  return (
    <div>
      <Navbar></Navbar>
      <EmployeeList></EmployeeList>
      <EmployeeAddForm></EmployeeAddForm>
      <Footer></Footer>
    </div>
  );
}
