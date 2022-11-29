import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axiosInstance from './../../services/Axiosinstance,';
// import { faker } from "@faker-js/faker";



const Employee = () => {
    // let randomImg = faker.image.avatar();
    let [emp, setEmp] = useState("");
    let { id } = useParams();
    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axiosInstance.get(`/employees/${id}`)
            setEmp(data)
            console.log(emp)
        }
        fetchData();
    },[id])//New step add the parameter required to be fetched which is fetched using params
  return (
    <section id="emp-card">
      <article>
        <aside>
          <figure>
            <img src="" alt={emp.emp_name} />
          </figure>
        </aside>
        <aside className="emp-info">
          <h1>{emp.emp_name}</h1>
          <div>
            <p>
              <b>Gender</b>
            </p>
            <p>{emp.gender}</p>
          </div>
          <div>
            <p>
              <b>Designation</b>
            </p>
            <p>{emp.emp_designation}</p>
          </div>
          <div>
            <p>
              <b>Salary</b>
            </p>
            <p>
              <b>&#x20b9;</b>
              {emp.emp_salary}
            </p>
          </div>
        </aside>
      </article>
    </section>
  );
}

export default Employee
