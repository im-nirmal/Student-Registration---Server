require('dotenv').config()
const express = require('express')
const cors = require('cors')

const router = require('./Routes/router')
require('./DB/connection')


//create express server application
const testServer = express()

//use cors in express server
testServer.use(cors())
testServer.use(express.json())
//use router
testServer.use(router)

//port
const PORT = 3000 || process.env.PORT

//run the server
testServer.listen(PORT,()=>{
    console.log(`TEST Server started at PORT : ${PORT}`);
})

//run the server to listen client request
testServer.get("/",(req,res)=>{
    res.status(200).send("Test Server started and waiting for client request")
})