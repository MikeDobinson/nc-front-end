import React from 'react';
import { useEffect } from 'react';
import * as api from '../api';

export default function CommentList({
  article_id,
  commentToAdd,
  comments,
  setComments,
}) {
  useEffect(() => {
    api.fetchCommentsByArticleId(article_id).then((comments) => {
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
      <ul className="comment-list">
        {commentToAdd ? (
          <div>
            <li key="added-comment">
              <h3>Comment Posted!</h3>
            </li>
          </div>
        ) : null}
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
