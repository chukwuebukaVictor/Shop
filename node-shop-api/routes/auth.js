const router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require('crypto-js');
const bcrypt =require('bcrypt');

//REGISTER
router.post('/register', async (req,res) => {
  const {username,email,password} = req.body
  const salt = bcrypt.genSaltSync(10)
  const hash = await bcrypt.hash(password,salt)
    const newUser = new User({
        username,
        email,
        password: hash
    })

    try {
       const savedUser = await newUser.save();
      res.status(201).json(savedUser) 
    } catch (err) {
      res.status(500).json(err);
    }
})

//LOGIN
router.post('/login',async (req,res) => {
  try {
    const {username,password} = req.body
    const user = await User.findOne({username});
    !user && res.status(401).json('username or password is incorrect');
    const isMatch = await bcrypt.compare(password,user.password)
    const {password:originalPassword, ...otherDetails} = user._doc
    !isMatch? res.status(401).json('username or password is incorrect'):res.status(200).json(otherDetails)
    
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;