module.exports = function(app,urlencodedParser,opts)
{
    app.get("/register", function(req,res){
      res.sendFile("sign-up.html",opts,function(err){
        if(err) throw err;
      })
    })

    app.post("/register", urlencodedParser, function(req,res){
      console.log(req.body);
    })    
}