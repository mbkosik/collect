import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

api.interceptors.response.use(
  response => response,
  // TODO: error handling
  error => console.log(error),
);

export const getData = () => api.get('/object.json');
