var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    nume: String,
    prenume: String,
    tel: Number,
    email: String,
    radio1: Boolean,
    radio2: Boolean
});

module.exports = mongoose.model('Profile', profileSchema);