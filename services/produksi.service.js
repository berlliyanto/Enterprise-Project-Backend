const produksi = require('../models/produksi.model');
const machine = require('../models/machine.model');
const product = require('../models/produk.models');

let oven;
let proofer;
let pembagi;
let mixer;

async function fetchMachine(){
    const fetch = await machine.findOne();
    oven = fetch.oven;
    proofer = fetch.proofer;
    pembagi = fetch.pembagi;
    mixer = fetch.mixer;
}

async function updateProduksi(){
    if(oven==1&&proofer==1&&pembagi==1&&mixer==1){
         produksi.updateOne({},{
            $inc:{
                roticoklat: 10,
                rotikeju: 10,
                rotistroberi: 10
            }
        }).then((response)=>{
            console.log("ok produksi");
        });
        product.updateMany({}, {
            $inc:{
                stok: 10
            }
        }).then((response)=>{
            console.log("ok produksi");
        });
    }
}

setInterval(() => {
    fetchMachine();
    updateProduksi();
}, 5000);

async function getProduksi(callback){
    produksi.find()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    });
}

async function resetProduksi(params,callback){
    produksi.updateMany({},{
        $set:{
            roticoklat:0,
            rotikeju:0,
            rotistroberi:0
        }
    }) .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    });
}

module.exports = {
    getProduksi,
    resetProduksi
}