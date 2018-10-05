'use strict'

var express = require('express');
const bodyParser = require('body-parser');

var app = express.Router();
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Retrieve the Recharge model
const rechargeModel = require('../database_modals/recharge.modals');

app.use(express.static(__dirname));

app.get('/recharges/getrecharge',(req,res)=> {
    rechargeModel.find().exec().then(recharges => {
        res.json(recharges);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.post('/recharges/postrecharge' , (req,res)=> {

    var recharge = new rechargeModel({
        rechargeid: req.body.rechargeid,
        creditnum: req.body.creditnum,
        debitnum: req.body.debitnum,
        amount: req.body.amount,
        balance: req.body.balance,
        pinnum:req.body.pinnum,
        mobilenum:req.body.mobilenum
    });


    recharge.save().then(recharge => {
        res.json(recharge);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.delete('/recharges/deleterecharge' , (req,res) => {
    rechargeModel.remove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });

});

module.exports = app;