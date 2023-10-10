const ObjectPersonDAL = require('../DAL/objectperson');

// Función para agregar un nuevo dato de usuario en la lógica de negocios


exports.datosAgregados = async (frase, reaccion, colorfondo, colorLetra, ip, cantidadClicks) => {
    
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
    throw error;
  }
};


