import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ReviewListCard({ review }) {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        image={review.review_img_url}
        alt="The reviewed game"
      />
      <CardContent>
        <h3>
          <Link
            aria-label="See review in more detail"
            to={`/reviews/${review.review_id}`}
          >
            {review.title}
          </Link>
        </h3>
        <div className="review-list-footer-header">
          <p className="review-list-left-align">Category: {review.category}</p>
          <p className="review-list-right-align">Written by: {review.owner}</p>
        </div>
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
