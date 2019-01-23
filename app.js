const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const { db } = require("./models");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.use("/api", require("./api"));

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database!:', err);
    });

db.sync().then(() => console.log("tables created!"));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(process.env.PORT, () => {
    console.log("App is listening on port 5000");
});