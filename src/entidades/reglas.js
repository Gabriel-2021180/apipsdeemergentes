const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ReglasEsq = new Schema({
  colorletra: {type:String,required:true},
  colorfondo: {type:String,required:true},
  TipoChiste: {type:String,required:true},
  Hora: {type:String,required:true},
  Reacción: {type:String,required:true},
  Personalidad: {type:String,required:true}
},{
    collection: 'Reglas' // Nombre de la colección
  });

const Reglas = mongoose.model('reglas', ReglasEsq);

module.exports = Reglas;