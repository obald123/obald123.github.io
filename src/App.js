import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Languages from './pages/Languages';
import Experience from './pages/Experience';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white text-gray-900 font-sans">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-blue-700">SIMUGOMWA Obald</h1>
            <nav className="hidden md:block">
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
                  <Link to="/experience" className="hover:text-blue-600 transition">
                    Experience
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
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden bg-white border-t border-gray-200">
              <ul className="flex flex-col space-y-2 px-6 py-4 text-gray-700 font-medium">
                <li>
                  <Link to="/" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/languages" className="block hover:text-blue-600 transition" onClick={toggleMenu}>
                    Languages
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
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
