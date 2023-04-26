import './App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import AboutView from './componets/AboutView';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={AboutView} />
      </Routes>
    </div>
  );
}

export default App;
