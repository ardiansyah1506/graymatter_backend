const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: String,
    nama: String,
    category: String,
    harga: Number,
    jml_stok: Number,
});

module.exports = mongoose.model('Product', ProductSchema);
