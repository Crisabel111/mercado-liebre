const path = require('path');
let db = require('../database/models');
//Bcryptjs para hashear la password
const bcrypt = require('bcryptjs');

const userControllers = {
    //vista del login
    login : (req,res) => {
        res.render('user/login');
    },

    //funcionamiento del login
    processLogin : (req, res) =>{
        // db.usuario.findAll().then(function(usersDb){
             
        //         for(let i = 0; i < usersDb.length; i++){    
        //             if(usersDb[i].email == req.body.email){
             
        //                 //compara passwords
        //                 if(bcrypt.compareSync(req.body.password, usersDb[i].clave)){
                            
        
        //                     var usuarioALogearse = usersDb[i];
        
                            
        //                     break;
        //                 }
        //             }
        //         }

       
        res.render('user/login');
    },

    //vista del form de registro del usuario
    registroUsuario : (req,res) => {
        res.render('user/registro');
    },
    // funcionamiento del registro
    CrearUsuario: (req,res) => {
        // console.log("nombre:");
        // console.log(req.body.nombre);
        // console.log("email:");
        // console.log(req.body.email);
        // console.log("imagen:");
        // console.log(req.file.filename);
        // console.log("clave:");
        // console.log(req.body.password);
         
        db.usuarios.create({
          nombre : req.body.nombre,
          correo : req.body.email,
          imagen : req.file.filename,
          tipo : req.body.tipo,
          clave :req.body.password,     
          })  
          //reenvia al login para que el usuario inicie session
        res.redirect('/user/login')

    },

    //vista del perfil del usuario comun
    perfilUsuario :(req,res) => {
        // let id_editar=1;
        // db.usuarios.findOne({
        //     where : {id:id_editar}
        // }).then((elUsuario) => {
        //     console.log(elUsuario)})
            
       
        res.render('user/vista-usuario');
    },

    //vista cambiar contraseña usuario comun
    contrasenaUsuario:(req,res) => {
        res.render( 'user/vista-contrasena');
    },
    //funcionamiento del cambio d ela contraseña usuario comun
    cambiarContrasena:(req,res) => {
        res.render( 'user/vista-contrasena');
    },

    //vista editar usuario
    editarUsuario:(req,res) => {
        res.render('user/editar-usuario');
    },

    //funcionamiento de la actualizacion de los datos del usuario 
    actualizarUsuario:(req,res) => {
        res.render('user/editar-usuario');
    },

    //vista crear usuario desde el admin
    agregarUsuario :(req,res) => {
        res.render ('user/agregar-usuario');
    },

    //funcionamiento de la creación de un usuario por parte del admin
    crear:(req,res) => {
        res.render ('user/agregar-usuario');
    },

    //vista del admin 
    vistaAdmin :(req,res) => {
        res.render( 'user/vista-admin');
    },
    //funcionamiento  de la vista del admin 
    Admin:(req,res) => {
        res.render( 'user/vista-admin');
    },
    
    //Eliminar usuario
    eliminarUsuario:(req,res) => {
        res.render('user/home.html');
    },
    
  
    
};
module.exports = userControllers;  