const mongoose = require('mongoose');
const Schema = mongoose.Schema

const artistSchema = new Schema({
    name: String,
    description: String,
    hometown: String, 
    image: String
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;