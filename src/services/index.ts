import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rmad-api.herokuapp.com/api/',
});
