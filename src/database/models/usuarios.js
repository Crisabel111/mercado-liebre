function usuariosData(sequelize, dataTypes){

    alias = 'usuarios';
    
    cols = {
      id: {type: dataTypes.INTEGER, primaryKey: true, autoIncrement: true},
      nombre: {type: dataTypes.STRING(255)},
      correo: {type: dataTypes.STRING(255)},
      clave: {type: dataTypes.STRING(100)},
      imagen: {type: dataTypes.STRING(255)},
      tipo: {type: dataTypes.STRING(255)},

    }
    
    config = {tableName: "usuarios", camelCase: false, timestamps: false}; 
    
    const usuario = sequelize.define(alias,cols,config)

    // usuario.associate = function(modelos){

    //     usuario.hasMany(modelos.venta, {   
    //       as: "venta",
    //       foreignKey: "usuario_id"
    //     });
    //   }
    
    return usuario;
    
    }
        
    module.exports = usuariosData
    