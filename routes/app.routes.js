const express = require("express");
const router = express.Router();


const userController = require('../controllers/user.controller');
const produkController = require('../controllers/produks.controller');
const orderController = require("../controllers/order.controller");
const machineController = require("../controllers/machine.controller");
const rawController = require('../controllers/rawmaterial.controller');
const produksiController = require('../controllers/produksi.controller');

//User
router.post("/user", userController.addusers);
router.get("/user", userController.getUsers);
router.delete("/user", userController.deleteUser);
router.post("/login", userController.Login);

//produk
router.post("/produk", produkController.manageProduk);
router.get("/produk", produkController.getProduk);

//Order
router.post("/order", orderController.createOrder);
router.get("/order", orderController.getOrder);
router.put("/order", orderController.updateStatusOrder);

//Machine
router.put("/machine", machineController.updateMachine);
router.get("/machine", machineController.getMachine);

//Raw Material
router.get("/raw", rawController.getRaw);

//Produksi
router.get("/produksi", produksiController.getProduksi);
router.put("/produksi", produksiController.resetProduksi);




module.exports = router;
