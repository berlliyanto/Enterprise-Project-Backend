const mongoose = require('mongoose');
const { Schema } = mongoose;

const rawSchema = new Schema({
    gula:{
        type: Number
    },
    terigu:{
        type: Number
    },
    keju:{
        type: Number
    },
    coklat:{
        type: Number
    },
    telur:{
        type: Number
    },
    stroberi:{
        type: Number
    }
});

const raw = mongoose.model("raw", rawSchema);
module.exports = raw;