const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const DatosUsu = new Schema({
  frase: { type: String, required: true },
  reaccion: { type: String, required: true },
  colorfondo: { type: String, required: true },
  colorLetra:{type: String, required: true},
  ip: { type: String, required: true },
  //cantidadClicks:{type: Number, required: true},
  estado: { type: Boolean, required: true, default: true },
  sexo: {type:String,required:true},
  createdAt: { type: Date, default: Date.now() },
});

const DatosUsuario = model('DatosUsuarios', DatosUsu);

module.exports = DatosUsuario;
