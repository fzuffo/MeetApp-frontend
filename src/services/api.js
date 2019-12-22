import axios from 'axios';

// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = http://159.203.127.210;


const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
