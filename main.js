var express = require('express');
var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

console.log(app.set("view"));

//.use中间件
//静态图片位置poi
app.use('/static/img', express.static(__dirname + "/img"));
//js.css文件位置
app.use('/static', express.static(__dirname + '/static'));
/*
http://127.0.0.1:8081/static/;
=>d:\MyFile\;
*/

app.get('/', function(req, res) {
    console.log("进入首页");
    res.render("index");
    //res.send('Hello World');
});

app.get("/look", function(req, res) {
    res.render("look");
});

app.get("/user/:id", function(req, res) {
    //从req.params获取id信息
    res.end(req.params.id);
    //res.render(req.params.name);
});

var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log("http://127.0.0.1:8081");
    console.log(server.address());
    console.log(process.argv.slice(2).join(""));
});
