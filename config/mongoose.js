const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/Placement_Cell');

const db =  mongoose.connection;

db.on('error',console.log.bind(console,"Error connecting the mongodb"));

db.once('open',function(){
    console.log('connected to database: Mongodb');
})

module.exports =db;