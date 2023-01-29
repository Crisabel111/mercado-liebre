const path = require('path');
const productControllers = {
    detalleProducto : (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/product/detalle-producto.html'));
    },
};
module.exports = productControllers;