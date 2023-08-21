const machine = require('../models/machine.model');

async function getMachine(callback){
    machine.find()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    });
}

async function updateMachine(params,callback){
    machine.updateOne(
        {},{
            $set:{
                mixer: params.mixer,
                proofer: params.proofer,
                pembagi: params.pembagi,
                oven: params.oven
            }
        }
    )
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    });
}

module.exports = {
    getMachine,
    updateMachine
}