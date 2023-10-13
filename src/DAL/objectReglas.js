const Reglas = require('../entidades/reglas');
const DatosPersonas = require('../entidades/datos');

async function verReglas(){
    const resultado = await Reglas.find();
    return resultado
}
async function detPersonalidad(id) {

    const persona = await DatosPersonas.findById(id);

    switch(persona.colorLetra) {
        case "rgb(95, 40, 121)":
            persona.colorLetra ="Violeta";
            break;
        case 'rgb(250, 137, 1)':
            persona.colorLetra ="Naranja";
            break;
        case 'rgb(0, 65, 141)':
            persona.colorLetra ="Índigo";
            break;
        case 'rgb(0, 194, 222)':
            persona.colorLetra ="Azul";
            break;
        case "rgb(0, 186, 113)":
            persona.colorLetra ="Verde";
            break;
        case "rgb(250, 215, 23)":
            persona.colorLetra ="Amarillo";
            break;
        case "rgb(244, 53, 69)":
            persona.colorLetra ="Rojo";
            break;
            default:
                persona.colorLetra = "puto";
    }
    switch(persona.colorfondo){
        case "rgb(95, 40, 121)":
            persona.colorfondo ="Violeta";
            break;
        case "rgb(250, 137, 1)":
            persona.colorfondo ="Naranja";
            break;
        case "rgb(0, 65, 141)":
            persona.colorfondo ="Índigo";
            break;
        case "rgb(0, 194, 222)":
            persona.colorfondo ="Azul";
            break;
        case "rgb(0, 186, 113)":
            persona.colorfondo ="Verde";
            break;
        case "rgb(250, 215, 23)":
            persona.colorfondo ="Amarillo";
            break;
        case "rgb(244, 53, 69)":
            persona.colorfondo ="Rojo";
            break;
    }
    

    const condiciones = {
        colorletra: persona.colorLetra, // Condición para el campo "colorletra"
        colorfondo: persona.colorfondo, // Condición para el campo "colorfondo"
        Reacción: persona.reaccion // Condición para el campo "Reacción"
      };


    const resultado = await Reglas.findOne(condiciones);
    console.log(resultado,condiciones);
    const personalidad = resultado.Personalidad;

    return {personalidad};

}

module.exports = {
    verReglas,
    detPersonalidad,
}