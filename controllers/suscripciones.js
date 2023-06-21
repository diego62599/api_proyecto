//Importar paquetes requeridos de Node
const {response} = require('express')

//Importación de los modelos

const Suscripciones = require('../models/suscripciones')
const suscripciones = require('../models/suscripciones')

//Consultar
const suscripcionesGet = async(req, res = response) =>{
    const {idservicio} = req.query //Desestructuración

    //Consultar todos los usuarios
    const suscripciones = await Suscripciones.find()
    /*.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
*/
    res.json({
        suscripciones
    })   
}

//Registrar
const suscripcionesPost = async(req, res = response) => {
    const body = req.body //Captura de atributos
    let mensaje = 'INICIO'
    console.log(body)
    
   
    try {
        const suscripciones = new Suscripciones(body)//Instanciar el objeto
        await suscripciones.save()//Esperar hasta que se obtenga una respuesta
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
const suscripcionesPut = async(req, res = response) => {

    const {idservicios, regularidad, fechainicio, fechafin} = req.body
    let mensaje = ''

    try{
        const suscripciones = await Suscripciones.findOneAndUpdate({idservicios: idservicios},{regularidad:regularidad, fechainicio:fechainicio, fechafin:fechafin})
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
const suscripcionesDelete = async(req, res = response) => {

    const {id} = req.query
    let mensaje = ''

    try{
        const suscripciones = await Suscripciones.findOneAndDelete({id: id})
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
    suscripcionesGet,
    suscripcionesPost,
    suscripcionesPut,
    suscripcionesDelete
}

/*Crear una API con los métodos GET y POST para registrar y consultar
en una colección el número de ambiente, la fecha, hora, temperatura y 
nombre usuario

*Desplegar la API en render o el servidor de su preferencia
*/
