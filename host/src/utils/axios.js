import axios from 'axios';

const token = localStorage.getItem('token');
const debug = process.env === 'production' || 'development'
export const host = debug ? 'http://localhost:8000' : 'https://api.bangdangi.com'

export default axios.create({
  baseURL: host,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : ''
  },
});
