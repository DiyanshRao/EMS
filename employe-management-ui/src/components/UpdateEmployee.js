import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../sevice/EmployeeService";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employeeList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin tracking-wider text-2xl">
          <h2>Update Employee</h2>
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-grey-600 text-sm font-normal ">
            First Name
          </label>
          <input
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-grey-600 text-sm font-normal ">
            Last Name
          </label>
          <input
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="item-center justify-center h-14 w-full my-4">
          <label className="block text-grey-600 text-sm font-normal ">
            Email
          </label>
          <input
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={UpdateEmployee}
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/employeeList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
