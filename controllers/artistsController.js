const db = require('../models');

const index = (req, res) => {
    db.Artist.find({}, (err, foundArtists) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(foundArtists);
    });
};

const show = (req, res) => {
    db.Artist.findById(req.params.id, (err, foundArtist) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});

        res.json(foundArtist);
    });
};

const create = (req, res) => {
    console.log(req.body);
    db.Artist.create(req.body, (err, newArtist) => {
        if (err) return res.json(err);
        
        res.json(newArtist);
    });
};



module.exports={
    index: index,
    show: show,
    create: create,
}