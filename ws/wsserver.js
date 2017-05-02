//var express = require("express"),
//    wsio = require("websocket.io");
var ws = require("ws").Server;

var wss = new ws({
    port: 3000
});

//var app = express();

//var ws = wsio.attach(app);

//app.use(express.static("public"))

wss.on("connection", function(scoket) {
    console.log(wss.clients.size + "个用户连接");
    scoket.on("message", function(msg) {
        console.log(msg);
    });
    scoket.on("close", function(msg) {
        console.log(wss.clients.size + "个用户连接");
    });
    scoket.send("yyy");
});

// app.listen(3000, function() {
//     console.log("ws://127.0.0.1:3000");
// });