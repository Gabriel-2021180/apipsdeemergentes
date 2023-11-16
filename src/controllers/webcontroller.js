const LogicaNegocios = require('../Logica De Negocio/datosLN');
const resultados = require('../Logica De Negocio/resultadosLN');
exports.datosAgregados= async (req, res) => {
    
  const {
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      sexo,
    } = req.body;

    
  try {
      const resultado = await LogicaNegocios.datosAgregados(
        frase,
        reaccion,
        colorfondo,
        colorLetra,
        ip,
        sexo,
        personalidad= await determinarPersonalidad(colorfondo,colorLetra, reaccion),
        
      );
      
      // El controlador solo necesita comprobar el mensaje de éxito
      if (resultado === '¡Registro guardado correctamente!') {
        res.json({ mensaje: resultado });
      } else {
        res.json({ mensaje: resultado });
      }
    } catch (error) {
      res.json({ mensaje: error.message });
    }
};
exports.verRegistros = async (req, res) => {
  try{
    const resultado = await resultados.verRegistros();
    res.json(resultado)
  }catch (error) {
    res.json(error)
  }
}
exports.verReglas = async (req, res) => {
  const id = req.params.id;
  try{
    const resultado = await resultados.verReglas(id);
    res.json(resultado)
  }catch (error) {
    res.json(error)
  }
}

async function determinarPersonalidad(colorFondo, colorLetra, reaccion) {
  const introvertidoColoresFondo = [
    "rgb(0, 194, 222)",// Un color azul verdoso claro
    "rgb(0, 186, 113)",//Un color verde oscuro
    "rgb(95, 40, 121)"//Un color púrpura oscuro

  ];

  const extrovertidoColoresFondo = [
    "rgb(244, 53, 69)",// rojo brillante
    "rgb(250, 137, 1)",//naranja
    "rgb(0, 65, 141)",//azul oscuro
    "rgb(250, 215, 23)"//rosa
  ];

  const introvertidoColoresLetra = [
    "rgb(0, 194, 222)",
    "rgb(0, 186, 113)",
    "rgb(95, 40, 121)"
  ];

  const extrovertidoColoresLetra = [
    "rgb(244, 53, 69)",
    "rgb(250, 137, 1)",
    "rgb(0, 65, 141)",
    "rgb(250, 215, 23)"
  ];

  const reaccionPositiva = "Me encanta";
  const reaccionNegativa = "Me da asco";

  const esIntrovertidoFondo = introvertidoColoresFondo.includes(colorFondo);
  const esExtrovertidoFondo = extrovertidoColoresFondo.includes(colorFondo);
  const esIntrovertidoLetra = introvertidoColoresLetra.includes(colorLetra);
  const esExtrovertidoLetra = extrovertidoColoresLetra.includes(colorLetra);
  const esReaccionPositiva = reaccion === reaccionPositiva;
  const esReaccionNegativa = reaccion === reaccionNegativa;

  if (esIntrovertidoFondo && esIntrovertidoLetra && esReaccionPositiva) {
    return 'introvertido';
  } else if (esIntrovertidoFondo && esIntrovertidoLetra && esReaccionNegativa) {
    return 'extrovertido';
    } else if (esExtrovertidoFondo && esExtrovertidoLetra && esReaccionNegativa) {
      return 'introvertido';
    } else if (esExtrovertidoFondo && esExtrovertidoLetra && esReaccionPositiva) {
      return 'extrovertido';
    } else if (esExtrovertidoFondo && introvertidoColoresLetra && esReaccionPositiva) {
      return 'extrovertido';
    } else if (esExtrovertidoFondo && introvertidoColoresLetra && esReaccionNegativa) {
      return 'introvertido';
    } else if (esIntrovertidoFondo && esExtrovertidoLetra && esReaccionPositiva) {
      return 'introvertido';
      } else if (esIntrovertidoFondo && esExtrovertidoLetra && esReaccionNegativa) {
      return 'extrovertido';
  } else {
    return 'desconocido';
  }
}

// Resto de tu código en LogicaNegocios.js

