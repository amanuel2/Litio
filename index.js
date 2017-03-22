var express = require('express');
var path    = require('path');

var app = express();
const PORT = 8080;



var root_dir_opts = {
  root :  __dirname + "/",
  dotfiles: 'deny',
  headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
  }
}

app.get('/', function(req,res){
  res.sendFile("index.html",root_dir_opts, function(err){
    if(err) {
      console.log("ERROR : " + err);
      throw err;
    }
    else
      console.log(req.get("host"));
  });
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("LISTENING AT PORT AND IP" + process.env.PORT, process.env.IP);
})