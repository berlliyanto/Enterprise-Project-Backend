const mongoose = require('mongoose');
const { Schema } = mongoose;

const machineSchema = new Schema({
    oven:{
        type: Number
    },
    proofer:{
        type: Number
    },
    mixer:{
        type: Number
    },
    pembagi:{
        type: Number
    }
});

const machine = mongoose.model("machine", machineSchema);
module.exports = machine;