import React from 'react';
import * as api from '../api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CommentList from './CommentList';
import Button from '@mui/material/Button';

export default function ArticleCard() {
  const { article_id } = useParams();
  const [votesToAdd, setVotesToAdd] = useState(0);
  const [article, setArticle] = useState({});

  useEffect(() => {
    api.fetchArticleById(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

  const handleVote = (event) => {
    if (votesToAdd === 0) {
      setVotesToAdd(+event.target.value);
    } else {
      setVotesToAdd(0);
    }
    api.patchArticleVotes(article_id, +event.target.value);
  };
  return (
    <div>
      <br />
      <Button
        value="1"
        key="like-button"
        variant="contained"
        color="primary"
        onClick={handleVote}
      >
        Like
      </Button>{' '}
      <Button
        value="-1"
        key="dislike-button"
        variant="contained"
        color="primary"
        onClick={handleVote}
      >
        Dislike
      </Button>
      <h2>Article</h2>
      <ul className="article-list">
        <li key={article.article_id}>
          <h3>{article.title}</h3>
          <p>Written by: {article.author}</p>
          <p>{article.body}</p>
          <p>Comments: {article.comment_count}</p>
          <p>Likes: {article.votes + votesToAdd}</p>
          <p>Topic: {article.topic}</p>
          <CommentList article_id={article_id} />
        </li>
      </ul>
    </div>
  );
}
