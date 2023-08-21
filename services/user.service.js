const user = require("../models/user.models");


async function addUser(params, callback) {
    if (params.username === undefined) {
        return callback("Username Required");
    }
    const users = new user(params);
    users
        .save()
        .then((response) => {
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        });
}

async function getUser(params, callback) {
    user.find().then((response) => {
        if (!response) {
            return callback("Gagal ambil data user");
        }
        return callback(null, response);
    })
        .catch((error) => {
            return callback(error);
        })
}

async function login(params, callback) {
    var username = params.username;
    var password = params.password;
    const userLogin = await user.findOne({ username: username });
    console.log(userLogin);
    if (userLogin != null) {
        if (password == userLogin.password) {
            console.log("Sukses login");
            return callback(null, userLogin.toJSON());
        } else {
            return callback("Username atau password salah");
        }
    } else {
        return callback("Username atau password salah");
    }
}

async function deleteUser(params, callback) {
    user.deleteOne({ _id: params._id })
        .then((response) => {
            if (!response) {
                return callback("Gagal ambil data user");
            }
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        })
}


module.exports = {
    addUser,
    getUser,
    login,
    deleteUser
}