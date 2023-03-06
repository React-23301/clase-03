
/** Abro un prompt y obtengo el nombre */
let name = prompt('¿Cuál es tu nombre?');

/** Obtengo el objeto div del documento */
let myApp = document.getElementById('myApp');

/** Pongo el nombre en el div */
myApp.innerHTML = "Hola " + name + "!";


