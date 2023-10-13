const ObjectPersonDAL = require('../DAL/objectperson');

exports.datosAgregados = async (frase, reaccion, colorfondo, colorLetra, ip,sexo) => {
    
  try {
    const resultado = await ObjectPersonDAL.agregarDatoUsuario(
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      sexo,
      //cantidadClicks,
    );
    
    return resultado;
  } catch (error) {
    // La excepción de la DAL se propaga a la lógica de negocios
    return error.message;
  }
};


