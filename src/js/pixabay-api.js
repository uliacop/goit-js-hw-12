import axios from 'axios';

const API_KEY = '43046447-8272f873c9098dbfa2cb53d4e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImg(request, page, perPage) {
  try {
    const res = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: request,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
