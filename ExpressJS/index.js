const express = require('express')
require('dotenv').config()
require('./database/connection')
const port = process.env.PORT


//middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')



//routes
const TestRoute = require('./route/testRoute')
const CategoryRoute = require('./route/categoryRoute')
const ProductRoute = require('./route/productRoute')
const UserRoute = require('./route/userRoute')
const orderRoute = require('./route/orderRoute')



// app.get(path, function ) ->
// path -> url
// function -> what to do 
// function (request , response)
// request - > data from user to server
// response -> data to user from server
const app = express()

// middleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())



//routes
app.use(TestRoute)
app.use('/api', CategoryRoute)
app.use('/api',ProductRoute)
app.use('/api',UserRoute)
app.use('/api', orderRoute)
app.use('/puplic/uploads', express.static('public/uploads'))

// to access app / api from browser 
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
