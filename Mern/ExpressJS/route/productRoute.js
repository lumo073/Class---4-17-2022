const express = require('express')
const { addProduct, getAllProducts, getProductDetails, getProductByCategory, updateProduct, deleteProduct } = require('../controller/productCOntroller')
const { requireSignin } = require('../controller/userController')
const upload = require('../utils/fileUpload')
const { productValidationRules, validate } = require('../validation')
const router = express.Router()

router.post('/addproduct', upload.single('product_image'), productValidationRules,validate,requireSignin, addProduct)
router.get('/getallproducts', getAllProducts)
router.get('/productdetails/:id', getProductDetails)
router.get('/productsbycategory/:category_id', getProductByCategory)
router.put('/updateproduct/:id',requireSignin, updateProduct)
router.delete('/deleteproduct/:id',requireSignin, deleteProduct)

module.exports = router