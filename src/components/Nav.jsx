import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../api';

export default function Nav() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    api.fetchCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <nav>
      <Link to="/">All</Link>
      {categories.map((category) => {
        return (
          <span key={category.slug}>
            {' | '}
            <Link to={`/reviews/category/${category.slug}`}>
              {category.slug}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
