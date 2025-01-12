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

  const sendEmail = async (name, email, message) => {
    try {
      const response = await fetch(
        "https://portfolioo-unkx.onrender.com/send-mail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi de l'email");
      }

      const data = await response.json();
      console.log("Réponse du backend :", data);
      alert("Message envoyé avec succès !");
    } catch (error) {
      console.error("Erreur :", error.message);
      alert("Erreur lors de l'envoi du message.");
    }
  };

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

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center py-24 px-8">
        <h1 className="text-5xl font-bold mb-12 text-center">Contactez-moi !</h1>

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
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;
              sendEmail(name, email, message);
            }}
          >
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>
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
     <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Contact;
