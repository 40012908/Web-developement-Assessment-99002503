var express = require('express');
var app = express();
var bookList = require('./books.json')


var cors = function(req, res, next) 
{ 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 

app.use(cors);

//http://localhost:3000/showBooks
app.get("/showBooks",function(req,res){
    res.status(200).send(bookList);
})
//http://localhost:3000/showByAuthor?author=kathy
app.get("/showByAuthor",function(req,res){
    var author = req.query.author;
    var newBookList =[];
    bookList.forEach(book=>{
        if(book.author==author)
            newBookList.push(book);
    });
    res.status(200).send(newBookList);
});

//http://localhost:3000/showByCategory?category=Tech
app.get("/showByCategory",function(req,res){
    var category = req.query.category;
    var newBookList =[];
    bookList.forEach(book=>{
        if(book.category==category)
            newBookList.push(book);
    });
    res.status(200).send(newBookList);
})

app.listen('3000',function(){
    console.log('Server listning to port 3000');
});
