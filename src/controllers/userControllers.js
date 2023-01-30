const path = require('path');
const userControllers = {
    login : (req,res) => {
        res.send("soy el  login");
    },
    login : (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/login.html'));
    },
    registroUsuario : (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/registro.html'));
    },

    perfilUsuario :(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/vista-usuario.html'));
    },

    vistaAdmin :(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/vista-admin.html'));
    },
    editarUsuario:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/editar-usuario.html'));
    },
};
module.exports = userControllers;