import './App.css';
import Header from './components/Header';
import Articles from './components/Articles';
import ArticleCard from './components/ArtlcleCard';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<ArticleCard />} />
        <Route path="/articles/topic/:topic" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
