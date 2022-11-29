import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EmployeeContextApi } from '../employeeContext/EmployeeContext';
import { toast } from 'react-toastify';
import axiosInstance from './../../services/Axiosinstance,';

const AllEmployee = () => {
  let { employee, load } = useContext(EmployeeContextApi);
  let removeEmp = async id => {
    try {
      await axiosInstance.delete(`/employees/${id}`);
      toast.success("Employee Removed");
      window.location.assign("/");
    } catch (error) {
      toast.error(error)
    }
  }
    return (
      <section id="empTableBlock">
        <h1>List of Employees</h1>
        <article>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>Designation</th>
                <th>View More</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {load === true
                ? "Loading"
                : employee?.map(emp => {
                    return (
                      <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.emp_name}</td>
                        <td><span>&#x20b9; </span>{emp.emp_salary}</td>
                        <td>{emp.gender}</td>
                        <td>{emp.emp_designation}</td>
                        <td className="view-row">
                                {<Link to={`/view/${emp.id}`}>View More</Link>}
                        </td>
                        <td className="edit-row">
                                {<Link to={`/edit/${emp.id}`}>Edit</Link>}
                        </td>
                        <td className="delete-row">
                          {<Link onClick={()=>{removeEmp(emp.id)}}>Delete</Link>}
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </article>
      </section>
    );
}

export default AllEmployee