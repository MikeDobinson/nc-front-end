import React from 'react';
import { useState } from 'react';
import * as api from '../api';
import ReviewListCard from './ReviewListCard';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  api.fetchReviews().then((reviews) => {
    setReviews(reviews);
  });

  return (
    <div>
      <h2>Reviews</h2>
      <ul className="review-list">
        {reviews.map((review) => {
          return (
            <li key={review.review_id}>
              <ReviewListCard review={review} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
