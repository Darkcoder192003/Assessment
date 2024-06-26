const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email :{
        type: String,
        required : true,
        unique : true
    },
    password : {
        type: String,
        required : true,
        min :6,
        max :16
    },
    gender : {
        type :String,
        required: true
    },
    usertype: {
        type : String
    }
},{timestamps :true})

const User = mongoose.model('user',userSchema);
module.exports = User