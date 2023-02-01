const path = require('path');
let db = require('../database/models');
//Bcryptjs para hashear la password
const bcrypt = require('bcryptjs');
const {validationResult, body} = require('express-validator');

const userControllers = {
    //vista del login
    login : (req,res) => {
        res.render('user/login');
    },

    //funcionamiento del login
    processLogin : (req,res) => {
        //console.log("entro aqui arriba");
        console.log(req.body.email);
        console.log(req.body.password);
        //Verifica si hubo errores en el form, si no hay errores se fija si el email y la contraseña esten en la base de datos, si hay errores devuelve la misma vista con los mensaje de error
        let errors = validationResult(req);
        //console.log("entro aqui abajo");
        
        //promise de la base de datos, creamos la variable usersDb (array de usuarios) para luego iterar y encontrar el usuario requerido
        db.usuarios.findAll().then(function(usersDb){

            if (errors.isEmpty()) {
        
                
                for(let i = 0; i < usersDb.length; i++){

                    if(usersDb[i].correo == req.body.email){
                        //console.log(usersDb[i].email);
                        //console.log(req.body.email);
                        // console.log("encuentra el email")
                        // console.log(usersDb[i].clave)
                        // console.log(req.body.password)
                        // console.log(typeof(req.body.password))
                        //console.log(bcrypt.compareSync("12345","$2a$10$0AwX1abvDX/5fHrnvV.4b.NPD4mzcME1xlDGWA"))
                        //compara passwords
                        if(bcrypt.compareSync(req.body.password, usersDb[i].clave)){
                            //console.log("la clave está bien")
        
                            var usuarioALogearse = usersDb[i];
                            //console.log(usuarioALogearse);
                            
                            break;
                        }
                    }
                }
                //si bno coincide el mail o la contraseña usuarioALogearse no se crea por lo tanto es undefine y te tira un error manual en el formulario 
                if(usuarioALogearse == undefined){
                    console.log("no se logeo el usuario");
                    return res.render('user/login', { errors: {
                        password: {msg:'Credenciales invalidas'}      //esto lo corregi, le faltaba indicar que campo era el mensaje "password" (Martin)
                }})
                }
                /// aca estaria guardando al usuario en session una variable que se comparte en todo el proyecto 
                req.session.usuarioLogeado = usuarioALogearse;
                
        
                //Se crea la cookie si el usuario hizo click en Recordarme
                if (req.body.remember_user) {
                    res.cookie('userEmail',req.body.email, {maxAge : 1000 * 60 * 60 * 15})
                }
                res.redirect('/') //si todo sale bien te manda al home 
            }else{      
                return res.render( 'user/login', {errors : errors.mapped(), old: req.body})
            }
            })

        //res.render('user/login');
    },

    //vista del form de registro del usuario
    registroUsuario : (req,res) => {
        console.log("registro usuario");
        res.render('user/registro');
    },
    // funcionamiento del registro
    CrearUsuario: (req,res) => {
        console.log(req.body);
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
          clave :bcrypt.hashSync(req.body.password,10),     
          })  
          //reenvia al login para que el usuario inicie session
        res.redirect('/user/login')

    },
        
    // logeando:(req,res)=>{
    //     console.log("logeando")
    //     console.log(req.body)
    //     res.redirect('/user/login')
    // },

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