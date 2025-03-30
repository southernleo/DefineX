import axios from 'axios';

const API_URL = 'https://localhost:7189/api';

export default {
  // Get all products
  getAllProducts() {
    return axios.get(`${API_URL}/products`);
  },
  
  // Get product by id
  getProductById(id) {
    return axios.get(`${API_URL}/products/${id}`);
  }
};