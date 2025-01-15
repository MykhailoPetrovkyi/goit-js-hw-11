const API_KEY = '48249953-c87d0f666d29b70f04b79c154';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientaiton: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 9,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(err => {
      throw err;
    });
};
