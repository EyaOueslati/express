const express= require('express');
const router = express.Router();
const app = express();
app.set('view engine', 'pug');
app.set('views','../views'); 

router.get('/Contact', (req, res)=>{
    res.render("Contact");
 });

 module.exports = router;