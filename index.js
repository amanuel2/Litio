var express = require('express');
var path    = require('path');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var regCtrl = require('./controllers/registerController.js');

var app = express();
const PORT = 8080;

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static(__dirname + '/assets'))

var dir_opts_public =  {
    root :  __dirname + "/public",
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
}  
  
regCtrl(app,urlencodedParser,dir_opts_public);

app.get('/', function(req,res){
  res.sendFile("index.html",dir_opts_public,function(err){
    if(err) 
      throw err;
    else
      console.log(req.get("host"));
  });
});



app.listen(process.env.PORT, process.env.IP, function(){
  console.log("LISTENING AT PORT AND IP" + process.env.PORT, process.env.IP);
})