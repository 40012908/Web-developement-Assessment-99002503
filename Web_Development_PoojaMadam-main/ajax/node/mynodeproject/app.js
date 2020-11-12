var express = require('express');
var app = express();
var bookList =require('./books.json')

app.get('/',function(req,res){
    res.send('welcome to Express');
});

app.listen('4002',function(){
    console.log('Server running in port 4002');
})
//http://localhost:4002/loginUser?username=pooja&city=banglore
app.get("/loginUser",function(req,res){
    var uname = req.query.username;
    var ucity = req.query.city;
    var newuser={username:uname,city:ucity}
    res.send(newuser); 
})

//url should be http://localhost:4002/search/Innova
app.get("/search/:choice",function(req,res){
    var cab = req.params.choice;
    res.send("Your car Choice is ",cab)
})

//url should be http://localhost:4002/searchCab/Innova/AC
app.get("/searchCab/:choice/:type",function(req,res){
    var cab = req.params.choice;
    var cabType = req.params.type;
    res.send("Your car Choice is "+cab+' with '+cabType);
})

// http://localhost:4002/searchCab/Innova/AC
app.get("/searchCabs/:choice/:type",function(req,res){
    var cab = req.params;
    res.send(cab);
})
//http://localhost:4002/showBooks
app.get("/showBooks",function(req,res){
    res.send(bookList);
})


