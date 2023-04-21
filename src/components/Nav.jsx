import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api';

export default function Nav() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    api.fetchTopics().then((topics) => {
      setIsLoading(false);
      setTopics(topics);
    });
  }, []);

  return (
    <nav>
      <Link to="/">All</Link>
      {isLoading ? <p>Loading...</p> : null}
      {topics.map((topic) => {
        return (
          <span key={topic.slug}>
            {' | '}
            <Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link>
          </span>
        );
      })}
    </nav>
  );
}
