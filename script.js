/*alert("Hola Mundo");*/
/*Metodo para mostrar mensaje*/
function mensajeAlert(){
    alert("Hola mundo!!");
}

/*prompt*/
function cajitaDeTexto() {
    var nombre = prompt('Ingrese su nombre');
    document.write("<h1> Su nombre es "+ nombre +"</h1>");
}
/*Confirm*/
function confirmar() {
    var respuesta = confirm("Esta seguro de eliminar el archivo?")
    console.log (respuesta);
    if (respuesta == true) {
        alert("el mensaje fue eliminado");
    } else {
        alert("el mensjae no fue eliminado");
    }
}
/*Console*/
function consola() {
    console.log("puede ver los errores con esta opción");
}

/*variale de imagen a traves del Id*/

var imagen = document.getElementById("imagen1");
imagen.addEventListener("dblclick", () => {
/*alert("soy el DOM");*/
/*se modifica el CSS*/
    imagen.style.width ="1000px";
    imagen.style.border ="10px solid black";
});
/*Mouse*/
var box = document.getElementById("box");
box.addEventListener("mouseenter", ()=>{
    box.classList.replace("box","cambio1");
}), (box.addEventListener("mouseleave", ()=>{
    box.classList.replace("cambio1","box");
}), (box.addEventListener("mousemove", ()=> {
    console.log("el mouser se mueve");
})), (box.addEventListener("mousedown", ()=>{
    console.log("has dado click dentro de la caja ");
})), (box.addEventListener("mouseup", ()=>{
    console.log("Has levantado el click dentro de la caja ");
})) );

/*TECLADO*/
/*
 var teclado = document.getElementById("teclado");
 teclado.addEventListener("keydown", ()=>{
    console.log("has oprimido una tecla");
 });

 teclado.addEventListener("keypress", ()=>{
    console.log(("tienes la tecla sostenida"));
 });
 */

 teclado.addEventListener("keyup", (event)=>{
    console.log(event.key);
    var letra = event.key;
   var mLetra = letra.toLowerCase();

    if (mLetra === "w") {
        console.log("adelante");
    } 
    else{
        console.log("mayuscula");
    }
 }) ;

 /*objeto evento*/
 var padre = document.getElementById("padre");
 padre.addEventListener("click", (event)=>{
    console.log(event.target)
    event.target.style.background = "red";
 });

 /*Crear Elementos */
 var lista = document.getElementById("lista");
 var agregar = document.getElementById("agregar");

 agregar.addEventListener("click", ()=>{
    var texto = document.getElementById("texto").value;
    /*Me trae el texto o informacion ingresado dentro del input*/

    var etiqueta = document.createElement("li");
    /*Creo la etiqueta*/
    etiqueta.textContent = texto;
    /* se asigna Dentro de la etiqueta  inserto el texto que tiene el texto que tiene el input*/
    lista.appendChild(etiqueta);
    /*agregamos la etiqueta a la lista*/
 });