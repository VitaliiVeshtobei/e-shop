import axios from 'axios';

const token = process.env.REACT_APP_TOKEN;

export const instance = axios.create({
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});
