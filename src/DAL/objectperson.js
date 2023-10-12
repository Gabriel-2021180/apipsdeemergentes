const DatosUsuario = require('../entidades/datos');

// Función para agregar un nuevo dato de usuario en objectperson.js
async function agregarDatoUsuario(frase, reaccion, colorfondo, colorLetra, ip) {
    
  try {
    // Verifica si la IP está registrada más de 3 veces
    const cantidadRegistros = await verificarRegistrosIP(ip);
    
    if (cantidadRegistros > 3) {
      return 'demasiados intentos';
    }

    const nuevoDatoUsuario = new DatosUsuario({
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      sexo,
      //cantidadClicks,
    });
    
    const resultado = await nuevoDatoUsuario.save();
    
    if (resultado) {
      
      return '¡Registro guardado correctamente!';
    } else {
    
      return 'Ocurrió un error al guardar el registro.';
    }
  } catch (error) {
    throw error;
  }
}

async function verificarRegistrosIP(ip) {
  // Realiza una consulta a la base de datos para obtener la cantidad de registros de la IP
  const cantidadRegistros = await DatosUsuario.countDocuments({ ip });

  // Devuelve la cantidad de registros
  return cantidadRegistros;
}

module.exports = {
  agregarDatoUsuario,
  // Exporta otras funciones aquí si es necesario...
};
