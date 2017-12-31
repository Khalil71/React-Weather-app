var express = require('express');

//Create app

var app = express();
const PORT = process.env.port || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto' === 'http']){
    next();
  }else{
    res.redirect('http://' + req.hostname + req.url)
  }
});


app.use(express.static('public'));

app.listen(port, function () {
  console.log("server is up on port " + PORT);
});
