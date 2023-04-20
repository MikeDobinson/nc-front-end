import React from 'react';
import * as api from '../api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CommentList from './CommentList';

export default function ArticleCard() {
  const { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    api.fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  return (
    <div>
      <h2>Article</h2>
      <ul className="article-list">
        <li key={article.article_id}>
          <h3>{article.title}</h3>
          <p>Written by: {article.owner}</p>
          <p>{article.article_body}</p>
          <p>Comments: {article.comment_count}</p>
          <p>Likes: {article.votes}</p>
          <p>Topic: {article.topic}</p>
          <CommentList article_id={article_id} />
        </li>
      </ul>
    </div>
  );
}
