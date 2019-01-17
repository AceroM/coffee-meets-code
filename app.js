const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { database } = require("./models/index");


app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

app.use("/routes/api", require("./routes/api"));

database.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

database.sync().then(() => console.log("tables created!"));

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});
