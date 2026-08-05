// declare express framework
const express = require('express')
const app = express()

//declare express json and urlencoded( to help server recevice input from client)
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//declare cors (for client can recevice API from server)
//without cors, client will not be able to recevice API from server
const cors = require('cors')
app.use(cors())

// declare mongoose to connect to database
const mongoose = require("mongoose") 
const database = "mongodb+srv://datdinh66:nguoiaye3@tdq.zv9hcsp.mongodb.net/comp1842"
mongoose.connect(database)
    .then(()=> console.log("connect to database succes"))
    .catch((err) => console.log("connect to DB fail " + err))

const router = require('./api/routes/VocabRoute')

router(app)

app.listen(process.env.PORT || 3600, () => {
    console.log("server is running at port " + (process.env.PORT || 3600))
}) 
