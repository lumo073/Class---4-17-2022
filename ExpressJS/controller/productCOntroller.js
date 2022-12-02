const Product = require('../model/ProductModel')

//to add product
exports.addProduct = async (req, res) => {
    let productToAdd = new Product({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        product_description: req.body.product_description,
        product_image: req.file.path,
        category: req.body.category,
        count_in_stock: req.body.count_in_stock
    })
    productToAdd = await productToAdd.save()
    if (!productToAdd) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(productToAdd)
}

//to view product list
exports.getAllProducts = async (req, res) => {
    let products = await Product.find().populate('category', 'category_name') //.select('product_name','product_price')
    if (!products) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(products)
}

// to get products detail 
exports.getProductDetails = async (req, res) => {
    let product = await Product.findById(req.params.id).populate('category', 'category_name')
    if (!product) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(product)
}

// to get products by category
exports.getProductByCategory = async (req, res) => {
    let products = await Product.find({ category: req.params.category_id }).populate('category', 'category_name')
    if (!products) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(products)
}

//to update products
exports.updateProduct = async (req, res) => {
    let productToUpdate = await Product.findByIdAndUpdate(req.params.id,
        {
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            product_description: req.body.product_description,
            product_image: req.file.path,
            category: req.body.category,
            count_in_stock: req.body.count_in_stock,
            rating: req.body.rating
        },
        { new: true }
    )
    if(!productToUpdate){
        return res.status(400).json({ error: "Something went wrong" })
    }
    else{
        res.send(productToUpdate)
    }
}

//to delete product
exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete(req.params.id)
        .then(product => {
            if (!product) {
                return res.status(400).json({ error: "Product not found" })
            }
            return res.status(200).json({ error: " Product Deleted SuccessFully" })
        })
        .catch(error => {
            return res.status(400).json({ error: "Something went wrong" })
        })
}