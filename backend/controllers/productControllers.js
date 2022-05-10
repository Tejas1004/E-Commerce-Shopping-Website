const Product = require("../model/productModel");
const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

//Create Product Data --Admin 
exports.createProduct = async(req,res,next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
//Get All Products
exports.getAll = async(req,res)=>{
    const resultPerPage = 8;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
            success:true,
            products,
            productsCount
        });
}
//Get ProductDetails
exports.getProductDetails = async(req,res,next) => {
    let product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(500).json({ success:false , message:"Product Not Found" })
    }
    res.status(200).json({ success:true,product });
}

//Update Product
exports.updateProduct = async(req,res) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({ success:false , message:"Product Not Found" })
    }
    product = await Product.findByIdAndUpdate( req.params.id,req.body,{
        new:true,
        useFindAndModify:true,
        runValidators:true
    });
    res.status(200).json({ success:true,product })
}

//Delete Product
exports.deleteProduct = async(req,res,next) => {
    let product = await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({ success:false , message:"Product Deleted" })
    }
    await product.remove();
    res.status(200).json({ success:true,product })
}
