import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-gradient-to-b from-blue-900 via-gray-900 to-gray-800">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white backdrop-blur-md z-50 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl lg:text-4xl font-bold tracking-widest">
          </div>
          {/* Burger Menu Button */}
          <button
            className="text-3xl focus:outline-none lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 text-lg">
            <Link
              to="/"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/Contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/About"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Menu Burger Mobile */}
      {menuOpen && (
        <div
          className="fixed top-0 right-0 bg-gray-800 text-white shadow-lg w-3/4 max-w-sm h-screen flex flex-col items-start p-6 z-50 transform transition-transform duration-300"
        >
          {/* Bouton de Fermeture */}
          <button
            className="text-xl self-end mb-4 text-gray-300 hover:text-gray-100"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            ✕
          </button>

          {/* Liens du Menu */}
          <ul className="space-y-6 text-lg">
            <li>
              <Link
                to="/Contact"
                className="block font-semibold hover:text-blue-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="block font-semibold hover:text-blue-400"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col items-center justify-center px-8 text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 mb-8">
          <img
            src="/Moi2.JPG"
            alt="Mamoune Benouna Portrait"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-6xl font-extrabold mb-4 tracking-wide">
          Mamoune Benouna
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-lg">
          Développeur WEB | Étudiant en informatique 
        </p>
        <a
          href="#projects"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-full shadow-lg transition duration-300"
        >
          Explorez mes projets
        </a>
      </div>

      {/* Projects Section */}
<section id="projects" className="py-20 px-6 bg-gray-900 text-white">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4 text-blue-400">Mes Projets</h2>
    <p className="text-gray-400 max-w-2xl mx-auto">
      Voici quelques-unes de mes réalisations, illustrant mes compétences en développement web.
    </p>
  </div>
  <div className="flex flex-wrap justify-center gap-12">
    {/* Projet Quiz */}
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800 transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Projet Quiz</h3>
      <img
        src="/image3.png"
        alt="Quiz"
        className="h-40 mx-auto mb-4 object-cover rounded-lg"
      />
      <p className="text-gray-600 mb-4">Compétences utilisées : Go</p>
      <a
        href="https://ytrack.learn.ynov.com/git/bmamoune/quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:text-blue-700"
      >
        Voir sur GitHub
      </a>
    </div>

    {/* Projet Forum2 */}
    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800 transform transition-transform duration-300 hover:scale-105">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Plateforme d'échange</h3>
      <a
        href="https://mediumturquoise-frog-337595.hostingersite.com/index.php"
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-lg"
      >
        <img
          src="/photoforum2.png"
          alt="StudentExchange"
          className="h-40 mx-auto mb-4 object-cover rounded-lg"
        />
      </a>
      <p className="text-gray-600 mb-4">Compétences utilisées : PHP, SQL</p>
      <a
        href="https://github.com/Furious158/desc/tree/moune"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:text-blue-700"
      >
        Voir sur GitHub
      </a>
    </div>

    <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800 transform transition-transform duration-300 hover:scale-105">
  <h3 className="text-xl font-bold mb-4">Projet Forum</h3>
  <img
    src="/image.png"
    alt="Forum"
    className="h-40 mx-auto mb-4 object-cover rounded-lg"
  />
  <p className="text-gray-600 mb-4">Compétences utilisées : SQL, Go</p>
  <a
    href="https://ytrack.learn.ynov.com/git/bmamoune/forum2"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 text-blue-500 hover:text-blue-700"
  >
    Voir sur GitHub
  </a>
</div>
  </div>

  {/* Ajout d'un espace entre la section projet et le footer */}
  <div className="mt-20"></div>
</section>


      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;
