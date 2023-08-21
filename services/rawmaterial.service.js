const raw = require('../models/rawmaterial.model');
const machine = require('../models/machine.model');

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

async function updateRaw(){
    if(oven==1&&proofer==1&&pembagi==1&&mixer==1){
        
         raw.updateOne({},{
            $inc:{
                terigu: -1,
                stroberi: -1,
                telur: -1,
                keju: -1,
                coklat: -1,
                gula: -1
            }
        }).then((response)=>{
            console.log("ok raw material");
        })
    }
}

setInterval(() => {
    fetchMachine();
    updateRaw();
}, 5000);

async function getRaw(callback){
    raw.find()
    .then((response)=>{
        if(!response) return callback("Gagal");
        return callback(null,response);
    })
    .catch((error)=>{
        return callback(error);
    });
}



module.exports = {
    getRaw,
    updateRaw
}