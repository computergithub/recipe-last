const mongoose = require('mongoose')
const dotenv=require('dotenv').config()

const mongooDb = async () => {
     await mongoose.connect(process.env.MONGODB_CONNECT)
    // console.log("connected....")
}
module.exports = mongooDb  