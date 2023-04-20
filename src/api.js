import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nc-news-v2.onrender.com/api',
});

export const fetchArticles = () => {
  return api.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const fetchTopics = () => {
  return api.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return api.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};
