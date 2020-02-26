const mongoose = require('mongoose');
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/salsa-api';

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then (() => console.log('MongoDB connected successfully...'))
    .catch(() => console.log(err));

module.exports = {
    Artist: require('./artist')
}