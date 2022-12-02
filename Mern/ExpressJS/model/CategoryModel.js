const mongoose = require('mongoose')

const categoryModelSchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

//timestamps - createdAt , UpdatedAt
//_id - auto by mongoDb

module.exports = mongoose.model('Category', categoryModelSchema)