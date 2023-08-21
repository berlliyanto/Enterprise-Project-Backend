const userService = require("../services/user.service");

exports.Login = (req, res, next)=>{
    var model = {
        username: req.body.username,
        password: req.body.password
    };
    userService.login(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses Login",
                data: result
            });
        }
    });
}

exports.addusers = (req, res, next)=>{
    var model = {
        username: req.body.username,
        password: req.body.password,
        level: req.body.level,
    }
    userService.addUser(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses tambah user",
                data: result
            });
        }
    })
}

exports.getUsers = (req, res, next)=>{
    var model = {

    }
    userService.getUser(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses ambil data user",
                data: result
            });
        }
    })
}

exports.deleteUser = (req, res, next)=>{
    var model = {
        _id: req.body._id
    }
    userService.deleteUser(model,(error,result)=>{
        if(error){
            return next(error);
        }else{
            return res.status(200).send({
                message: "Sukses ambil data user",
                data: result
            });
        }
    })
}