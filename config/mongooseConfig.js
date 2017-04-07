module.exports = function(mongoose) 
{
    mongoose.connect()//Connection
    var connection_status = mongoose.connection;
    
    
    connection_status.on("error", function(err){throw err});
     connection_status.once("connection", function(){
         console.log("CONECTED!")
     })
}