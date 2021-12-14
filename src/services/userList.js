import axios from "axios";

const baseURL = "http://localhost:3001/"

const getApprovedList = () => {
    const request = axios.get(`${baseURL}list`)
    return request.then(response => response.data)
}

const getUnapprovedList = () => {
    const request = axios.get(`${baseURL}list1`)
    return request.then(response => response.data)
}


export { getApprovedList, getUnapprovedList }