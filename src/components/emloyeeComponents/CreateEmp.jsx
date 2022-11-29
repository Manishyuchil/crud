import React from 'react';
import { useState } from "react";
import axiosInstance from './../../services/Axiosinstance,';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateEmp = () => {
  let navigate = useNavigate(); //redirection
  let [state, setState] = useState({
    emp_name: "",
    emp_salary: "",
    emp_designation: "",
    gender: "",
  });
  let { emp_name, emp_salary, emp_designation, gender } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      let payload = { emp_name, emp_salary, emp_designation, gender };
      await axiosInstance.post("/employees", payload);
      toast.success(`Successfull Employee Added Welcome ${emp_name} to TYSS`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="emp-form">
      <article>
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th colSpan={2}>
                  <h2>Add A New Employee</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="ename">Employee Name</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="emp_name"
                    value={emp_name}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="emp_salary">Employee Salary</label>
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="emp_salary"
                    value={emp_salary}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="emp_designation">Employee Designation</label>
                </td>
                <td>
                  <select
                    type="text"
                    className="form-control"
                    name="emp_designation"
                    value={emp_designation}
                    onChange={handleChange}
                    required
                  >
                    <option>--Select Designation</option>
                    <option value="java Dev">Java Developer</option>
                    <option value="mern Dev">JS Developer</option>
                    <option value="UI Dev">Frontend Developer</option>
                    <option value="API dev">Backend Developer</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td
                  style={{
                  paddingTop:"-20px"
                  }}
                >
                  <label htmlFor="gender">Gender</label>
                </td>
                <td
                  value={gender}
                  onChange={handleChange}
                  className="gender"
                  style={{ display: "flex", alignItems: "flex-end",paddingTop:"10px" }}
                  required
                >
                  <input type="radio" name="gender" value="Male" />
                  Male
                  <input type="radio" name="gender" value="female" />
                  Female
                  <input type="radio" name="gender" value="Other" />
                  Other
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  <button>Add to TYSS</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </article>
    </section>
  );
};

export default CreateEmp