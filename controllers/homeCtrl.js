module.exports = function(app,dir_opts_public)
{
    app.get('/', function(req,res){
      res.sendFile("index.html",dir_opts_public,function(err){
        if(err) 
          throw err;
        else
          console.log(req.get("host"));
      });
    });    
}