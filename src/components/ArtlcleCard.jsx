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

  const [likeCounter, setLikeCounter] = useState(0);
  const [dislikeCounter, setDislikeCounter] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = (event) => {
    const vote = event.target.value;
    const actualVote = () => {
      setVotesToAdd((currVotes) => currVotes + +vote);
      api
        .patchArticleVotes(article_id, +vote)
        .then(() => {
          setError(null);
        })
        .catch(() => {
          setVotesToAdd((currVotes) => currVotes - +vote);
          setError('Error! Please try again later');
        });
    };
    const resetVote = () => {
      setVotesToAdd((currVotes) => currVotes - +vote);
      api
        .patchArticleVotes(article_id, -vote)
        .then(() => {
          setError(null);
        })
        .catch(() => {
          setVotesToAdd((currVotes) => currVotes + +vote);
          setError('Error! Please try again later');
        });
    };

    if (vote === '1') {
      setLikeCounter((currLikes) => currLikes + 1);
    } else if (vote === '-1') {
      setDislikeCounter((currDislikes) => currDislikes + 1);
    }

    if (
      (likeCounter % 2 === 0 && vote === '1') ||
      (dislikeCounter % 2 === 0 && vote === '-1')
    ) {
      actualVote();
    } else if (
      (likeCounter % 2 === 1 && vote === '1') ||
      (dislikeCounter % 2 === 1 && vote === '-1')
    ) {
      resetVote();
    }
  };

  return (
    <div>
      <br />

      <h2>Article</h2>
      <ul className="article-list">
        <li key={article.article_id}>
          <h3>{article.title}</h3>
          <p>Written by: {article.author}</p>
          <p>{article.body}</p>
          <p>Comments: {article.comment_count}</p>
          <p>Likes: {article.votes + votesToAdd}</p>
          <p>
            {' '}
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
            <br />
            {error ? <p>{error}</p> : null}
          </p>
          <p>Topic: {article.topic}</p>
          <CommentList article_id={article_id} />
        </li>
      </ul>
    </div>
  );
}
