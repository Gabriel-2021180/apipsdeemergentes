const ObjectPersonDAL = require("../DAL/objectperson");
const ObjectReglas = require("../DAL/objectReglas");

exports.verRegistros = async () => {
  try {
    const resultado = await ObjectPersonDAL.verRegistros();
    return resultado;
  } catch (err) {
    return err.message;
  }
};

exports.verReglas = async (id) => {
  try {
    const resultado = await ObjectReglas.detPersonalidad(id);
    return resultado;
  } catch (err) {
    return err.message;
  }
};
