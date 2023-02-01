function panelesData(sequelize, Datatypes){

    alias = 'paneles';
    
    cols = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      tipos: {type: Datatypes.STRING(255)},
      accesorios: {type: Datatypes.STRING(255)},
      voltaje: {type: Datatypes.STRING(255)},
      imagen: {type: Datatypes.STRING(255)},
      precio: {type: Datatypes.DECIMAL(10,0)},

     
    }
    
    config = {tableName: "paneles", camelCase: false, timestamps: false}; 
    
    const producto = sequelize.define(alias,cols,config)

     
    return producto

    }
    
    module.exports = panelesData;