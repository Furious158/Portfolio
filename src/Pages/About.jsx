import { useState } from "react";
import { Link } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-blue-900 via-gray-900 to-gray-800 text-white">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white backdrop-blur-md z-50 shadow-md">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="text-2xl lg:text-4xl font-bold tracking-widest"></div>
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
        <div className="fixed top-0 right-0 bg-white text-black shadow-lg rounded-lg w-3/4 max-w-sm h-auto flex flex-col items-start p-6 z-50 transform transition-transform duration-300">
          <button
            className="text-xl self-end mb-4 text-gray-700"
            onClick={toggleMenu}
            aria-label="Close navigation menu"
          >
            ✖
          </button>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-lg font-semibold hover:text-blue-500"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
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

      {/* Main Section */}
      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center py-24 px-8">
          <h1 className="text-5xl font-bold mb-8 text-center">
            À Propos de Moi
          </h1>
        </div>

        {/* Content Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 lg:px-12 py-16 space-y-8 md:space-y-0 md:space-x-12">
          {/* Text Section */}
          <div className="max-w-2xl text-lg leading-relaxed text-gray-300">
            <p>
              Bonjour ! Je suis Mamoune Benouna, développeur Full Stack
              passionné et étudiant en informatique. Je me consacre à la
              création d'applications web élégantes, réactives et efficaces
              offrant des expériences utilisateur exceptionnelles.
            </p>
            <p className="mt-6">
              Avec une forte attention aux détails et une curiosité insatiable,
              j'aime explorer de nouvelles technologies pour résoudre des défis
              complexes. Mon objectif est d'utiliser mes compétences pour
              concevoir des solutions innovantes.
            </p>
          </div>

          {/* Image + CV Download */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            {/* Image */}
            <div className="w-64 h-64 bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="screenshotcv.png"
                alt="CV"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
            {/* Download Button */}
            <a
              href="/CV_Mamoune.pdf"
              download="CV_Mamoune.pdf"
              className="mt-6 flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              <DownloadIcon className="mr-2" />
              Télécharger CV
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default About;
