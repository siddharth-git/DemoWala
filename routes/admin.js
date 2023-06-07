const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.status(200).send('<form action="/product" method="POST"><input type="text" name="title"><button>Click ME!</button></form>');
})

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.status(200).redirect('/');
})

module.exports = router;

