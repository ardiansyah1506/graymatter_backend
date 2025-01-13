require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Product = require('./models/Product');
const Category = require('./models/Category');
const User = require('./models/User');

// Koneksi ke database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedData = async () => {
    try {
        // Hapus data lama
        await Product.deleteMany({});
        await Category.deleteMany({});
        await User.deleteMany({});

        // Tambahkan kategori
        const categories = await Category.insertMany([
            { nama: 'Electronics' },
            { nama: 'Clothing' },
            { nama: 'Books' },
        ]);

        console.log('Categories seeded:', categories);

        // Tambahkan produk
        const products = await Product.insertMany([
            { nama: 'Laptop', category_id: categories[0]._id, harga: 15000000, jml_stok: 10 },
            { nama: 'T-shirt', category_id: categories[1]._id, harga: 75000, jml_stok: 50 },
            { nama: 'Novel', category_id: categories[2]._id, harga: 50000, jml_stok: 30 },
        ]);

        console.log('Products seeded:', products);

        // Tambahkan user (hashed password)
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const user = await User.create({
            username: 'admin',
            password: hashedPassword,
        });

        console.log('User seeded:', user);

        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
