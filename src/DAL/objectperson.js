const DatosUsuario = require("../entidades/datos");

// Función para agregar un nuevo dato de usuario en objectperson.js
async function agregarDatoUsuario(
  frase,
  reaccion,
  colorfondo,
  colorLetra,
  ip,
  sexo, 
  personalidad
) {
  try {
    var nuevoDatoUsuario = new DatosUsuario({
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      sexo,
      personalidad
      //cantidadClicks,
    });

    
    nuevoDatoUsuario.createdAt =  await getRandomDate();

    const resultado = await nuevoDatoUsuario.save();

    if (resultado) {
      return "¡Registro guardado correctamente!";
    } else {
      return "Ocurrió un error al guardar el registro.";
    }
  } catch (error) {
    throw error;
  }
}
async function getRandomDate() {
  const start = new Date("2023-11-01T00:00:00Z");
  const end = new Date("2023-12-07T00:00:00Z");

  const randomDate = getRandomDateBetween(start, end);

  return randomDate;
}
function getRandomDateBetween(start, end) {
  const differenceInMilliseconds = end.getTime() - start.getTime();

  const randomNumber = Math.floor(Math.random() * differenceInMilliseconds);

  const randomDate = new Date(start.getTime() + randomNumber);

  return randomDate;
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
