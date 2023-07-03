const mongoose = require("mongoose");

var mongoUrl = 'mongodb+srv://niharika:xrBjauTkqFRPrGCR@atlascluster.5nyujbt.mongodb.net/pizza-store'

mongoose.connect(mongoUrl,{useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', ()=>{
     console.log('MongoDb connection successful');
})

db.on('error',()=> {
    console.log('MongoDb connection failed');
})

module.exports = mongoose