const mongoose = require('mongoose');
const {Schema} = mongoose;

const produkSchema = new Schema({
    produk:{
        type: String,
        required: true
    },
    stok:{
        type: Number,
        required: true,
    },
    harga:{
        type: Number,
        require: true
    }
});

const product = mongoose.model("produk", produkSchema);
module.exports = product;