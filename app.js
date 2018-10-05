'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

var router      = express.Router();

var RechargeRoute = require('./services/recharge.controller');

mongoose.Promise=global.Promise;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Mongo connection
mongoose.connect('mongodb://localhost:27017/opd-be',err =>{
    if (err){
        console.log(err);
        process.exit(1);
    }
});

app.use('/',RechargeRoute);

app.listen(3005, err => {
    if (err){
        console.error(err);
        return;
    }
    console.log('Listening to 3005 port');
});