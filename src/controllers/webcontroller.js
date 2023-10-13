const LogicaNegocios = require('../Logica De Negocio/datosLN');

exports.datosAgregados= async (req, res) => {
    
  const {
      frase,
      reaccion,
      colorfondo,
      colorLetra,
      ip,
      sexo,
      //cantidadClicks,
    } = req.body;

    
  try {
      const resultado = await LogicaNegocios.datosAgregados(
        frase,
        reaccion,
        colorfondo,
        colorLetra,
        ip,
        sexo,
        //cantidadClicks,
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