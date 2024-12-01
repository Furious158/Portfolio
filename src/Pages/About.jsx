import { useState } from "react";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import DownloadIcon from "@mui/icons-material/Download";

function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative min-h-screen bg-[url('/5594016.jpg')] bg-cover bg-center text-white">
      {/* Navigation */}
      <nav>
  <div className="fixed top-0 left-0 w-full bg-sky-600 text-white p-4 flex justify-between items-center shadow-md z-50">
    <div className="text-3xl lg:text-4xl font-sherif whitespace-nowrap">
      Mamoune Benouna
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
    <ul className="hidden lg:flex space-x-6 text-lg lg:text-2xl">
      <li className="hover:text-blue-400">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-blue-400">
        <Link to="/Contact">Contact</Link>
      </li>
      <li className="hover:text-blue-400">
        <Link to="/About">About</Link>
      </li>
    </ul>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <nav
      className="lg:hidden fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 z-50"
      style={{ zIndex: 50 }}
    >
      <Link
        to="/"
        className="text-xl hover:text-blue-300"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/Contact"
        className="text-xl hover:text-blue-300"
        onClick={toggleMenu}
      >
        Contact
      </Link>
      <Link
        to="/About"
        className="text-xl hover:text-blue-300"
        onClick={toggleMenu}
      >
        About
      </Link>
    </nav>
  )}
</nav>


      {/* Main Section */}
      <div className="flex flex-col items-center justify-center py-24 px-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
          About Me
        </h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 lg:px-12 py-16 space-y-8 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <div className="max-w-2xl text-base lg:text-lg leading-relaxed text-white">
          <p>
            Hello! I am Mamoune Benouna, a passionate Full Stack Developer and
            student in computer science. I am dedicated to creating elegant,
            responsive, and efficient web applications that deliver great user
            experiences.
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magni veniam rerum voluptatum illum distinctio, voluptatibus debitis ullam id culpa itaque quae! Fuga error quis ullam maxime laudantium non iure.
          </p>
        </div>

        {/* Image + CV Download */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          {/* Image */}
          <div className="w-64 h-64 bg-white p-4 rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="image411.png"
              alt="CV"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
          {/* Download Button */}
          <a
            href="/cv.mamoune.pdf"
            download="Cv_Mamoune"
            className="mt-6 flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            <DownloadIcon className="mr-2" />
            Télécharger CV
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center py-8">
        <Divider className="bg-white w-3/4">~ Discover ~</Divider>
      </div>

      {/* Footer */}
      <footer className="text-white text-center py-4 bg-sky-600">
        <p className="text-sm lg:text-lg">
          &copy; 2024 Mamoune Benouna. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default About;
