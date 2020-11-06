var express = require('express');
var app = express();
var bookList = require('./cusineinfo.json');

var cors = function(req, res, next) {
     res.setHeader('Access-Control-Allow-Origin', '*');
      next();
     } 
    app.use(cors);

app.get("/showbooks",function(req,res){
    res.status(200).send(bookList);
});

app.get("/showByAuthor",function(req,res){
    var city = req.query.city;
    var newBookList=[];
    bookList.forEach(book=>{
        if(book.city==city){
            newBookList.push(book);
        }
    });
    res.status(200).send(newBookList);
});

app.get("/showByCategory",function(req,res){
    var category = req.query.category;
    var newBookList=[];
    bookList.forEach(book=>{
        if(book.category==category){
            newBookList.push(book);
        }
    });
    res.status(200).send(newBookList);
});

app.listen('3003',function(){
    console.log('Server listning to port 3000');
});