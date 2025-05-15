const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const att = 20;
const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());
const pool = mysql.createPool({
  host: "srv1690.hstgr.io", 
  user: "u764592832_poly_admin", 
  password: "0[Ydlkguavy",
  database: "u764592832_centre_poly",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.post("/api/submit-form", async (req, res) => {
  const { Nom, Email, Adresse, 'Numéro de téléphone': phone, Langue, courseType } = req.body;

  if (!Nom || !Email || !Adresse || !phone || !Langue || !courseType) {
    return res.status(400).json({ message: "Tous les champs sont requis !" });
  }

  try {
    const query = `
      INSERT INTO data_form (Nom, Email, Adresse, \`Numéro de téléphone\`, Langue, courseType)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    pool.execute(query, [Nom, Email, Adresse, phone, Langue, courseType], (error, results) => {
      if (error) {
        console.error("Erreur d'insertion dans la base de données:", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
      }
      
      res.status(200).json({ message: "Formulaire soumis avec succèssss !" });
    });

  } catch (error) {
    console.error("Erreur lors de l'envoi des données:", error);
    res.status(500).json({ message: "Erreur interne du serveur" });
  }
});

app.listen(port, () => {
  //console.log(`Server is running on http://localhost:${port}`);
});
