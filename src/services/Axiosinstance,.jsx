import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
    header: {
        "content-type":"application/json",
    }
});

export default axiosInstance;
