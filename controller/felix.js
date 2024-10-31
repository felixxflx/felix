const Felix = require('../model/felix');

const felixGet = (req,res) => {
    Felix.find().then((result) => {
        res.status(201).json({
            result : result
        })
    }).catch((error) => {
        res.status(400).json({
            message : error.message
        })
    })
}

const felixCreate = (req,res) => {
    const felix = new Felix({
        alamat : req.body.alamat,
        genre_pariwisata : req.body.genre_pariwisata
    });

    felix.save().then((result) => {
        res.status(201).json({
            result : result,
        })
    }).catch((error) => {
        res.status(400).json({
            message : error.message,
        })
    })
}

module.exports = {
    felixGet,
    felixCreate
}
