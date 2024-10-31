const mongoose = require("mongoose");

const felixSchema = new mongoose.Schema({
    nama : {type: String, required: true},
    alamat : {type: String, required: true},
    genre_pariwisata : [{type: String, required: true}],
    maksimal_kapasitas : {type: String, required: true},
    pemilik : {type: String, required: true},
});

module.exports = mongoose.model("Felix", felixSchema);