const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import UUID

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category_id: { type: String, default: uuidv4 }, // generate UUID secara otomatis
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
