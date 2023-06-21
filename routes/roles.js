const {Router} = require('express')

const route = Router() 

//Importar métodos del controlador
const {rolesGet, rolesPost, rolesPut, rolesDelete} = require('../controllers/roles')

route.get('/', rolesGet)

route.post('/', rolesPost)

route.put('/', rolesPut)


route.delete('/', rolesDelete)

module.exports = route