import React from 'react';
import { useState } from 'react';
import * as api from '../api';
import ReviewListCard from './ReviewListCard';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    api.fetchReviewsByCategory(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);

  useEffect(() => {
    api.fetchReviews().then((reviews) => {
      setReviews(reviews);
    });
  }, []);
  useEffect(() => {
    api.fetchReviewsByCategory(category).then((reviews) => {
      setReviews(reviews);
    });
  }, [category]);

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
