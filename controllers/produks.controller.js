const produkService = require('../services/produk.service');

exports.manageProduk = (req, res, next) =>{
    var model = {
        method: req.query.method,
        produk: req.body.produk,
        stok: req.body.stok,
        harga: req.body.harga
    }
    produkService.manageProduk(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses kurangi produk",
                data: result
            });
        }
    })
}

exports.getProduk = (req, res, next)=>{
    produkService.getProduk((error,result)=>{
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