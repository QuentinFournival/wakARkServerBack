const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const connection = mysql.createConnection({
    host: "46.4.20.57",
    user: "plugindb",
    port: 3306,
    password: "8gNtNvhsT9L5X].q",
    database: "archievement",
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion à la base de données :", err);
        return;
    }
    console.log("Connexion à la base de données MySQL établie");
});

app.get("/leaderboards", (req, res) => {
    connection.query(
        "SELECT * FROM advancedachievements_tribedata",
        (err, results) => {
            if (err) {
                console.error(
                    "Erreur lors de la récupération des utilisateurs :",
                    err
                );
                res.status(500).json({
                    error: "Erreur lors de la récupération des utilisateurs",
                });
                return;
            }
            res.json(results);
        }
    );
});
app.get("/playerStats", (req, res) => {
    connection.query(
        "SELECT * FROM advancedachievements_playerdata",
        (err, results) => {
            if (err) {
                console.error(
                    "Erreur lors de la récupération des utilisateurs :",
                    err
                );
                res.status(500).json({
                    error: "Erreur lors de la récupération des utilisateurs",
                });
                return;
            }
            res.json(results);
        }
    );
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
