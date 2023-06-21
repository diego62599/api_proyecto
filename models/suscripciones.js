const {Schema, model} = require('mongoose')

const SuscripcionesSchema = Schema({
    idservicios: {
        type: String,
        unique: true,
        required: [true, 'El id de servicio es obligatorio']
    },

    regularidad: {
        type: String,
        required: [true, 'la regularidad es obligatoria'],
    
    },

    fechainicio: {
        type: Date,
       
        required: [ 'la fecha de inicio es obligatori']
    },
    fechafin: {
        type: Date,
       
        required: [ 'la fecha de fin es obligatori']
    },
   


})

module.exports = model('Suscripciones',SuscripcionesSchema)