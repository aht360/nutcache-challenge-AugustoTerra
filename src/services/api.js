import axios from 'axios';
import config from '../config.json';

const { KEY } = config;

const api = axios.create({
    baseURL: `https://crudcrud.com/api/${KEY}`,
});

export default api;