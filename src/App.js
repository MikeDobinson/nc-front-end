import './App.css';
import Header from './components/Header';
import Reviews from './components/Reviews';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
