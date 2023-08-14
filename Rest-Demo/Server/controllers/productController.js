const Product = require('../models/product');

exports.fetchAll = (req,res,next)=>{
    res.status(200).json(Product.getAll());
};