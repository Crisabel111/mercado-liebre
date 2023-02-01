const path = require('path');
const productControllers = {
    detalleProducto : (req,res) => {
        res.render('product/detalle-producto');
    },
};
module.exports = productControllers;