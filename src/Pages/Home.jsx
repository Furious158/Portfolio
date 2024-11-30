import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white backdrop-blur-lg z-50">

        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-4xl font-sherif">Mamoune Benouna</div>
          {/* Burger Menu Button */}
          <button
            className="text-3xl focus:outline-none lg:hidden"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-2xl">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link to="/Contact" className="hover:text-blue-300">
              Contact
            </Link>
            <Link to="/About" className="hover:text-blue-300">
              About
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden bg-black bg-opacity-90 text-white p-4 space-y-4">
            <Link
              to="/"
              className="block text-xl hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/Contact"
              className="block text-xl hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="block text-xl hover:text-blue-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
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
              alt="Your Portrait"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-4xl font-bold">Mamoune Benouna</h1>
          <p className="text-lg text-gray-300 mt-2">
            Développeur Full Stack | Étudiant en informatique
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative h-screen bg-[url('/yup.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl font-bold mb-8">My Work</h2>
          <div className="flex flex-wrap justify-center gap-8 px-8 py-20">
            <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Projet Quiz</h3>
              <img src="image3.png" alt="Quiz" className="h-32 mx-auto" />
              <p>Compétences utilisées : Go</p>
            </div>
            <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Projet Forum</h3>
              <img src="image.png" alt="Forum" className="h-32 mx-auto" />
              <p>Compétences utilisées : SQL, Go</p>
            </div>
            <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Coucou</h3>
            </div>
            <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">Hey</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white p-4 text-center bg-black">
        <p className="text-lg">&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
