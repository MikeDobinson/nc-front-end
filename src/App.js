import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import ArticleCard from './components/ArtlcleCard';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/articles"
          element={
            <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticleCard isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />

        <Route
          path="/articles/topic/:topic"
          element={
            <Articles isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
