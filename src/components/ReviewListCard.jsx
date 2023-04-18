import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ReviewListCard({ review }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{review.title}</h3>
        <div className="review-list-footer-header">
          <p className="review-list-left-align">Category: {review.category}</p>
          <p className="review-list-right-align">Written by: {review.owner}</p>
        </div>
        <img
          className="review-img"
          src={review.review_img_url}
          alt="The reviewed game"
        />
        <div className="review-list-footer-header">
          <p className="review-list-left-align">
            Comments: {review.comment_count}
          </p>
          <p className="review-list-right-align">Likes: {review.votes}</p>
        </div>
        <br />
      </CardContent>
    </Card>
  );
}
