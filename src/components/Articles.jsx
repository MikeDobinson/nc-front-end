import React from 'react';
import { useState } from 'react';
import * as api from '../api';
import ArticleListCard from './ArticleListCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Articles() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchArticlesByTopic(topic).then((articles) => {
      setIsLoading(false);
      setArticles(articles);
    });
  }, [topic, setIsLoading]);

  return (
    <div>
      <h2>Articles</h2>
      {isLoading ? <p>Loading...</p> : null}
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
