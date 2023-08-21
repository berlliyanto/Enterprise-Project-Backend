const produksiService = require('../services/produksi.service');

exports.getProduksi = (req, res, next)=>{
    produksiService.getProduksi((error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses  produk",
                data: result
            });
        }
    })
}

exports.resetProduksi = (req, res, next)=>{
    var model = {}
    produksiService.resetProduksi(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses  reset produk",
                data: result
            });
        }
    })
}