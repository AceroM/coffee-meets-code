const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { db } = require("./models");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

//Database Code
app.use("/api", require("./api"));

db.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database!:', err);
    });

db.sync().then(() => console.log("tables created!"));

//Link to the React app
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const server = app.listen(process.env.PORT || 5000, () => {
    console.log("App is listening on port 5000");
});

var io = require('socket.io')(server);
//Socket
io.on('connection', function(socket){

    //Listen for connection, when one happens:
    socket.on('user_connect', function(name){
      console.log(name + " connected");
      io.emit('user_connect', name);
    });
    //Requires socket.io to be implemented in html
  
    //When someone disconnects:
    socket.on('disconnect', function(){
      io.emit('disconnect', socket.name);
    });
  
    //When someone sends a private message:
    socket.on('pm', function(msg, name, receiver){    
      io.emit('pm'+receiver, msg, name);
    });
  });