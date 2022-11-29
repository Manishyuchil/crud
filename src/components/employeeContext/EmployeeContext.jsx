import { createContext, useState,useEffect } from "react";
import axiosInstance from './../../services/Axiosinstance,';
import { toast } from 'react-toastify';

export let EmployeeContextApi = createContext();


const EmployeeContext = ({ children }) => {
    let [employee, setEmployee] = useState([]);
    let [load, setLoad] = useState(false);
    useEffect(() => {
        let fetchData = async () => {
            try {
            setLoad(true)
            let { data } = await axiosInstance.get("/employees");
            console.log(data);
            setEmployee(data);
            } catch (error) {
            toast.error(error)
            }
            setLoad(false);
        }
        fetchData();
    }, [])
    
  return (
    <EmployeeContextApi.Provider value={{ employee, load }}>
      {children}
    </EmployeeContextApi.Provider>
  );
}

export default EmployeeContext
