import axios from 'axios';

const API_BASE_URL = 'https://api-cantina-production.up.railway.app/api';

export const getProductsByCategory = async (categoria) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/produtos/${categoria}`, {
      params:{
        key: '1363dc7316d70ecf0803a4bd24ac15ab'
      }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
