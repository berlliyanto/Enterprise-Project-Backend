const machineService = require('../services/machine.service');

exports.getMachine = (req, res, next)=>{
    machineService.getMachine((error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses",
                data: result,
            });
        }
    });
}

exports.updateMachine = (req, res, next)=>{
    var model = {
        oven: req.body.oven,
        pembagi: req.body.pembagi,
        proofer: req.body.proofer,
        mixer: req.body.mixer,
    };
    machineService.updateMachine(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses",
                data: result,
            });
        }
    });
}