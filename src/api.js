// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000', // Remplacez par l'URL de votre API
});

export default API;
