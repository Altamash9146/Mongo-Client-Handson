const express = require('express');
const  route  = require('./Route');
const server = express()
server.use(express.json())

server.use('/api',route)

server.get('/',(req,res)=>{
    res.send({message:"This is for testing"})
})

server.listen(9090,()=>{
    console.log("server running on port 9090");
})