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
    appId: "e2da2f99-833f-496a-8778-2cb1b2e6db06",
    appPassword: "GwStcbGb2NFWwCGvFcoiN3f"
});
var msgBot = new msgBuilder.UniversalBot(msgConnector);

var callConnector = new callBuilder.CallConnector({
    callbackUri: "https://nodejsdemo01.herokuapp.com/api/calls",
    appId: "e2da2f99-833f-496a-8778-2cb1b2e6db06",
    appPassword: "GwStcbGb2NFWwCGvFcoiN3f",
});
var callBot = new callBuilder.UniversalCallBot(callConnector);

app.post("/api/messages",msgConnector.listen());
app.post("/api/calls",callConnector.listen());

msgBot.dialog("/", function (session) {
    session.send("hello Shailendra");
});

callBot.dialog("/", function (session) {
    session.send("Hello Shailendra. How may I help you");
});



