const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const OrderSchema = new mongoose.Schema({
    orderItemsIds: [
        {
            type: ObjectId,
            ref: "OrderItems",
            required: true
        }
    ],
    total :{
        type: Number,
        required: true
    },
    user:{
        type: ObjectId,
        ref: "User",
        required: true
    },
    shipping_address:{
        type: String,
        required:true
    },
    alternate_Shipping_address:{
        type:String
    },
    city:{
        type : String,
        required: true
    },
    zip:{
        type : String,
        required: true
    },
    country:{
        type : String,
        required: true
    },
    phone:{
        type : String,
        required: true
    },
    status:{
        type : String,
        required: true,
        default: 'pending'
    }
},{timestamps:true})

module.exports = mongoose.model("Order", OrderSchema)