const express= require('express');
const router = express.Router();
const app = express();


app.set('view engine', 'pug');
app.set('views','../views'); 

router.get('/Services', (req, res)=>{
    res.render("Services");
 });

 module.exports = router;