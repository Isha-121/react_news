const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const ReaderSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:[true, "Email id already present"]

    },
    password:{
        type:String,
        required:true,

    },
    confirm:{
        type:String,
        required:true
    }
})

const Users = new mongoose.model('User',ReaderSchema);
module.exports = Users;

