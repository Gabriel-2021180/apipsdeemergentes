const ObjectPersonDAL = require('../DAL/objectperson');

exports.datosAgregados = async (frase, reaccion, colorfondo, colorLetra, ip) => {
    
  try {
    const resultado = await ObjectPersonDAL.agregarDatoUsuario(
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      //cantidadClicks,
    );
    
    return resultado;
  } catch (error) {
    // La excepción de la DAL se propaga a la lógica de negocios
    return error.message;
  }
};


