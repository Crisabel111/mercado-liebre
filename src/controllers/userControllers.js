const path = require('path');
const userControllers = {
    //vista del login
    login : (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/login.html'));
    },
    //funcionamiento del login
    processLogin : (req, res) =>{
    },

    //vista del form de registro del usuario
    registroUsuario : (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/registro.html'));
    },
    // funcionamiento del registro
    CrearUsuario: (req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/registro.html'));
    },

    //vista del perfil del usuario comun
    perfilUsuario :(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/vista-usuario.html'));
    },

    //vista cambiar contraseña usuario comun
    contrasenaUsuario:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/vista-contrasena.html'));
    },
    //funcionamiento del cambio d ela contraseña usuario comun
    cambiarContrasena:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/vista-contrasena.html'));
    },

    //vista editar usuario
    editarUsuario:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/editar-usuario.html'));
    },

    //funcionamiento de la actualizacion de los datos del usuario 
    actualizarUsuario:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/editar-usuario.html'));
    },

    //vista crear usuario desde el admin
    agregarUsuario :(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/agregar-usuario.html'));
    },

    //funcionamiento de la creación de un usuario por parte del admin
    crear:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/agregar-usuario.html'));
    },

    //vista del admin 
    vistaAdmin :(req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/user/vista-admin.html'));
    },
    //funcionamiento  de la vista del admin 
    Admin:(req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/user/vista-admin.html'));
    },
    
    //Eliminar usuario
    eliminarUsuario:(req,res) => {
        res.sendFile(path.resolve(__dirname , '../views/user/home.html'));
    },
    
  
    
};
module.exports = userControllers;  