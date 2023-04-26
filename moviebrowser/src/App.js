import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import AboutView from './componets/AboutView';
import SearchView from './componets/SearchView';
import { Routes, Route, Navigate } from 'react-router-dom';
import MovieView from './componets/MovieView';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=afc68910279ea89e265dd0ec7f0d871b&language=en-US&query=${searchText}&page=1&include_adult=false
      `)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="App">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={AboutView} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" Component={MovieView} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
