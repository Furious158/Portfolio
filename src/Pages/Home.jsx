import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null); // Référence pour l'effet Vanta.js

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA.WAVES({
          el: vantaRef.current, // Élément pour Vanta.js
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x474754, // Couleur
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative min-h-screen flex flex-col text-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white backdrop-blur-lg z-50 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
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
      </header>

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
        )}

      {/* Hero Section with Vanta.js Background */}
      <div className="relative h-screen flex flex-col items-center justify-center px-8 text-center">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mb-8">
          <img
            src="/Moi2.JPG"
            alt="Mamoune Benouna Portrait"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Mamoune Benouna</h1>
        <p className="text-lg text-gray-300 mb-6">
          Développeur WEB/Cyber | Étudiant en informatique
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-lg shadow-md transition duration-300"
        >
          Explorez mes projets
        </a>
      </div>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-gray-400">
            Découvrez quelques-unes de mes réalisations dans le développement
            web.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Projet Quiz */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
            <h3 className="text-xl font-bold mb-4">Projet Quiz</h3>
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
              className="block mt-4 text-blue-500 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>

          {/* Projet Forum2 */}
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
            <h3 className="text-xl font-bold mb-4">
              Plateforme d'échange entre étudiants
            </h3>
            <a
              href="https://mediumturquoise-frog-337595.hostingersite.com/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg"
            >
              <img
                src="/photoforum2.png"
                alt="StudentExchange"
                className="h-40 mx-auto mb-4 object-cover rounded-lg hover:underline transition-transform duration-300 transform hover:scale-105"
              />
            </a>
            <p className="text-gray-600 mb-4">Compétences utilisées : SQL, Php</p>
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
          <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
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
              className="block mt-4 text-blue-500 hover:underline"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;
