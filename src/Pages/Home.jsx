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
  <div className="flex items-center justify-between px-4 py-3">
    {/* Logo */}
    <div className="text-2xl lg:text-4xl font-sherif whitespace-nowrap">
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
    <nav className="hidden lg:flex space-x-6 text-lg">
      <Link to="/" className="hover:text-blue-300 transition duration-300">
        Home
      </Link>
      <Link to="/Contact" className="hover:text-blue-300 transition duration-300">
        Contact
      </Link>
      <Link to="/About" className="hover:text-blue-300 transition duration-300">
        About
      </Link>
    </nav>
  </div>

  {/* Menu Burger Mobile */}
{menuOpen && (
  <div
    className="fixed top-0 right-0 bg-white text-black shadow-lg rounded-lg w-3/4 max-w-sm h-auto flex flex-col items-start p-6 z-50"
    style={{ transition: "transform 0.3s ease-in-out" }}
  >
    {/* Bouton de Fermeture */}
    <button
      className="text-0xl self-end mb-4 text-gray-700"
      onClick={toggleMenu}
      aria-label="Close navigation menu"
    >
      ☰
    </button>

    {/* Liens du Menu */}
    <ul className="space-y-4">
      <li>
        <Link
          to="/Contact"
          className="block text-lg font-semibold hover:text-blue-500"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/About"
          className="block text-lg font-semibold hover:text-blue-500"
          onClick={toggleMenu}
        >
          About
        </Link>
      </li>
    </ul>
  </div>
  
)
}

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
            Développeur WEB/Cyber | Étudiant en informatique
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
        href="https://ytrack.learn.ynov.com/git/bmamoune/quiz"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:underline"
      >
        Voir sur GitHub
      </a>
    </div>

 {/* Projet Forum2 */}
<div className="w-full md:w-80 bg-white p-6 rounded-lg shadow-lg text-center">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Plateforme d'échange entre étudiants</h3>
  
  {/* Conteneur de l'image avec effet de zoom */}
  <a 
    href="https://mediumturquoise-frog-337595.hostingersite.com/index.php" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="block overflow-hidden rounded-lg"
  >
    <img 
      src="/photoforum2.png" 
      alt="StudentExchange" 
      className="h-32 w-full object-cover transition-transform duration-300 transform hover:scale-105"
    />
  </a>
  
  <p className="text-gray-600 mt-4">Compétences utilisées : SQL, Php</p>
  <a
    href="https://github.com/Furious158/desc/tree/moune"
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

  {/* Bouton Contact Me */}
  <div className="text-center mt-12">
    <Link
      to="/Contact"
      className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
    >
      Contact Me
    </Link>
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
