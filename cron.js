const cron = require("cron");
const https = require("https");

const backEndUrl = "https://wakarkserverback.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
    console.log("Redémarrage du serveur");

    https.get(backEndUrl, (res) => {
        if (res.statusCode === 200) {
            console.log("Serveur redémarré avec succès");
        } else {
            console.error("Échec du redémarrage du serveur");
        }
    });
});

module.exports = job;
