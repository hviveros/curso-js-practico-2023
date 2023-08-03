// console.log('Hello, world!');

//getElementsBy() -> acceder a elementos HTML
//asignaremos a una variable
// const h1 = document.getElementsByClassName();
//querySelector() -> otra forma de acceder a elementos
//con un string seleccionamos la etiqueta con la cual queremos trabajar
//querySelectorAll() -> selecciona todos los elementos de la etiqueta seleccionada y muestra como array
const h1 = document.querySelector('h1');
//acceder a una clase en específica
const parr = document.querySelector('.parr');
//acceder a una id en específica
const pid = document.querySelector('#pid');
//acceder a una input en específica
const input = document.querySelector('input');

console.log(h1, parr, pid, input);

//nueva forma de mostrar console.log
//interpreta con la etiqueta!
console.log({
    h1, 
    parr, 
    pid, 
    input
});

console.log(h1.innerText);
console.log(input.value);
//los navegadores tienen innumerables funciones en js para seleccionar el DOM


/** Escribiendo HTML desde JavaScript */
/************************************ */

//modificar el html
//con innerHTML se modifica, hasta las etiquetas de HTML
//con innerText traduce todo a texto
h1.innerHTML = 'Otro título <br> si';
//.getAttribute() -> nos ayuda a leer los atributos de los elementos
console.log(h1.getAttribute('pantalla'));
//.setAttribute() -> modificamos los atributos de los elementos
h1.setAttribute('pantalla', 'screen');


//Para trabajar con clases de CSS
//.classList.add('') -> agrega clases, .remove('') -> elimina
//.toogle('') -> cambia cada vez que se ejecute
//.contains('') -> devuelve true o false dependiendo de que si se esté ejecutando
h1.classList.add('success');


//valor por defecto en inputs
input.value = "456";


//Crear elementos HTML desde cero
//document.createElement()
console.log(document.createElement('span'));

//creamos la etiqueta 'img'
//le atribuimos el atributo 'src'
//con .append(img) -> insertamos dicho elemento en el párrafo con #pid
//.append() -> no borra el contenido actual
const img = document.createElement('img');
img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rL7XmirFrLWyDGVEGSw3UGvADiXR3gIgqg&usqp=CAU');
//Convertimos el contenido original a vacío "", luego .append()
pid.innerHTML = "";
pid.append(img);