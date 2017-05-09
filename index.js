/************************************ 
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.end("Welcome to NodeJS Bot");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});     
  ***********************************/

  /*************************************
var restify = require("restify");
var msgBuilder = require("botbuilder");
var callBuilder = require("botbuilder-calling");
var port = process.env.port || 5000;

var server = restify.createServer();
server.listen(port, function () {
    console.log("server is running on localhost :" + port);
});


function send(req, res, next) {
     res.send("Welcome to NodeJS Bot");
    return next();
}

server.get("/", send);
******************************************/

var express = require('express');
var msgBuilder = require("botbuilder");
var callBuilder = require("botbuilder-calling");

var app = express();
app.set('port', (process.env.PORT || 5000));                      

app.get('/', function(request, response) {
  response.end("Welcome to NodeJS Bot");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});     

var msgConnector = new msgBuilder.ChatConnector({
    appId: "f126e5af-beaa-4774-8144-4d2e300df102",
    appPassword: "Phm137R0bCG9vu5rXgCc0pw"
});
var msgBot = new msgBuilder.UniversalBot(msgConnector);

var callConnector = new callBuilder.CallConnector({
    callbackUri: "https://skypecalling-demo.herokuapp.com/api/calls",
    appId: "f126e5af-beaa-4774-8144-4d2e300df102",
    appPassword: "Phm137R0bCG9vu5rXgCc0pw",
});
var callBot = new callBuilder.UniversalCallBot(callConnector);

//server.post("/api/messages", msgConnector.listen());
//server.post("/api/calls", callConnector.listen());
app.post("/api/messages",msgConnector.listen());
app.post("/api/calls",callConnector.listen());

msgBot.dialog("/", function (session) {
    session.send("hello Shailendra");
});

callBot.dialog("/", function (session) {
    session.send("Hello Shailendra. How may I help you");
});



