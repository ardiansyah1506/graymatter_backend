const Category = require('../models/Category');

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const { name, category_id } = req.body; // Sesuaikan properti sesuai model

        // Validasi input
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        // Cek apakah category_id sudah ada (opsional, jika category_id unik)
        if (category_id) {
            const existingCategory = await Category.findOne({ category_id });
            if (existingCategory) {
                return res.status(409).json({ message: 'Category ID already exists' });
            }
        }

        // Simpan data
        const category = new Category({ name, category_id });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Failed to create category', error });
    }
};



// Get all categories
// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        // Fetch all categories from the database
        const categories = await Category.find();

        // Respond with the list of categories
        res.status(200).json(categories);
    } catch (error) {
        // Handle errors if fetching fails
        res.status(500).json({ message: 'Failed to fetch categories', error });
    }
};


// Update a category
exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update category', error });
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete category', error });
    }
};
