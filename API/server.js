const express = require('express')
const path = require('path')

const mongoose = require('mongoose')
const config = require('./DB')
memberRoute=require('./routes/memberroute');
mongoose.Promise=global.Promise;
mongoose.connect(config.DB,{useUnifiedTopology: true, useNewUrlParser: true})
.then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('can not connect to the database '+err)}
);
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());
app.use('/members',memberRoute);

let port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log('Listening on port: '+port);
})
