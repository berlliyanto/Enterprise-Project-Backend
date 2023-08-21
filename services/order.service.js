const order = require('../models/order.models');

async function createOrder(params, callback){
    const orderSchema = new order(params);
    orderSchema
    .save()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    })
}

async function riwayatOrder(callback){
    order.find()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    })
}

async function updateStatusOrder(params,callback){
    var id = params.id;
    var state = params.state;
    order.updateOne(
        {_id:id},
        {$set:{
            state: state
        }}
    )
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    })
}

module.exports = {
    createOrder,
    riwayatOrder,
    updateStatusOrder,
}