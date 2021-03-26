import axios from 'axios';

export const createHTTPClient = () => {
  return axios.create({
    baseURL: process.env.NX_API_URL,
  });
};
