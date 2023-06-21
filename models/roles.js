const {Schema, model} = require('mongoose')

const RolesSchema = Schema({
    nombrerol: {
        type: String,
        unique: true,
        required: [true, 'El nombre del rol es obligatorio']
    },


    
    idusuario: {
        type: String,
        required: [ 'el id de usuario es obligatorio'],
    
    
    },
    permisosrol: {
        type: String,
        required: [true, 'los permisos es obligatorio'],
        minlength: [3, 'Debe tener mínimo 3 caracteres'],
    
    },

    estadorol: {
        type: Boolean,
        default: true,
        required: [true, 'El estado del rol es obligatorio']
    },

})

module.exports = model('Roles',RolesSchema)