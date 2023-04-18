import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function ReviewListCard({ review }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{review.title}</h3>
        <img
          className="review-img"
          src={review.review_img_url}
          alt="The reviewed game"
        />
        <br />
        <p>
          <div className="review-list-footer">
            <p className="review-list-category">Category: {review.category}</p>
            <p className="review-list-author">Written by: {review.owner}</p>
          </div>
        </p>
      </CardContent>
    </Card>
  );
}
