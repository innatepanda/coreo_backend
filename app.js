
// Entry Point of the API Server 
  
const express = require('express');
  
/* Creates an Express application. 
   The express() function is a top-level 
   function exported by the express module.
*/
const app = express();

app.get('/', (req, res, next) => {
    res.send("TEST DATA");
    
})
  
// Require the Routes API  
// Create a Server and run it on the port 3000
app.listen(5000, function () {
    console.log("listening on port 5000")
    // Starting the Server at the port 3000
})