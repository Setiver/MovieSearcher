import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import AboutView from './componets/AboutView';
import SearchView from './componets/SearchView';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={AboutView} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
      </Routes>
    </div>
  );
}

export default App;
