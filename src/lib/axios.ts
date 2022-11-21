import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vilmar-nlwcopa-api.herokuapp.com',
});