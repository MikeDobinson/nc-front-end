import React from 'react';
import { useState } from 'react';
import * as api from '../api';
import ArticleListCard from './ArticleListCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    api.fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  useEffect(() => {
    api.fetchArticlesByTopic(topic).then((articles) => {
      setArticles(articles);
    });
  }, [topic]);

  return (
    <div>
      <h2>Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleListCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
