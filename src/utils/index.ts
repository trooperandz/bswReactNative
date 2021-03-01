import axios from 'axios';

// Create configured instance of axios
export const userAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  responseType: 'json',
});
