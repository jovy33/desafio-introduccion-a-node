const fs = require('fs')

const obtenerCitasPrevias = () => {
    const citas = fs.readFileSync("citas.json", "utf-8")
    return citas
}

const citaNueva = (nombre, edad, animal, color, enfermedad) => {
    const cita = {
        "nombre": nombre,
        "edad": edad,
        "animal": animal,
        "color": color,
        "enfermedad": enfermedad
    }
    return cita
}

const guardarCitas = (todasLasCitas) => {
    fs.writeFileSync('citas.json', JSON.stringify(todasLasCitas), 'utf8')
}

// Crear funcion registrar
const registrar = (nombre, edad, animal, color, enfermedad) => {

    // 1.- Obtener citas previas
    const citasPrevias = obtenerCitasPrevias()

    const todasLasCitas = JSON.parse(citasPrevias)

    // 2.- Añadir cita nueva a las existentes
    const cita = citaNueva(nombre, edad, animal, color, enfermedad)
    todasLasCitas.push(cita)

    // 3.- Guardar el arreglo de citas
    guardarCitas(todasLasCitas)
}

// Crear funcion leer
const leer = () => {
    const todasLasCitas = obtenerCitasPrevias()
    JSON.parse(todasLasCitas).forEach(cita => {
        console.log(cita)
    });
}

// Exportar funcion registrar y leer
module.exports = { registrar, leer }