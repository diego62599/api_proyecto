const {Router} = require('express')

const route = Router() 

//Importar métodos del controlador
const {suscripcionesGet, suscripcionesPost, suscripcionesPut, suscripcionesDelete} = require('../controllers/suscripciones')

route.get('/', suscripcionesGet)

route.post('/', suscripcionesPost)

route.put('/', suscripcionesPut)


route.delete('/', suscripcionesDelete)

module.exports = route