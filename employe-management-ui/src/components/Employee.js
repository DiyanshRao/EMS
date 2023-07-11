import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-grey-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-grey-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-grey-500">{employee.emailId}</div>
      </td>
      <td className="text-right font-medium text-sm px-6 py-4 whitespace-nowrap">
        <a
          className="text-indigo-600 hover:text-indigo-800 px-4"
          onClick={(e, id) => editEmployee(e, employee.id)}
        >
          Edit
        </a>
        <a
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4"
          onClick={(e, id) => deleteEmployee(e, employee.id)}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;
