const Product = require('../models/product');

exports.fetchAll = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching products" });
    }
};



exports.fetchById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            throw new Error("Product not found");
        }
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


exports.save = async (req, res) => {
    try {
        const product = await Product.findById(req.body.id);
        if (product) {
            throw new Error("Product ID already exists");
        }

        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.update = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw new Error("Product not found");
        }

        const updateResult = await Product.updateOne({ _id: req.params.id }, req.body);
        res.json(updateResult);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


exports.deleteById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            throw new Error("Product not found");
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json(deletedProduct);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
