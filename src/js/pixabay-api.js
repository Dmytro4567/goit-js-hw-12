import axios from 'axios';

const API_KEY = '49327571-9bc10044c8ece8c1ec1b158e2';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}