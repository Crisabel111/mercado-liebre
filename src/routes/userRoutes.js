const userControllers = require('../controllers/userControllers');
const express = require('express');
const router = express.Router();

router.get('/login', userControllers.login)
router.get('/registro', userControllers.registroUsuario)
router.get('/perfil', userControllers.perfilUsuario)
router.get('/editar', userControllers.editarUsuario)
router.get('/admin', userControllers.vistaAdmin)




module.exports = router;