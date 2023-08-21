const product = require('../models/produk.models');

async function manageProduk(params, callback) {
    var method = params.method;
    var produk = params.produk;
    var stok = params.stok;
    switch (method) {
        default:
            const products = new product(params);
            products
                .save()
                .then((response) => {
                    return callback(null, response);
                })
                .catch((error) => {
                    return callback(error);
                });
        case "kurangi":
            product.findOneAndUpdate(
                { produk: produk },
                {
                    $inc: {
                        stok: -stok
                    }
                }
            )
                .then((response) => {
                    if (!response) return callback("Gagal");
                    return callback(null, response);
                })
                .catch((error) => {
                    return callback(error);
                });
            break;
        case "tambah":
            product.findOneAndUpdate(
                { produk: produk },
                {
                    $inc: {
                        stok: stok
                    }
                }
            )
                .then((response) => {
                    if (!response) return callback("Gagal");
                    return callback(null, response);
                })
                .catch((error) => {
                    return callback(error);
                });
            break;
    }

}

async function getProduk(callback) {
    product.find()
        .then((response) => {
            if (!response) return callback("Gagal");
            return callback(null, response);
        })
        .catch((error) => {
            return callback(error);
        })
}

module.exports = {
    manageProduk,
    getProduk
}