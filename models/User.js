const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
});

// Tidak perlu pre-save hook untuk password hashing
module.exports = mongoose.model('User', UserSchema);
