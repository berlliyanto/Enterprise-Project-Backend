const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    level:{
        type: String,
        required:true
    }
    
});

const user = mongoose.model("users", userSchema);
module.exports = user;