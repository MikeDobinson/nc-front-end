import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ArticleListCard({ article }) {
  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="300"
        image={article.article_img_url}
        alt="Article on {article.topic}"
      />
      <CardContent>
        <h3>
          <Link
            aria-label="See article in more detail"
            to={`/articles/${article.article_id}`}
          >
            {article.title}
          </Link>
        </h3>
        <div className="article-list-footer-header">
          <p className="article-list-left-align">Topic: {article.topic}</p>
          <p className="article-list-right-align">
            Written by: {article.owner}
          </p>
        </div>
        <div className="article-list-footer-header">
          <p className="article-list-left-align">
            Comments: {article.comment_count}
          </p>
          <p className="article-list-right-align">Likes: {article.votes}</p>
        </div>

        <br />
      </CardContent>
    </Card>
  );
}
