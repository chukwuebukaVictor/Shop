console.log("hello2 world")
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/user.js')
const authRouter = require('./routes/auth.js')

dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('DB connection is successful'))
.catch((err)=> console.log('err'))

app.use(express.json());
app.use("/api/auth",authRouter);
app.use("/api/users",userRouter);

app.listen(process.env.PORT || 5000,()=> {
    console.log('Backend server is started')
})