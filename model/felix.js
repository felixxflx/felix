const mongoose = require("mongoose");

const felixSchema = new mongoose.Schema({
    alamat : {type: String, required: true},
    genre_pariwisata : [{type: String, required: true}],
});

module.exports = mongoose.model("Felix", felixSchema);