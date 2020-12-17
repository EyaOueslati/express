const express = require('express');
const app = express();
const port = 4000;
var services = require('./route/Services');
var contact = require('./route/Contact');
var home = require('./route/Home');



// css

app.use(express.static("public"));

//pug

app.set('view engine', 'pug');
app.set('views','./views'); 

//port

app.listen(port, function() {
    console.log('The server is running');
  });

  //middleware not avaible

  app.use(function (req, res, next) {
    var date = new Date();
    var hour = date.getHours();
    var day = date.getDay();
  
    if (day === 0 || day === 6 || hour < 9 || hour > 17) {
      res.render("first_view");
    } else next();
  });
  
  // get page
 app.get('/Contact', contact)
 app.get('/Services',services)
 app.get('/home',home)
 
 



 
 
