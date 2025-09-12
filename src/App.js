import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Languages from './pages/Languages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white text-gray-900 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-blue-700">SIMUGOMWA Obald</h1>
            <nav>
              <ul className="flex space-x-6 text-gray-700 font-medium">
                <li>
                  <Link to="/" className="hover:text-blue-600 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-600 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="hover:text-blue-600 transition">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-blue-600 transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/languages" className="hover:text-blue-600 transition">
                    Languages
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/languages" element={<Languages />} />
          </Routes>
        </main>
        <footer className="bg-white shadow-inner py-6 mt-12">
          <div className="container mx-auto px-6 text-center text-gray-600 font-medium">
            © 2024 SIMUGOMWA Obald
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
