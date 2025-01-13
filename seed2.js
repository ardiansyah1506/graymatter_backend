require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Category = require('./models/Category');
const User = require('./models/User');

// Koneksi ke database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const deleteData = async () => {
    try {
        // Hapus semua data dari koleksi
        await Product.deleteMany({});
        await Category.deleteMany({});
        await User.deleteMany({});

        console.log('All data has been deleted');

        process.exit();
    } catch (error) {
        console.error('Error deleting data:', error);
        process.exit(1);
    }
};

deleteData();
