const {check,validationResult} = require('express-validator')

exports.categoryValidationRules = [
    check('category_name', 'Category name is required').notEmpty()
    .isLength({min:3}).withMessage('Category name must be at least 3 characters')
]

exports.validate = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()[0].msg})
    }
    next()
}


exports.productValidationRules = [
    check('product_name','Product name is required' ).notEmpty()
    .isLength({min:3}).withMessage('Product name must be at least 3 characters'),

    check('product_price','Product Price is required').notEmpty()
    .isNumeric().withMessage('Price must be a number'),

    check('product_description','Product Description  is required').notEmpty()
    .isLength({min:30}).withMessage('Product Description  must be at least 30 characters'),

    check('category','Category Price is required').notEmpty(),

    check('count_in_stock','Count in Stock is required').notEmpty()
    .isNumeric().withMessage('Count must be a number')
]