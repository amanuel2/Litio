module.exports = function(app,urlencodedParser,opts)
{
    var mongoose = require('./../vars/global/mongoose');
    
    
    app.get("/register", function(req,res){
      res.sendFile("sign-up.html",opts,function(err){
        if(err) throw err;
      })
    })

    app.post("/register", urlencodedParser, function(req,res){
      
      var UserModel = mongoose.model("User", ({
            username : String,
            password : String
         }));
      
      var newUser = new UserModel({
          username : req.body.username,
          password : req.body.password
      }).save(function(err){
        if(err)
          throw err;
        else
          console.log("saved")
      })
      
      console.log(req.body);
    })    
}