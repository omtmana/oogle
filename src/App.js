import './App.css';
import Home from './components/Home';
import About from './components/About';
import Maps from './components/Maps';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/maps"> Maps </Link>
          <Link to="/about"> About </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
