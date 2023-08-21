const orderService = require('../services/order.service');
const produk = require('../models/produk.models');

let date = new Date(); 
let localTime = date.getTime(); 
let localDate = new Date(localTime);
let nowdate = localDate.toLocaleString('id', { timeZone: 'Asia/Jakarta' });

let HargaRotiA;
let HargaRotiB;
let HargaRotiC;

exports.createOrder = async (req, res, next)=>{
        const RotiA = await produk.findOne({produk:"Roti Coklat"});
        const RotiB = await produk.findOne({produk:"Roti Keju"});
        const RotiC = await produk.findOne({produk:"Roti Stroberi"});
        HargaRotiA = RotiA.harga;
        HargaRotiB = RotiB.harga;
        HargaRotiC = RotiC.harga;
    var jumlah  = req.body.jumlah;
    var model = {
        namaPembeli: req.body.namaPembeli,
        alamat: req.body.alamat,
        email: req.body.email,
        produk: req.body.produk,
        jumlah: req.body.jumlah,
        total: (req.body.produk=="Roti Coklat")?HargaRotiA*jumlah:(req.body.produk=="Roti Keju")?HargaRotiB*jumlah:HargaRotiC*jumlah,
        tanggal: nowdate,
        state: false
    }

    orderService.createOrder(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "berhasil ambil produk",
                data: result
            });
        }
    })
}

exports.getOrder = (req, res, next)=>{
    orderService.riwayatOrder((error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "berhasil ambil produk",
                data: result
            });
        }
    })
}

exports.updateStatusOrder = (req, res, next)=>{
    var model = {
        id: req.body.id,
        state: req.body.state
    }
    orderService.updateStatusOrder(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "berhasil ambil produk",
                data: result
            });
        }
    })
}