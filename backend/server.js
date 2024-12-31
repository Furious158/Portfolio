import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// Route pour envoyer des emails
app.post("/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Tous les champs sont requis." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL, // Obligatoire pour Gmail
      to: process.env.EMAIL, // Ton email pour recevoir le message
      replyTo: email, // L'email de l'utilisateur pour faciliter la réponse
      subject: `Message de ${name}`, // Sujet personnalisé
      text: message, // Contenu du message
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email : ", error);
    res.status(500).json({ success: false, message: "Erreur lors de l'envoi de l'email." });
  }
});


const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}`);
});
