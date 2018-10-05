'use strict'

const mongoose = require('mongoose');

const RechargeSchema = new mongoose.Schema({
    rechargeid: String,
    creditnum: Number,
    debitnum: Number,
    amount: Number,
    balance: Number,
    pinnum:Number,
    mobilenum:Number,

});

const Recharge = mongoose.model('Recharge', RechargeSchema);

module.exports = Recharge;