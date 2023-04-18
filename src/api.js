import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-afbm.onrender.com/api',
});

export const fetchReviews = () => {
  return api.get('/reviews').then(({ data }) => {
    return data.reviews;
  });
};
