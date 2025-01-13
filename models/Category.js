const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category_id: String,
    nama: String,
});

module.exports = mongoose.model('Category', CategorySchema);
