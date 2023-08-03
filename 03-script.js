/**
* ESCUCHAR EVENTOS
*/

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const formulario = document.querySelector('#formulario');
const btn = document.getElementById('btnCalcular');
const resultado = document.querySelector('#resultado');


//onClick('nombreFunción') -> uno de los eventos para escuchar elementos
//onChange('') -> otra forma
//onSubmit() ->  para formularios

function sumarInputsValues(event) {
    // console.log({event});
    //Esto hace que no se ejecute los eventos por defecto
    event.preventDefault();
    //Con los selectores ya obtenemos todas las propiedades de los inputs
    //para que interprete como número se debe agregar la función Number()
    const sumaInputs = Number(input1.value) + Number(input2.value);

    resultado.innerText = "Resultado: " + sumaInputs;
}

/** MÉTODO addEventListener */
// ya no es necesario colocar el nombre de la función en el HTML
// primero seleccionar con un selector o con getElementById y guardar
// en una variable
// variable.addEventListener('evento',la función que debe mandar llamar, sin ())

// btn.addEventListener('click', btnClick);
formulario.addEventListener('submit', sumarInputsValues);