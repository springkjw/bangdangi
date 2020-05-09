import axios from 'axios';

export const host = 'http://localhost:8000';

export default axios.create({
  baseURL: host,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
