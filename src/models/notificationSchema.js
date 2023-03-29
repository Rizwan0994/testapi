const mongoose = require('mongoose');
//this is the collector accept or reject pickup_notificationSchema..
const notificationSchema = new mongoose.Schema({
    contact: String,
    address: String,
    nearestYard: String,
    sDate: Date,
    sTime: String,
    itemDetails: String,
    collectorYard: String,
    collectorId: String,
    status: { type: String, default: null }
});

module.exports = mongoose.model('notifycollectors', notificationSchema);