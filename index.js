var express = require('express');
var path    = require('path');
var bodyParser = require("body-parser");
var regCtrl = require('./controllers/registerCtrl');
var homeCtrl    = require('./controllers/homeCtrl');

var mongoose = require('./vars/global/mongoose.js');


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
homeCtrl(app,dir_opts_public);





app.listen(process.env.PORT, process.env.IP, function(){
  console.log("LISTENING AT PORT AND IP" + process.env.PORT, process.env.IP);
})