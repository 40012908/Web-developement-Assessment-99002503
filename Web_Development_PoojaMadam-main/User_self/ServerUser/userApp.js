var express = require('express');
var app = express();
var userlist= require('./userinfo.json');

var cors = function(req, res, next) 
{ 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 

app.use(cors);
//http://localhost:3003/ShowUser

app.get('/ShowUser',function(req,res){
    res.status(200).send(userlist);
});

app.get("/showusername",function(req,res){
    var username = req.query.username;
    var newUserlist=[];
    userlist.forEach(lol=>{
        if(lol.username==username)
        {
            newUserlist.push(lol);
        }
    });
    res.status(200).send(newUserlist);
});

app.get('/showcity',function(req,res){
    var city = req.query.city;
    var newUserlist=[];
    userlist.forEach(book=>{
        if(book.city==city)
        {
            newUserlist.push(book);
        }
    });
    res.status(200).send(newUserlist);
});

app.get('/showemailid',function(req,res){
    var emailid = req.query.emailid;
    var newUserlist=[];
    userlist.forEach(book=>{
        if(book.emailid==emailid)
        {
            newUserlist.push(book);
        }
    });
    res.status(200).send(newUserlist);
});

app.get('/showphone',function(req,res){
    var phone_num = req.query.phone;
    var newUserlist=[];
    userlist.forEach(book=>{
        if(book.phone==phone_num)
        {
            newUserlist.push(book);
        }
    });
    res.status(200).send(newUserlist);
});

app.listen('3003',function(){
    console.log('Server listning to port 3003');
});
