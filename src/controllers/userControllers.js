const path = require('path');
let db = require('../database/models');
//Bcryptjs para hashear la password
const bcrypt = require('bcryptjs');
const {validationResult, body} = require('express-validator');


const userControllers = {
    //vista del login
    login : (req,res) => {
        //console.log(req.session.usuarioLogeado)
        res.render('user/login');
    },

    //funcionamiento del login
    processLogin : (req,res) => {
        //console.log("entro aqui arriba");
        //console.log(req.body.email);
        //console.log(req.body.password);
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
                        password: {msg:'Credenciales invalidas'}      
                }})
                }
                /// aca estaria guardando al usuario en session una variable que se comparte en todo el proyecto 
                req.session.usuarioLogeado = usuarioALogearse;
                console.log(req.session.usuarioLogeado)
        
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

logout : (req,res) => {
    req.session.destroy()
    res.clearCookie('userEmail')
    return res.redirect('/')
},
      
        


    //vista del form de registro del usuario
    registroUsuario : (req,res) => {
        //console.log("registro usuario");
        res.render('user/registro');
    },
    // funcionamiento del registro
    CrearUsuario: async (req,res) => {
        try {

            let datos = req.body;
            
            let errors = validationResult(req)
        
        console.log(errors);
        // console.log("nombre:");
        // console.log(req.body.nombre);
        // console.log("email:");
        // console.log(req.body.email);
        // console.log("imagen:");
        // console.log(req.file.filename);
        // console.log("clave:");
        // console.log(req.body.password);
        if (errors.isEmpty()) {
         
        db.usuarios.create({
          nombre : req.body.nombre,
          correo : req.body.email,
          imagen : req.file.filename,
          tipo : req.body.tipo,
          clave :bcrypt.hashSync(req.body.password,10),     
          })  
          //reenvia al login para que el usuario inicie session
        res.redirect('/')
   
    } else {
         //elimina la imagen que acabamos de subir
         if(req.file) {
		    fs.unlinkSync(__dirname+'/../../public/img/'+req.file.filename);
		}
        
       //devuelve la misma vista con los mensajes de error
       res.render('user/registro', {errors : errors.mapped(), old: req.body})

      	
   }
} catch (error){res.send(error)}




},
    


        
 
    //vista del perfil del usuario comun
    perfilUsuario :(req,res) => {

        var data={
            id:req.session.usuarioLogeado.id,
            nombre:req.session.usuarioLogeado.nombre,
            correo:req.session.usuarioLogeado.correo,
            imagen:req.session.usuarioLogeado.imagen
        }
        //console.log("perfil")
        //console.log(req.session.usuarioLogeado.tipo)
        res.render('user/vista-usuario',{datos:data});
    },

    //vista cambiar contraseña usuario comun
    contrasenaUsuario:(req,res) => {
        res.render( 'user/vista-contrasena');
    },
    //funcionamiento del cambio de la contraseña usuario comun
    cambiarContrasena:(req,res) => {
        // console.log("trato de cambiar la password")
        // console.log(req.body.password)
        // console.log(req.session.usuarioLogeado.id)
        try{
            db.usuarios.update({
                clave : bcrypt.hashSync(req.body.password,10),
                },{
                    where:{
                        id:req.session.usuarioLogeado.id
                    }
                });
    } catch (e) {
            res.send('error');
        }
    res.redirect('/')
    },

    //vista editar usuariousuarios
    editarUsuario:(req,res) => {
       let actualizarUser = db.usuarios.findByPk(req.params.id)
		Promise.all([actualizarUser])	
            .then(function([usuarios]){
				res.render('user/editar-usuario', {usuarios : usuarios})
                console.log("voy a editar el usuario")
			})

        
    },

    //funcionamiento de la actualizacion de los datos del usuario 
    actualizarUsuario:(req, res) => {
        console.log(req.body)
        console.log(req.params.id)
        let imagen=req.body.imagen;
        if(imagen == '' || req.file == undefined){
            console.log("sin imagen nueva")
        db.usuarios.update({
            nombre : req.body.nombre,
            correo : req.body.email,
            },{
                where:{
                    id:req.params.id
                }
            });
        }else{        
            //console.log("con imagen nueva")
            //console.log(req.file)
            db.usuarios.update({
                nombre : req.body.nombre,
                correo : req.body.email,
                imagen : req.file.filename
                },{
                    where:{
                        id:req.params.id
                    }
                });  
        }


		res.redirect('/')

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

        db.usuarios.findAll()// busca todos los registros del modelo con ese alias 
			.then(function(usuarios){
				res.render('user/vista-admin', {usuarios:usuarios})//comparte la variable del modelo con la vista
            console.log("aqui entra")
            })
       
    },
    //funcionamiento  de la vista del admin 
    Admin:(req,res) => {
        
        
	

    },



    
    //Eliminar usuario
    eliminarUsuario:(req,res) => {
        		db.usuarios.destroy({
			where: {
				id: req.params.id
			}
    
		})
        res.redirect('/')
    },

    totalUsuarios: (req,res) => {
		db.usuarios.findAll()
			.then(usuarios=> {
				if(usuarios == null){
					return res.json({data: 0})
				}else{
					return res.json({
						data: usuarios.length
					})
				}
			})
	}
    
    
   
};
module.exports = userControllers;  