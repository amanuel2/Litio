module.exports = function(mongoose) 
{
    mongoose.connect('mongodb://db:db@ds147900.mlab.com:47900/chat-db')//Connection
    var connection_status = mongoose.connection;
    
    
    connection_status.on("error", function(err){throw err});
    
    connection_status.once("connection", function(){
         console.log("CONNECTED!")
     })
}