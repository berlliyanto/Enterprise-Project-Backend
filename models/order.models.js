const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    namaPembeli: {
        type: String,
        required: true,
    },
    alamat: {
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    produk: {
        type: String,
    },
    jumlah: {
        type: Number,
    },
    total:{
        type: Number,
    },
    tanggal:{
        type: String,
    },
    state:{
        type: Boolean,
    }
});

const order = mongoose.model("order", orderSchema);
module.exports = order;