const mainControllers = require('../controllers/mainControllers');
const express = require('express');
const router = express.Router();
const usuarioMiddleware = require('../middlewares/usuarioMiddleware');

router.get ('/',mainControllers.home);

module.exports = router;
