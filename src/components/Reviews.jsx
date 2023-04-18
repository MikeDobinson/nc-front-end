import React from 'react';
import { useState } from 'react';
import * as api from '../api';
import ReviewListCard from './ReviewListCard';

// const reviews = [
//   {
//     category: 'hidden-roles',
//     created_at: '2021-02-05T11:27:26.563Z',
//     designer: 'Don Keigh',
//     owner: 'cooljmessy',
//     review_id: 14,
//     review_img_url:
//       'https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?w=700&h=700',
//     title: 'Velit tempor ullamco amet ipsum dolor voluptate.',
//     votes: 3,
//     comment_count: 0,
//   },
//   {
//     category: 'dexterity',
//     created_at: '2021-01-25T11:16:54.963Z',
//     designer: 'Avery Wunzboogerz',
//     owner: 'tickle122',
//     review_id: 13,
//     review_img_url:
//       'https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?w=700&h=700',
//     title: "Kerplunk; Don't lose your marbles",
//     votes: 9,
//     comment_count: 3,
//   },
// ];

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
