const express= require('express');
const router = express.Router();
const app = express();
app.set('view engine', 'pug');
app.set('views','../views'); 

router.get('/home', (req, res)=>{
    res.render("Home");
 });

 module.exports = router;