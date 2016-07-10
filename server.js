var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

  url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0738531367/';

  request(url, function(error, response, html){
    if(!error){

        var $ = cheerio.load(html);
        var json;

        $('pre').filter(function(){
            var data = $(this);
            res.send("data: " + data);
        })
    }
    // fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
    //   console.log('output success');
    // })

    // res.send('Check your console!')
  })
})

app.listen('8080')
console.log('Running on 8080');
exports = module.exports = app;