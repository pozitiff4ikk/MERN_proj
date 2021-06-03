const {Router} = require('express');
const router = Router();

router.get('/register',(req,res) => {
    res.render('registration')
})

router.get('/login',(req,res) => {
    res.render('login')
})

router.post('/register',(req,res) => {
    res.json('HELLO')
})

module.exports = router;