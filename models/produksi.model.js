const mongoose = require('mongoose');
const { Schema } = mongoose;

const produksiSchema = new Schema({
    rotikeju:{
        type: Number
    },
    roticoklat:{
        type: Number
    },
    rotistroberi:{
        type: Number
    },

});

const produksi = mongoose.model("produksi", produksiSchema);
module.exports = produksi;