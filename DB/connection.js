const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("Mongodb Atlas connected with testServer");
    }
).catch(err=>{
    console.log("Connection failed!!!");
    console.log(err);
})