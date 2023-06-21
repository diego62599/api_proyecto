//Importar paquetes requeridos de Node
const {response} = require('express')
const bcrypt = require ('bcrypt')

//Importación de los modelos

const Roles = require('../models/roles')
const roles = require('../models/roles')
//const roles = require('../models/roles')

//Consultar
const rolesGet = async(req, res = response) =>{
    const {nombrerol} = req.query //Desestructuración

    //Consultar todos los usuarios
    const roles = await Roles.find()
    /*.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
*/
    res.json({
        roles
    })   
}

//Registrar
const rolesPost = async(req, res = response) => {
    const body = req.body //Captura de atributos
    let mensaje = 'INICIO'
    console.log(body)
    
   
    try {
        const roles = new Roles(body)//Instanciar el objeto
        await roles.save()//Esperar hasta que se obtenga una respuesta
        mensaje = 'La inserción se realizó exitosamente'
    } catch (error) {
        if (error){
            if(error.name === 'ValidationError'){
                console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)  //Almacenando en un array todos los errores de una manera facil de leer
            }
        
        }
        console.log(mensaje)
    }

    res.json({
        msg: mensaje
    })
}

//Modificar
const rolesPut = async(req, res = response) => {

    const {nombrerol, idusuario,permisosrol, estadorol} = req.body
    let mensaje = ''

    try{
        const roles = await Roles.findOneAndUpdate({nombrerol: nombrerol},{idusuario:idusuario, permisosrol:permisosrol, estadorol:estadorol})
        mensaje = 'La modificación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}


//eliminar
const rolesDelete = async(req, res = response) => {

    const {_id} = req.body
    let mensaje = ''

    try{
        const roles= await Roles.deleteOne({_id: _id})
        mensaje = 'La eliminiación se efectuó exitosamente.'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    rolesGet,
    rolesPost,
    rolesPut,
    rolesDelete
}

/*Crear una API con los métodos GET y POST para registrar y consultar
en una colección el número de ambiente, la fecha, hora, temperatura y 
nombre usuario

*Desplegar la API en render o el servidor de su preferencia
*/
