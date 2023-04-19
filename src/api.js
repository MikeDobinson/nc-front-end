import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-games-afbm.onrender.com/api',
});

export const fetchReviews = () => {
  return api.get('/reviews').then(({ data }) => {
    return data.reviews;
  });
};

export const fetchReviewById = (review_id) => {
  return api.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const fetchCommentsByReviewId = (review_id) => {
  return api.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const fetchCategories = () => {
  return api.get('/categories').then(({ data }) => {
    return data.categories;
  });
};
