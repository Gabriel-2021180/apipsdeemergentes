const LogicaNegocios = require('../Logica De Negocio/datosLN');

exports.datosAgregados= async (req, res) => {
    
    const {
        frase,
        reaccion,
        colorfondo,
        colorLetra,
        ip,
        //cantidadClicks,
      } = req.body;

      
    LogicaNegocios.datosAgregados(frase,reaccion,colorfondo,colorLetra,ip)
  };