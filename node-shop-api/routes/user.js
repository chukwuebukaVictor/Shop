const router = require('express').Router();

router.get('/usertest',(req,res)=> {
    res.send('This is a new user')
})

router.post('/userposttest', (req,res) =>{
    // res.send('correct me')
    const username = req.body.username;
    res.send(`Your username is ${username}`)
})

module.exports = router;