const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const personRoutes = require('./route/person.js')

const app = express()


app.use(bodyParser.json())

app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
  });

app.use(personRoutes)

mongoose.connect(process.env.CONNECT)
    .then(result =>{
        app.listen(7070);
    })
    .catch( err => console.log(err))


