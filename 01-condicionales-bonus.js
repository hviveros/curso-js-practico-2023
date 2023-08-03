// replicar el comportamiento de una condicional, pero con un sólo if tanto en array u objetos
// Solución, ingresar todo en una función, en un ciclo
function conseguirTipoSuscripcion(suscripcion){


    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos durante un año");
        return;
    }

    //Efecto warning
    console.warn('Ese tipo de suscripción no existe')
}

//crear un objeto
const tipoDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    basic: "Puedes tomar casi todos los cursos durante un mes",
    expert: "Puedes tomar casi todos los cursos durante un año",
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos durante un año"
}
//Se puede acceder a los elementos de un objeto con [''], si le especificamos el nombre de la propiedad
//Otra forma, crear una variable y asignar uno de las claves del elemento
const ejemploSuscripcion = 'free'
//Solución convertir la variable en parámetro para siguiente función
function conseguirTipoSuscripcion(suscripcion){
    if (tipoDeSuscripciones[suscripcion]) {
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    //para que no tenga un 'else', si cumple ya se ejecuta el 'return'
    console.warn('Ese tipo de suscripción no existe')
}