const productControllers = require('../controllers/productControllers');
const express = require('express');
const router = express.Router();


router.get('/detalle-producto', productControllers.detalleProducto);


module.exports = router;