import { useState } from "react";
import { Link } from "react-router-dom";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative min-h-screen bg-[url('/5594016.jpg')] bg-cover bg-center text-white">
      {/* Navigation */}
      <nav>
        <div className="fixed top-0 left-0 w-full bg-sky-600 text-white p-4 flex justify-between items-center shadow-md z-50">
          <div className="text-3xl lg:text-4xl font-sherif">Mamoune Benouna</div>
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
            className="lg:hidden fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center space-y-6 z-40"
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

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center py-24 px-8 text-white">
        <h1 className="text-5xl font-bold mb-12 text-center">Contact</h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Location */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center text-black">
            <HomeRepairServiceIcon style={{ fontSize: 40, color: "#4A5568" }} />
            <p className="mt-4 font-semibold">Rennes, France</p>
            <p>Ynov Campus</p>
          </div>
          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center text-black">
            <EmailIcon style={{ fontSize: 40, color: "#4A5568" }} />
            <p className="mt-4 font-semibold">ghaliben14@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center text-black">
            <SmartphoneIcon style={{ fontSize: 40, color: "#4A5568" }} />
            <p className="mt-4 font-semibold">+33 6 40 82 02 90</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl text-black">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your name"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your email"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-sky-600 text-white py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <p className="text-xl mb-4">You can also find me on:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/mamoune-benouna-878717270"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 flex flex-col items-center"
            >
              <LinkedInIcon style={{ fontSize: 40 }} />
              <span className="mt-2">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Furious158"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 flex flex-col items-center"
            >
              <GitHubIcon style={{ fontSize: 40 }} />
              <span className="mt-2">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/_._mamoun_._/profilecard/?igsh=MTB4d2J4cHI4cmQ1dw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 flex flex-col items-center"
            >
              <InstagramIcon style={{ fontSize: 40 }} />
              <span className="mt-2">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-4 text-center bg-sky-600">
        <p>&copy; 2024 Mamoune Benouna. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
