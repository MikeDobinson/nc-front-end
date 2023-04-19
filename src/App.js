import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ReviewCard from './components/ReviewCard';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<ReviewCard />} />
        <Route path="/reviews/category/:category" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
