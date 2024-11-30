const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route pour envoyer un email
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Tous les champs sont requis." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Ou un autre service SMTP
      auth: {
        user: process.env.EMAIL, // Défini dans le fichier .env
        pass: process.env.PASSWORD, // Mot de passe ou mot de passe d'application
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL, // Ton adresse pour recevoir les messages
      subject: `Message de ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email : ", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
