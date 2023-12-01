import axios from "axios";
// const host = process.env.REACT_APP_API_HOST;

// This is for development purposes only so do not use it in production 
// let be commented out when pushing to production unless you want to use it then
// comment out the one above and uncomment this one

const host = process.env.REACT_APP_API_HOST_DEV;

export const setToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const call = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default { call, setToken };