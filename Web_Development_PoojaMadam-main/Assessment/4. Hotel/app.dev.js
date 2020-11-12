"use strict";

var express = require('express');

var app = express();

var bookList = require('./books.json');

var cors = function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

app.use(cors);
app.get("/showbooks", function (req, res) {
  res.status(200).send(bookList);
});
app.get("/showByAuthor", function (req, res) {
  var author = req.query.author;
  var newBookList = [];
  bookList.forEach(function (book) {
    if (book.author == author) {
      newBookList.push(book);
    }
  });
  res.status(200).send(newBookList);
});
app.get("/showByCategory", function (req, res) {
  var category = req.query.category;
  var newBookList = [];
  bookList.forEach(function (book) {
    if (book.category == category) {
      newBookList.push(book);
    }
  });
  res.status(200).send(newBookList);
});
app.listen('3003', function () {
  console.log('Server listning to port 3000');
});