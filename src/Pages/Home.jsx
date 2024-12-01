import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white backdrop-blur-lg z-50 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-4xl font-sherif">Mamoune Benouna</div>
          {/* Burger Menu Button */}
          <button
            className="text-3xl focus:outline-none lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-xl">
            <Link to="/" className="hover:text-blue-300 transition duration-300">
              Home
            </Link>
            <Link
              to="/Contact"
              className="hover:text-blue-300 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="hover:text-blue-300 transition duration-300"
            >
              About
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6">
            <Link
              to="/"
              className="text-2xl hover:text-blue-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/Contact"
              className="text-2xl hover:text-blue-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="text-2xl hover:text-blue-300"
              onClick={toggleMenu}
            >
              About
            </Link>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn pointer-events-none"
          src="/Background2.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mb-6">
            <img
              src="/Moi2.JPG"
              alt="Mamoune Benouna Portrait"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl font-bold">Mamoune Benouna</h1>
          <p className="text-lg text-gray-300 mt-2">
            Développeur Full Stack | Étudiant en informatique
          </p>
          <a
            href="#projects"
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-lg shadow-md transition duration-300"
          >
            Explorez mes projets
          </a>
        </div>
      </div>

      {/* Projects Section + Footer with shared background */}
      <div
        className="relative min-h-screen bg-[url('/5594016.jpg')] bg-cover bg-center text-white"
      >
        <div className="text-center py-12 mb-12">
          <h2 className="text-4xl py-12 font-bold">Mes Projets</h2>
          <p className="text-gray-400 mt-4">
            Découvrez quelques-unes de mes réalisations dans le développement web.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-8">
          {/* Projet Quiz */}
          <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Projet Quiz</h3>
            <img src="/image3.png" alt="Quiz" className="h-32 mx-auto mb-4" />
            <p className="text-gray-600">Compétences utilisées : Go</p>
            <a
              href="https://ytrack.learn.ynov.com/git/bmamoune/forum2"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>

          {/* Projet Forum */}
          <div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Projet Forum</h3>
            <img src="/image.png" alt="Forum" className="h-32 mx-auto mb-4" />
            <p className="text-gray-600">Compétences utilisées : SQL, Go</p>
            <a
              href="https://ytrack.learn.ynov.com/git/bmamoune/forum2"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 text-blue-500 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-6">
          <p className="text-lg text-gray-400">
            &copy; 2024 Mamoune Benouna. Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
