const rawService = require('../services/rawmaterial.service');

exports.getRaw = (req, res, next)=>{
    rawService.getRaw((error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses kurangi produk",
                data: result
            });
        }
    });
}