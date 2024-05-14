const cron = require("cron");
const https = require("https");

const backEndUrl = "https://wakarkserverback.onrender.com/leaderboards";

const job = new cron.CronJob(
    ("*/14 * * * *",
    function () {
        console.log("restarting server");

        https.get(backEndUrl, (res) => {
            if (res.statusCode === 200) {
                console.log("Server Restarted");
            } else {
                console.error("failed to restart");
            }
        });
    })
);

module.exports = {
    job,
};
