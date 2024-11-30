import { Link } from "react-router-dom";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div className="relative min-h-screen bg-[url('/5594016.jpg')] bg-cover bg-center text-white">
      <div>
        <nav>
          <div className="fixed top-0 left-0 w-full bg-sky-600 text-white p-4 flex justify-between items-center">
            {/* Mamoune Benouna aligné à gauche */}
            <div className="text-4xl font-sherif">Mamoune Benouna</div>

            {/* Liens alignés à droite */}
            <ul className="flex space-x-8 text-2xl">
              <li className="hover:text-blue-400 mr-4">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-400 mr-4">
                <Link to="/Contact">Contact</Link>
              </li>
              <li className="hover:text-blue-400 mr-4">
                <Link to="/About">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Section de contact principale */}
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-8">
        <h1 className="text-5xl font-sherif text-center text-white mb-8 py-8">Contact</h1>

        <div className="flex flex-wrap justify-between items-center py-20 px-8 gap-8">
          <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center ">
            <HomeRepairServiceIcon style={{ fontSize: 40 }} />
            <div>
              Rennes, France
              <br />
              Ynov Campus
            </div>
          </div>
          <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center ">
            <EmailIcon style={{ fontSize: 40 }} />
            ghaliben14@gmail.com
          </div>
          <div className="w-64 h-64 bg-white p-8 rounded-lg shadow-lg text-center ">
            <SmartphoneIcon style={{ fontSize: 40 }} />
            <div>
              +33640820290
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full">
          <form className="space-y-6">
            <div>
              <label className="block text-xl mb-2 font-semibold" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-xl mb-2 font-semibold" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block text-xl mb-2 font-semibold" htmlFor="message">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-sky-600 text-white py-3 px-6 rounded-full shadow-md transform transition duration-300 hover:scale-105 hover:from-sky-600 hover:to-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Informations de contact */}
        <div className="mt-12 text-white text-center">
          <p className="text-xl">You can also reach me at:</p>
          <p className="mt-4">
            <strong>Email:</strong> mamoune.benouna@example.com
          </p>
          <p className="mt-2">
            <strong>Phone:</strong> +33 6 40 82 02 90
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/mamoune-benouna-878717270" target="_blank" className="hover:text-blue-400">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-blue-400">
              GitHub
            </a>
            <a href="https://www.instagram.com/_._mamoun_._/profilecard/?igsh=MTB4d2J4cHI4cmQ1dw==" target="_blank" className="hover:text-blue-400">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white p-4 text-center mt-auto bg-sky-600">
        <p className="text-lg">&copy; 2024 Mamoune Benouna. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
const sendEmail = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch("https://ton-backend.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      alert("Message envoyé avec succès !");
      e.target.reset(); // Réinitialise le formulaire
    } else {
      alert("Erreur : " + result.message);
    }
  } catch (error) {
    alert("Erreur lors de l'envoi : " + error.message);
  }
};

export default Contact;

