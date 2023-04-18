import React from 'react';
import * as api from '../api';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ReviewCard() {
  const { review_id } = useParams();

  const [review, setReview] = useState({});

  useEffect(() => {
    api.fetchReviewById(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return (
    <div>
      <h2>Review</h2>
      <ul className="review-list">
        <li key={review.review_id}>
          <h3>{review.title}</h3>
          <p>Written by: {review.owner}</p>
          <p>{review.review_body}</p>
          <p>Comments: {review.comment_count}</p>
          <p>Likes: {review.votes}</p>
          <p>Category: {review.category}</p>
        </li>
      </ul>
    </div>
  );
}
