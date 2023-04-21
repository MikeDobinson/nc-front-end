import React from 'react';
import { useEffect, useState } from 'react';
import * as api from '../api';

export default function CommentList({ article_id, comments, setComments }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api.fetchCommentsByArticleId(article_id).then((comments) => {
      setIsLoading(false);
      setComments(comments);
    });
  }, [article_id, setComments]);

  if (!comments.length)
    return (
      <div>
        <h2>Comments</h2>
        <p>No comments yet..</p>
      </div>
    );

  return (
    <div>
      <h2>Comments</h2>
      {isLoading ? <p>Loading...</p> : null}
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
