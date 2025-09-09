const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('MongoDB is Connected')
        })
        .catch((err) => {
            console.error('MongoDB Connection Error', err)
        })
}

module.exports = connectDB;