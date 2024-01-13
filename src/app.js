const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const {userRouter} = require('./routes/user.route')
const {PORT,DATABASE_URL} = require('./configs/constants')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

mongoose.connect(DATABASE_URL)
  .then(() => { console.log('connection established') })
  .catch((error) => { console.error(error) })

app.use('/v1/user', userRouter);

const server = http.createServer(app)
server.listen(PORT ,()=>{
    console.log(`server established at port ${PORT}`);
})